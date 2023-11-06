from db import db_connection
import logging


def getAllUser():
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute("SELECT * FROM users")
        users = cur.fetchall()
        return users
    except Exception as e:
        logging.error(e)
