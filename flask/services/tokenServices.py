from flask import Blueprint, request, redirect, jsonify
from db import db_connection

tokenServices = Blueprint('tokenServices', __name__)

@tokenServices.route('/token/addToken', methods=['POST'])
def index():
    data = request.get_json()
    user_id  = data['user_id']
    token = data['token']
    date = data['date']
    db = db_connection()
    cur = db.cursor()
    cur.execute("INSERT INTO tokens (token, user_id, time) VALUES (?,?, ?)", (token, user_id,date, ))
    db.commit()
    cur.close()
    db.close()
    return jsonify({"Data inserted": token})