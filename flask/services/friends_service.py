from db import db_connection
import logging


def get_friends(id):
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute(
            "SELECT users.id, users.username, users.image, friends.user_2_id, friends.status FROM users INNER JOIN friends ON friends.user_2_id = users.id WHERE friends.user_1_id = ? AND friends.status = 'Yes'",
            (id,),
        )
        friends = cur.fetchall()
        cur.close()
        db.close()
        return friends
    except Exception as e:
        logging.error(e)


def get_friends_by_id(user_id, friend_id):
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute(
            "SELECT id, status FROM friends WHERE user_1_id = ?  AND user_2_id = ?",
            (
                user_id,
                friend_id,
            ),
        )
        data = cur.fetchone()
        cur.close()
        db.close()
        return data
    except Exception as e:
        logging.error(e)


def request_friends(user_id, friend_id):
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute(
            "INSERT INTO friends (user_1_id, user_2_id) VALUES (?,?)",
            (
                user_id,
                friend_id,
            ),
        )
        db.commit()
        cur.close()
        db.close()
    except Exception as e:
        logging.error(e)
