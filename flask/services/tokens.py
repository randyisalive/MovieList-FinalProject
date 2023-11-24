from db import db_connection
import logging
from date_now import getDate


def addToken(user_id, token):
    date = getDate()
    db = db_connection()
    cur = db.cursor()
    cur.execute(
        "INSERT INTO tokens (token, user_id, time) VALUES (?,?, ?)",
        (
            token,
            user_id,
            date,
        ),
    )
    db.commit()
    cur.close()
    db.close()


def get_all_token_by_id(user_id):
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute("SELECT id, token FROM tokens WHERE user_id = ?", (user_id,))
        tokens = cur.fetchall()
        cur.close()
        db.close()
        return tokens
    except Exception as e:
        logging.error(e)


def get_all_token():
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute("SELECT id, token FROM tokens")
        tokens = cur.fetchall()
        cur.close()
        db.close()
        return tokens
    except Exception as e:
        logging.error(e)
