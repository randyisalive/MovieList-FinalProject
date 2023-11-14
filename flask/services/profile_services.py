from db import db_connection
import logging


def updateProfile(username, image, biography, birthday, gender, user_id):
    db = db_connection()
    cur = db.cursor()
    try:
        params = (
            username,
            image,
            biography,
            birthday,
            gender,
            user_id,
        )
        cur.execute(
            "UPDATE users SET username = ?, image = ?, biography = ?, birthday = ?, gender = ? WHERE id = ?",
            params,
        )
        db.commit()
        cur.close()
        db.close()
    except Exception as e:
        logging.error(e)


def updateProfileNoImage(username, biography, birthday, gender, user_id):
    db = db_connection()
    cur = db.cursor()
    try:
        params = (
            username,
            biography,
            birthday,
            gender,
            user_id,
        )
        cur.execute(
            "UPDATE users SET username = ?, biography = ?, birthday = ?, gender = ? WHERE id = ?",
            params,
        )
        db.commit()
        cur.close()
        db.close()
    except Exception as e:
        logging.error(e)
