from flask import Blueprint, request, jsonify
from services.friends_service import get_friends, request_friends, get_friends_by_id


friends_api = Blueprint("friends_api", __name__)


@friends_api.route("/get", methods=["POST", "GET"])
def get():
    if request.method == "POST":
        data = request.get_json()
        id = data["id"]
        friends = get_friends(id)
        friends_list = [
            {"id": i[0], "username": i[1], "image": i[2], "status": i[4]}
            for i in friends
        ]
        return jsonify(friends_list)
    return jsonify({"URL: ": "/api/friends/get"})


@friends_api.route("/getSingle", methods=["POST", "GET"])
def getSingle():
    if request.method == "POST":
        data = request.get_json()
        user_id = data["id"]
        friend_id = data["friend_id"]
        friend = get_friends_by_id(user_id, friend_id)
        friend_list = {"id": friend[0], "status": friend[1]}
        return jsonify(friend_list)
    return jsonify({"URL: ": "/api/friends/getSingle"})


@friends_api.route("/request", methods=["POST", "GET"])
def requestRoute():
    if request.method == "POST":
        data = request.get_json()
        user_id = data["id"]
        friend_id = data["friend_id"]
        request_friends(user_id, friend_id)
        return jsonify({"Message": "request sent!!"})
    return jsonify({"URL: ": "/api/friends/request"})
