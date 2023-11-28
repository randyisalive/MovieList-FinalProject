from db import db_connection
import logging


# get all friends who status 'accepted'
def get_all_friends_by_user_id(id):
    db = db_connection()
    cur = db.cursor()
    try:
        sql = """
        SELECT friends.id, users.username, users.image
        FROM friends
        INNER JOIN users ON friends.user_2_id = users.id
        WHERE friends.user_1_id = ? AND friends.status = 'accepted'
        """
        params = (id,)
        cur.execute(sql, params)
        datas = cur.fetchall()
        data_list = [
            {
                "id": i[0],
                "username": i[1],
                "image": i[2],
            }
            for i in datas
        ]
        return data_list
    except Exception as e:
        logging.error(e)


# get friends request, the one who got invited
def get_request(id):
    db = db_connection()
    cur = db.cursor()
    try:
        sql = """
        SELECT friends.id, friends.status, users.username, users.id
        FROM friends
        INNER JOIN users ON friends.user_1_id = users.id 
        WHERE friends.user_1_id = ? OR friends.user_2_id = ?
        AND friends.status = 'pending';
        """
        params = (
            id,
            id,
        )
        cur.execute(sql, params)
        datas = cur.fetchall()
        data_list = [
            {"id": i[0], "status": i[1], "username": i[2], "user_id": i[3]}
            for i in datas
        ]
        return data_list
    except Exception as e:
        logging.error(e)


# send an invite
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


# accept friend request, 1 = send_invite, 2 = accept_invite
def accept_request(id, friend_id):
    db = db_connection()
    cur = db.cursor()
    try:
        sql = """
            UPDATE friends 
            SET status = 'accepted' 
            WHERE user_2_id = ? AND user_1_id = ?
        """
        params = (
            friend_id,
            id,
        )
        cur.execute(sql, params)
        db.commit()
        cur.close()
        db.close()
    except Exception as e:
        logging.error(e)
