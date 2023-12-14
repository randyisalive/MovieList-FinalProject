from db import db_connection
import logging
from bcrypt_services import generate_hash
from .users_services import getAllUser


def change_password(password, username):
    db = db_connection()
    cur = db.cursor()
    try:
        hashed_password = generate_hash(password)
        sql = """UPDATE users SET password = ? WHERE username = ?"""
        param = (hashed_password, username)
        cur.execute(sql, param)
        db.commit()
        cur.close()
        db.close()
    except Exception as e:
        logging.error(e)
