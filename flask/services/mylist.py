from db import db_connection
import logging
from date_now import getDate


def getMyListById(user_id):
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute(
            "SELECT movies.id, movies.image, movies.title, list.status, list.id, list.isAdded, list.rating FROM list INNER JOIN movies ON list.movie_id = movies.id WHERE list.user_id = ? ORDER BY date DESC",
            (user_id,),
        )
        mylist = cur.fetchall()
        return mylist
    except Exception as e:
        return logging.error(e)


def getTotalMyList(user_id):
    db = db_connection()
    cur = db.cursor()
    try:
        params = (user_id,)
        cur.execute("SELECT COUNT(*) FROM list WHERE user_id = ?", params)
        total = cur.fetchone()
        return total
    except Exception as e:
        logging.error(e)


def getRatingById(id):
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute("SELECT rating FROM list WHERE id = ?", (id,))
        rating = cur.fetchone()
        return rating
    except Exception as e:
        logging.error(e)


def updateRatingById(id, rating):
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute(
            "UPDATE list SET rating = ? WHERE id = ? ",
            (
                rating,
                id,
            ),
        )
        db.commit()
        cur.close()
        db.close()
    except Exception as e:
        logging.error(e)


def getStatusById(id):
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute("SELECT status FROM list WHERE id = ?", (id,))
        status = cur.fetchone()
        cur.close()
        db.close()
        return status
    except Exception as e:
        logging.error(e)


def updateStatusById(id, status):
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute(
            "UPDATE list SET status = ? WHERE id = ?",
            (
                status,
                id,
            ),
        )
        db.commit()
        cur.close()
        db.close()
        return status
    except Exception as e:
        logging.error(e)


def getListById(user_id):
    db = db_connection()
    cur = db.cursor()
    try:
        sql = """
        SELECT movies.id, movies.image, movies.title, list.status, list.id 
        FROM list 
        INNER JOIN movies 
        ON list.movie_id = movies.id 
        WHERE list.user_id = ?"""
        params = (user_id,)
        cur.execute(sql, params)
        lists = cur.fetchall()
        data_list = [
            {
                "movie_id": i[0],
                "movie_image": i[1],
                "movie_title": i[2],
                "list_status": i[3],
                "list_id": i[4],
            }
            for i in lists
        ]
        return data_list
    except Exception as e:
        logging.error(e)


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


def updateIsWatched(id, status):
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute(
            "UPDATE list SET isWatched = ? WHERE id = ?",
            (
                status,
                id,
            ),
        )
        db.commit()
        cur.close()
        db.close()
    except Exception as e:
        logging.error(e)


def insertToList(movie_id, user_id):
    date = getDate()
    db = db_connection()
    cur = db.cursor()
    try:
        params = (
            movie_id,
            user_id,
            date,
        )
        cur.execute("INSERT INTO list (movie_id, user_id, date) VALUES (?,?,?)", params)
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
