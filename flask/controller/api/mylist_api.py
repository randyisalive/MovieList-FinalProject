from flask import Blueprint, jsonify, request
from db import db_connection
from services.mylist import getMyListById

mylist_api = Blueprint("mylist_api", __name__)


@mylist_api.route("/get", methods=["POST", "GET"])
def get():
    if request.method == "POST":
        data = request.get_json()
        user_id = data["user_id"]
        if user_id:
            my_list = getMyListById(user_id)
            return jsonify(my_list)
    return jsonify({"URL: ": "/api/mylist/get"})
