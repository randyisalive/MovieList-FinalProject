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
