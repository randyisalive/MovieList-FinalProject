from flask import Blueprint, request, jsonify
from services.users_services import getAllUser, getUserById, addUser, getUserUsername
from bcrypt_services import verify_password, generate_hash
from .tokens_api import addToken
from date_now import getDate
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
                if usernameValue == user["username"] and verify_password(
                    passwordValue, user["password"]
                ):
                    token = secrets.token_hex(16)
                    addToken(user["id"], token)
                    return jsonify(
                        {"status": "success", "token": token, "user_id": user["id"]}
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


@auth_api.route("/create", methods=["POST", "GET"])
def create():
    if request.method == "POST":
        data = request.get_json()
        username = data.get("username")
        password = data.get("password")
        retype = data.get("retype")
        email = data.get("email")
        usernames = getUserUsername()
        print(data)
        # set min username length
        min_username_length = 5
        if len(username) <= min_username_length:
            return jsonify({"error": "Username too short (min 5 characters)"})
        # check is username avaliable
        for item in usernames:
            if username == item[0]:
                return jsonify({"error": "Username already exists"})

        # check if retpye == password
        if password != retype:
            return jsonify({"error": "Password not match"})
        hashed_password = generate_hash(password)
        addUser(username, hashed_password, getDate(), email)
        return jsonify({"Message": "USER CREATED"})
    return jsonify({"URL: ": "/api/auth/create"})


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
                "joined": user[4],
                "biography": user[5],
                "birthday": user[6],
                "gender": user[7],
                "banner": user[8],
            }
            return jsonify(user_list)
        else:
            return jsonify({"Messages": "no user found"})
    return jsonify({"URL: ": "/api/auth/get"})
