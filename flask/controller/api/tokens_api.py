from flask import Blueprint, request, jsonify
from services.tokens import addToken, get_all_token, get_all_token_by_id
import secrets


tokens_api = Blueprint("tokens_api", __name__)

# url_prefix = /api/tokens


@tokens_api.route("/add", methods=["POST", "GET"])
def add():
    if request.method == "POST":
        data = request.get_json()
        user_id = data["user_id"]
        token = secrets.token_hex(16)
        addToken(user_id, token)
    return jsonify({"Data inserted": token})


@tokens_api.route("/get", methods=["POST", "GET"])
def get():
    if request.method == "POST":
        tokens = get_all_token()
        tokens_list = [{"id": i[0], "token": i[1]} for i in tokens]
        return jsonify(tokens_list)
    return jsonify({"URL: ": "/api/tokens/get"})


@tokens_api.route("/getById", methods=["POST", "GET"])
def getById():
    if request.method == "POST":
        data = request.get_json()
        user_id = data["id"]
        tokens = get_all_token_by_id(user_id)
        tokens_list = [{"id": i[0], "token": i[1]} for i in tokens]
        return jsonify(tokens_list)
    return jsonify({"URL: ": "/api/tokens/get"})
