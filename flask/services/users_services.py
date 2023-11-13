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


def getUserById(id):
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute("SELECT * FROM users WHERE id = ?", (id,))
        user = cur.fetchone()
        cur.close()
        db.close()
        return user
    except Exception as e:
        logging.error(e)


def addUser(username, password):
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute(
            "INSERT INTO users (username, password) VALUES (?,?)",
            (
                username,
                password,
            ),
        )
        db.commit()
        cur.close()
        db.close()
    except Exception as e:
        logging.error(e)
