from db import db_connection
import logging


def getMyListById(user_id):
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute("SELECT * FROM list WHERE user_id = ?", (user_id,))
        mylist = cur.fetchall()
        return mylist
    except Exception as e:
        return logging.error(e)
