from db import db_connection
import logging


def getReviews(movie_id):
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute(
            "SELECT movies_reviews.id movies_reviews.title, movies_reviews.body, users.username FROM movies_reviews INNER JOIN users ON movies_reviews.user_id = users.id WHERE movies_reviews.movie_id = ?",
            (movie_id,),
        )
        reviews = cur.fetchall()
        cur.close()
        db.close()
        return reviews
    except Exception as e:
        logging.error(e)
