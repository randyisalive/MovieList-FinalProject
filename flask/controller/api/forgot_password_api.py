from flask import Blueprint, jsonify, request
from services.forgot_password_services import change_password
from services.users_services import getAllUser

forgot_password_api = Blueprint("forgot_password_api", __name__)


@forgot_password_api.route("/change-password", methods=["POST", "GET"])
def changePassword():
    if request.method == "POST":
        data = request.get_json()
        password = data.get("password")
        username = data.get("username")
        retype = data.get("retype")
        users = getAllUser()
        for user in users:
            if username != user["username"]:
                return jsonify({"status": "No username avaliable"})
        if password == retype:
            change_password(password, username)
            return jsonify({"message": f"username:{username}, password: {password}"})
        else:
            return jsonify({"status": "password not same in retype"})
    return jsonify({"url: ": "/api/forgot/change-password"})
