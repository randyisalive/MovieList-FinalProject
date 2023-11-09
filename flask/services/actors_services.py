from db import db_connection
import logging


def getAllActors():
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute("SELECT * FROM actors")
        actors = cur.fetchall()
        cur.close()
        db.close()
        return actors
    except Exception as e:
        logging.error(e)


def addActors(FirstName, LastName, description, birthday, birthplace, image):
    db = db_connection()
    cur = db.cursor()
    try:
        params = (FirstName, LastName, description, birthday, birthplace, image)
        cur.execute(
            "INSERT INTO actors (FirstName, LastName, description, birthday, birthplace, image) VALUES (?,?,?,?,?,?)",
            params,
        )
        db.commit()
        cur.close()
        db.close()
    except Exception as e:
        logging.error(e)
