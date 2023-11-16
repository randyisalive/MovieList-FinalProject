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
        cur.execute("SELECT * FROM movies WHERE title = ?", (title,))
        movie = cur.fetchone()
        return movie
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
