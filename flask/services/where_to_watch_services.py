from db import db_connection
import logging


def get_where_to_watch():
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute("SELECT * FROM where_to_watch")
        datas = cur.fetchall()
        data = [
            {"id": i[0], "where_to_watch": i[1], "link": i[2], "icon": i[3]}
            for i in datas
        ]
        return data
    except Exception as e:
        logging.error(e)
