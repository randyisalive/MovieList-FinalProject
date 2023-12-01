from db import db_connection
import logging


# get all friends who status 'accepted'
def get_all_friends_by_user_id(id):
    db = db_connection()
    cur = db.cursor()
    try:
        sql = """
        SELECT friends.id,
        CASE 
           WHEN friends.user_1_id = ? THEN users2.username
           WHEN friends.user_2_id = ? THEN users1.username
        END as username,
        CASE 
           WHEN friends.user_1_id = ? THEN users2.image
           WHEN friends.user_2_id = ? THEN users1.image
        END as image,
        CASE
            WHEN friends.user_1_id = ? THEN users2.id
            WHEN friends.user_2_id = ? THEN users1.id
        END as user_id,
        CASE
            WHEN friends.user_1_id = ? THEN users2.biography
            WHEN friends.user_2_id = ? THEN users1.biography
        END as user_id
        FROM friends
        INNER JOIN users AS users1 ON friends.user_1_id = users1.id
        INNER JOIN users AS users2 ON friends.user_2_id = users2.id
        WHERE (friends.user_1_id = ? AND friends.status = 'accepted')
        OR (friends.user_2_id = ? AND friends.status = 'accepted');
        """
        params = (id, id, id, id, id, id, id, id, id, id)
        cur.execute(sql, params)
        datas = cur.fetchall()
        print(datas)
        data_list = [
            {
                "id": i[0],
                "username": i[1],
                "image": i[2],
                "user_id": i[3],
                "biography": i[4],
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
        WHERE friends.user_2_id = ?
        AND friends.status = 'pending';
        """
        params = (id,)
        cur.execute(sql, params)
        datas = cur.fetchall()
        data_list = [
            {"id": i[0], "status": i[1], "username": i[2], "user_id": i[3]}
            for i in datas
        ]
        return data_list
    except Exception as e:
        logging.error(e)


# send an invite, user_1 login and user_2 not login
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
            WHERE (user_2_id = ? AND user_1_id = ?) 
            OR (user_1_id = ? AND user_2_id = ?)
        """
        params = (
            friend_id,
            id,
            friend_id,
            id,
        )
        cur.execute(sql, params)
        db.commit()
        cur.close()
        db.close()
    except Exception as e:
        logging.error(e)


# check if already add friends
def check_friends(id, friend_id):
    db = db_connection()
    cur = db.cursor()
    try:
        sql = """
            SELECT * FROM friends 
            WHERE (user_1_id = ? AND user_2_id = ?) 
            OR (user_2_id = ? AND user_1_id = ?);        
            """
        params = (id, friend_id, id, friend_id)
        cur.execute(sql, params)
        i = cur.fetchone()
        friends_list = {
            "id": i[0],
            "user_1_id": i[1],
            "user_2_id": i[2],
            "status": i[3],
        }

        return friends_list
    except Exception as e:
        logging.error(e)
