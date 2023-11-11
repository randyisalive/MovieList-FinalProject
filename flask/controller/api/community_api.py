from flask import Blueprint, request, jsonify
from services.community_services import getDiscussion, form_reviews, delete_reviews


community_api = Blueprint("community_api", __name__)


@community_api.route("/discussion/get")
def discussion_get():
    items = getDiscussion()
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
            "movie_id": item[8],
        }
        for item in items
    ]
    return jsonify(items_list)


@community_api.route("/discussion/delete", methods=["POST", "GET"])
def delete():
    if request.method == "POST":
        data = request.get_json()
        if data:
            delete_reviews(data)
            return jsonify({"Messages": "Deleted!!}"})
    return jsonify({"URL: ": "/api/community/delete"})


@community_api.route("/discussion/form/reviews", methods=["POST"])
def form():
    if request.method == "POST":
        data = request.get_json()
        if data:
            form_reviews(data)
            return jsonify({"Message": "Form inserted!!"})
        else:
            print("NO DATA")
    return jsonify({"URL: ": "/api/community/form/reviews"})
