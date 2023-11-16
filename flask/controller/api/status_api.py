from flask import Blueprint, jsonify, request
from services.status_service import getAllStatus

status_api = Blueprint("status_api", __name__)


@status_api.route("/get", methods=["POST", "GET"])
def get():
    status = getAllStatus()
    return jsonify(status)
