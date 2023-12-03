from flask import Blueprint, request, jsonify
from services.where_to_watch_services import get_where_to_watch

where_to_watch = Blueprint("where_to_watch", __name__)


@where_to_watch.route("/get")
def get():
    data = get_where_to_watch()
    return jsonify(data)
