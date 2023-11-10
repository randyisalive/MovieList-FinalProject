from db import db_connection
import logging


def getDiscussion():
    # table: movies_discussions, users, movies
    db = db_connection()
    cur = db.cursor()
    try:
        sql = """
            SELECT 
            movies_discussions.id, movies_discussions.title, movies_discussions.body, movies_discussions.date, movies.title, users.username, users.image, users.id
            FROM movies_discussions
            INNER JOIN users ON movies_discussions.user_id = users.id
            INNER JOIN movies ON movies_discussions.movie_id = movies.id
        """
        cur.execute(sql)
        items = cur.fetchall()
        cur.close()
        db.close()
        return items
    except Exception as e:
        logging.error(e)
