from db import db_connection
import logging
from date_now import getDate


def getDiscussion():
    # table: movies_discussions, users, movies
    db = db_connection()
    cur = db.cursor()
    try:
        sql = """
            SELECT 
            movies_discussions.id, movies_discussions.title, movies_discussions.body, movies_discussions.date, movies.title, users.username, users.image, users.id, movies.id
            FROM movies_discussions
            INNER JOIN users ON movies_discussions.user_id = users.id
            INNER JOIN movies ON movies_discussions.movie_id = movies.id
            ORDER BY date ASC
        """
        cur.execute(sql)
        items = cur.fetchall()
        cur.close()
        db.close()
        return items
    except Exception as e:
        logging.error(e)


def delete_reviews(data):
    reviews_id = data["reviews_id"]
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute("DELETE FROM movies_discussions WHERE id = ?", (reviews_id,))
        db.commit()
        cur.close()
        db.close()
    except Exception as e:
        logging.error(e)


def form_reviews(data):
    title = data["title"]
    body = data["body"]
    rating = data["rating"]
    date = getDate()
    movie_id = data["movie_id"]
    user_id = data["user_id"]
    if data:
        db = db_connection()
        cur = db.cursor()
        params = (
            title,
            body,
            date,
            rating,
            movie_id,
            user_id,
        )
        cur.execute(
            "INSERT INTO movies_discussions (title, body, date, rating, movie_id, user_id) VALUES (?,?,?,?,?,?)",
            params,
        )
        db.commit()
        cur.close()
        db.close()
    else:
        print("NO DATA")
