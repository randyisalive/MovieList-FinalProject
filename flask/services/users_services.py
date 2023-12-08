from db import db_connection
import logging


def getAllUser():
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute(
            "SELECT id, username, image, joined, biography, birthday, gender, email, banner, password  FROM users"
        )
        users = cur.fetchall()
        user_list = [
            {
                "id": i[0],
                "username": i[1],
                "image": i[2],
                "joined": i[3],
                "biography": i[4],
                "birthday": i[5],
                "gender": i[6],
                "email": i[7],
                "banner": i[8],
                "password": i[9],
            }
            for i in users
        ]
        return user_list
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


def getUserUsername():
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute("SELECT username FROM users")
        usernames = cur.fetchall()
        cur.close()
        db.close()
        return usernames
    except Exception as e:
        logging.error(e)


def addUser(username, password, joined, email):
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute(
            "INSERT INTO users (username, password, joined, email) VALUES (?,?,?,?)",
            (username, password, joined, email),
        )
        db.commit()
        cur.close()
        db.close()
    except Exception as e:
        logging.error(e)
