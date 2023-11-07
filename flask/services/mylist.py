from db import db_connection
import logging


def getMyListById(user_id):
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute(
            "SELECT movies.id, movies.image, movies.title, list.status, list.id FROM list INNER JOIN movies ON list.movie_id = movies.id WHERE list.user_id = ? AND list.status = 1",
            (user_id,),
        )
        mylist = cur.fetchall()
        return mylist
    except Exception as e:
        return logging.error(e)


def updateMyListStatus(status, id):
    db = db_connection()
    cur = db.cursor()
    try:
        params = (
            status,
            id,
        )
        cur.execute("UPDATE list SET status = ? WHERE id = ?", params)
        db.commit()
        cur.close()
        db.close()
    except Exception as e:
        logging.error(e)


def insertToList(movie_id, user_id):
    db = db_connection()
    cur = db.cursor()
    try:
        params = (
            movie_id,
            user_id,
        )
        cur.execute("INSERT INTO list (movie_id, user_id) VALUES (?,?)", params)
        db.commit()
        cur.close()
        db.close()
    except Exception as e:
        logging.error(e)


def deleteList(id):
    db = db_connection()
    cur = db.cursor()
    try:
        params = (id,)
        cur.execute("DELETE FROM list WHERE id = ?", params)
        db.commit()
        cur.close()
        db.close()
    except Exception as e:
        logging.error(e)
