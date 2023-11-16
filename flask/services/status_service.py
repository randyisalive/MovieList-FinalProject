from db import db_connection
import logging


def getAllStatus():
    db = db_connection()
    cur = db.cursor()
    try:
        cur.execute("SELECT * FROM status")
        status = cur.fetchall()
        status_list = [{"id": i[0], "status": i[1]} for i in status]
        cur.close()
        db.close()
        return status_list
    except Exception as e:
        logging.error(e)
