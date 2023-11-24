from db import db_connection
import logging
import random


def get_newest_movies_in_list(user_id):
    db = db_connection()
    cur = db.cursor()
    try:
        sql = "SELECT movies.id, movies.title, movies.image, movies.rating, list.date, list.status FROM movies LEFT JOIN list ON movies.id = list.movie_id WHERE user_id = ? ORDER BY list.date DESC LIMIT 4"
        params = (user_id,)
        cur.execute(sql, params)
        movies = cur.fetchall()
        cur.close()
        db.close()
        return movies
    except Exception as e:
        logging.error(e)


def random_number(datas):
    num_arrays_to_select = 15
    selected_arrays = random.sample(datas, num_arrays_to_select)
    return selected_arrays


def get_random_movies():
    db = db_connection()
    cur = db.cursor()
    try:
        sql = "SELECT * FROM movies ORDER BY RAND() LIMIT 5"
        cur.execute(sql)
        movies = cur.fetchall()
        cur.close()
        db.close()
        return movies
    except Exception as e:
        logging.error(e)
