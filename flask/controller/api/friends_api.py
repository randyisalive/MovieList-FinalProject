from flask import Blueprint, request, jsonify
from services.friends_service import (
    get_request,
    get_all_friends_by_user_id,
    request_friends,
    check_friends,
    accept_request,
)


friends_api = Blueprint("friends_api", __name__)


# get friends who already 'accepted' status
@friends_api.route("/get-all", methods=["POST", "GET"])
def get_all():
    if request.method == "POST":
        data = request.get_json()
        id = data.get("id")
        datas = get_all_friends_by_user_id(id)
        if datas:
            return jsonify(datas)
    return None


## get friends request
@friends_api.route("/get-request", methods=["POST", "GET"])
def requestRoute():
    if request.method == "POST":
        data = request.get_json()
        user_id = data.get("id")
        data = get_request(user_id)
        return jsonify(data)
    return jsonify({"URL: ": "/api/friends/request"})


# send invites
@friends_api.route("/request-friend", methods=["POST", "GET"])
def requestFriend():
    if request.method == "POST":
        data = request.get_json()
        id = data.get("id")
        friend_id = data.get("friend_id")
        request_friends(id, friend_id)
        return jsonify({"message": "invite send"})
    return jsonify({"URL: ": "/api/friends/request-friend"})


## spit data from table friends
@friends_api.route("/check-friends", methods=["POST", "GET"])
def checkFriends():
    if request.method == "POST":
        data = request.get_json()
        id = data.get("id")
        friend_id = data.get("friend_id")
        invites = check_friends(id, friend_id)
        return jsonify(invites)
    return jsonify({"URL: ": "/api/friends/check-friends"})


@friends_api.route("/accept-request", methods=["POST", "GET"])
def acceptRequest():
    if request.method == "POST":
        data = request.get_json()
        id = data.get("id")
        friend_id = data.get("friend_id")
        accept_request(id, friend_id)
        return jsonify({"message": "accepted"})
    return jsonify({"URL: ": "/api/friends/accept-request"})
