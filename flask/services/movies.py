from db import db_connection
import logging


def getAllMovies():
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute("SELECT * FROM movies")
        movies = cur.fetchall()
        return movies
    except Exception as e:
        logging.error(e)
