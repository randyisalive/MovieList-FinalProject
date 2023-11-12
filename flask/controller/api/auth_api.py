from flask import Blueprint, request, jsonify
from services.users_services import getAllUser, getUserById
from bcrypt_services import verify_password, generate_hash
from .tokens_api import addToken
import secrets
import logging


auth_api = Blueprint("auth_api", __name__)

# url_prefix = "/api/auth"


@auth_api.route("/login", methods=["POST", "GET"])
def login():
    if request.method == "POST":
        data = request.get_json()
        usernameValue = data["username"]
        passwordValue = data["password"]
        users = getAllUser()
        try:
            for user in users:
                if usernameValue == user[1] and verify_password(passwordValue, user[2]):
                    token = secrets.token_hex(16)
                    addToken(user[0], token)
                    return jsonify(
                        {"status": "success", "token": token, "user_id": user[0]}
                    )
        except Exception as e:
            logging.error(e)
    return jsonify({"url:": "/api/auth/login"})


@auth_api.route("/generate", methods=["POST", "GET"])
def generate():
    if request.method == "POST":
        data = request.get_json()
        password = data["password"]
        hashed_password = generate_hash(password)
        return jsonify({"Password": hashed_password.decode("utf-8")})
    return jsonify({"utl: ": "/api/auth/generate"})


@auth_api.route("/get", methods=["POST", "GET"])
def get():
    if request.method == "POST":
        data = request.get_json()
        id = data["id"]
        user = getUserById(id)
        if user:
            user_list = {
                "id": user[0],
                "username": user[1],
                "password": user[2],
                "image": user[3],
            }
            return jsonify(user_list)
        else:
            return jsonify({"Messages": "no user found"})
    return jsonify({"URL: ": "/api/auth/get"})
