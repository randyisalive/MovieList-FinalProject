from flask import Blueprint, request, jsonify
from db import db_connection

userServices = Blueprint('userServices', __name__)


@userServices.route('/user/getAllUser', methods=['GET', 'POST'])
def getAllUser():
    db = db_connection()
    cur = db.cursor()
    cur.execute("SELECT * FROM users")
    users = cur.fetchall()
    return jsonify(users)