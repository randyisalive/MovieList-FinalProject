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


def get_count(status, id):
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute(
            "SELECT COUNT(id) FROM list WHERE status = ? AND user_id = ?",
            (
                status,
                id,
            ),
        )
        count = cur.fetchone()
        return count
    except Exception as e:
        logging.error(e)


def get_total_rating(type, id):
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute(
            "SELECT COUNT(id) FROM list WHERE rating = ? AND user_id = ?",
            (
                type,
                id,
            ),
        )
        rating = cur.fetchone()
        cur.close()
        db.close()
        return rating
    except Exception as e:
        logging.error(e)
