from db import db_connection
import logging
from date_now import getDate


def getReviewsById(id):
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute("SELECT * FROM movies_discussions WHERE id = ?", (id,))
        reviews = cur.fetchone()
        return reviews
    except Exception as e:
        logging.error(e)


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
            ORDER BY movies_discussions.date DESC
        """
        cur.execute(sql)
        items = cur.fetchall()
        cur.close()
        db.close()
        return items
    except Exception as e:
        logging.error(e)


def get_total_comment(discussion_id):
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute(
            "SELECT COUNT(id) FROM comments WHERE review_id = ?", (discussion_id,)
        )
        result = cur.fetchone()
        return result
    except Exception as e:
        logging.error(e)


def getRecentDiscussion():
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute(
            """SELECT movies_discussions.id, movies_discussions.title, users.username, movies.id, users.id, movies_discussions.rating 
            FROM movies_discussions 
            INNER JOIN users ON movies_discussions.user_id = users.id 
            INNER JOIN movies ON movies_discussions.movie_id = movies.id
            ORDER BY movies_discussions.date DESC LIMIT 4"""
        )
        total = []

        discussions = cur.fetchall()
        discussions_list = [
            {
                "id": i[0],
                "title": i[1],
                "username": i[2],
                "movie_id": i[3],
                "user_id": i[4],
                "rating": i[5],
            }
            for i in discussions
        ]
        for i in discussions:
            total.append(get_total_comment(i[0])[0])
        result = [total, discussions_list]
        print(result)
        cur.close()
        db.close()
        return result
    except Exception as e:
        logging.error(e)


def getDiscussionByMovieId(id):
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
            WHERE movies_discussions.movie_id = ? ORDER BY movies_discussions.date ASC
        """
        cur.execute(sql, (id,))
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


def get_comment(data):
    db = db_connection()
    cur = db.cursor()
    try:
        review_id = data["review_id"]
        sql = "SELECT * FROM comments FULL RIGHT JOIN users ON comments.user_id = users.id WHERE review_id = ?"
        params = (review_id,)
        cur.execute(sql, params)
        comments = cur.fetchall()
        return comments
    except Exception as e:
        logging.error(e)


def add_comment(body, review_id, user_id):
    db = db_connection()
    cur = db.cursor()
    try:
        params = (
            body,
            review_id,
            user_id,
        )
        sql = "INSERT INTO comments (body, review_id, user_id) VALUES (?,?,?)"
        cur.execute(sql, params)
        db.commit()
        cur.close()
        db.close()
    except Exception as e:
        logging.error(e)


def deleteComment(id):
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute("DELETE FROM comments WHERE id = ?", (id,))
        db.commit()
        cur.close()
        db.close()
    except Exception as e:
        logging.error(e)


def updateIsReplyOpen(id, data):
    db = db_connection()
    cur = db.cursor()
    try:
        params = (
            data,
            id,
        )
        sql = "UPDATE comments SET isReplyOpen = ? WHERE id = ?"
        cur.execute(sql, params)
        db.commit()
        cur.close()
        db.close()
    except Exception as e:
        logging.error(e)
