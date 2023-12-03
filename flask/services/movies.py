from db import db_connection
import logging


def getAllMovies():
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute(
            "SELECT movies.id, movies.title, movies.rating, movies.description, movies.image, list.isAdded, list.id FROM movies LEFT JOIN list ON movies.id = list.movie_id ORDER BY title ASC"
        )
        movies = cur.fetchall()
        return movies
    except Exception as e:
        logging.error(e)


def get_ten_movies_random():
    db = db_connection()
    cur = db.cursor()
    try:
        sql = "SELECT id, title, rating, image FROM movies ORDER BY RANDOM() LIMIT 5"
        cur.execute(sql)
        movies = cur.fetchall()
        cur.close()
        db.close()
        return movies
    except Exception as e:
        logging.error(e)


def getMovieById(data):
    db = db_connection()
    cur = db.cursor()
    try:
        id = data["id"]
        cur.execute("SELECT * FROM movies WHERE id = ?", (id,))
        movie = cur.fetchone()
        return movie
    except Exception as e:
        logging.error(e)


def getMovieByTitle(title):
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute(
            "SELECT * FROM movies LEFT JOIN list ON list.movie_id = movies.id WHERE title = ?",
            (title,),
        )
        movie = cur.fetchone()
        return movie
    except Exception as e:
        logging.error(e)


def get_where_to_watch_by_movie(movie_id):
    db = db_connection()
    cur = db.cursor()
    try:
        sql = """
        SELECT where_to_watch.id, where_to_watch.platform, where_to_watch.link, movies_where.id, where_to_watch.icon
        FROM movies_where
        INNER JOIN movies ON movies.id = movies_where.movie_id
        INNER JOIN where_to_watch ON where_to_watch.id = movies_where.where_to_watch_id
        WHERE movies_where.movie_id = ?
        """
        params = (movie_id,)
        cur.execute(sql, params)
        data = cur.fetchall()
        data_list = [
            {
                "where_to_watch_id": i[0],
                "platform": i[1],
                "link": i[2],
                "id": i[3],
                "icon": i[4],
            }
            for i in data
        ]
        return data_list
    except Exception as e:
        logging.error(e)


def getMoviesByGenre(genre_id):
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute(
            "SELECT * FROM movies INNER JOIN genres ON genres.id = movies.genre_id WHERE movies.genre_id = ? LIMIT 10",
            (genre_id,),
        )
        movies = cur.fetchall()
        cur.close()
        db.close()
        return movies
    except Exception as e:
        logging.error(e)


def addMovies(title, rating, description, image):
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute(
            "INSERT INTO movies (title, rating, description, image) VALUES (?,?,?,?)",
            (
                title,
                rating,
                description,
                image,
            ),
        )
        db.commit()
        cur.close()
        db.close()
    except Exception as e:
        logging.error(e)
