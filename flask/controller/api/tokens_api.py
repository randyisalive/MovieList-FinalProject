from flask import Blueprint, request, jsonify
from services.tokens import addToken
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
