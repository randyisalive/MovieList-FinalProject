from flask import Blueprint, jsonify, request
from services.gender_services import get_gender


gender_api = Blueprint("gender_api", __name__)


# router: /api/gender
@gender_api.route("/get")
def get():
    gender = get_gender()
    return jsonify(gender)
