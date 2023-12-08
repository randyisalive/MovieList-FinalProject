from db import db_connection
import logging


def get_gender():
    db = db_connection()
    cur = db.cursor()
    try:
        sql = "SELECT * FROM genders"
        cur.execute(sql)
        genders = cur.fetchall()
        gender_list = [{"id": i[0], "gender": i[1]} for i in genders]
        return gender_list
    except Exception as e:
        logging.error(e)
