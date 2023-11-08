from db import db_connection
import logging


def addGenres(genre):
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute("INSERT INTO genres (genre) VALUES (?)", (genre,))
        db.commit()
        cur.close()
        db.close()
    except Exception as e:
        logging.error(e)


def getGenresByMovieId(movie_id):
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute(
            "SELECT * FROM genres LEFT JOIN genres_movies ON genres_movies.genres_id = genres.id WHERE genres_movies.movies_id = ?",
            (movie_id,),
        )
        genres = cur.fetchall()
        if genres:
            genres_list = [{"id": genre[0], "genre": genre[1]} for genre in genres]
            cur.close()
            db.close()
            return genres_list
    except Exception as e:
        logging.error(e)
