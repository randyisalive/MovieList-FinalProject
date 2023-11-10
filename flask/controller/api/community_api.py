from flask import Blueprint, request, jsonify
from services.community_services import getDiscussion


community_api = Blueprint("community_api", __name__)


@community_api.route("/discussion/get")
def discussion_get():
    items = getDiscussion()
    if items:
        items_list = [
            {
                "id": item[0],
                "title": item[1],
                "body": item[2],
                "date": item[3],
                "movie_title": item[4],
                "user_username": item[5],
                "user_image": item[6],
                "user_id": item[7],
            }
            for item in items
        ]
        return jsonify(items_list)
    return jsonify({"URL: ": "api/community/discussion/get"})
