from flask import Blueprint, request, jsonify


profile_api = Blueprint("profile_api", __name__)


@profile_api.route("/profile/get", methods=["POST", "GET"])
def get():
    return jsonify({"URL: ": "/api/profile/get"})
