from flask import Blueprint, request, jsonify
from services.friends_service import (
    get_request,
    get_all_friends_by_user_id,
)


friends_api = Blueprint("friends_api", __name__)


@friends_api.route("/get-all", methods=["POST", "GET"])
def get_all():
    if request.method == "POST":
        data = request.get_json()
        id = data.get("id")
        datas = get_all_friends_by_user_id(id)
        if datas:
            return jsonify(datas)
        else:
            return jsonify([{"msg": "No Data"}])
    return jsonify({"URL: ": "/api/friends/get-all"})


@friends_api.route("/get-request", methods=["POST", "GET"])
def requestRoute():
    if request.method == "POST":
        data = request.get_json()
        user_id = data.get("id")
        data = get_request(user_id)
        return jsonify(data)
    return jsonify({"URL: ": "/api/friends/request"})
