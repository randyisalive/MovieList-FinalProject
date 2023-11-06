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
