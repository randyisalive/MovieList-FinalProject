from flask import Blueprint, request, jsonify, render_template
from services.users_services import getAllUser


users_controller = Blueprint("users_controller", __name__)


template_route = "/users/"


@users_controller.route("/users")
def index():
    users = getAllUser()
    return render_template(template_route + "index.html", users=users)
