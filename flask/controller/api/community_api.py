from flask import Blueprint, request, jsonify
from services.community_services import (
    getDiscussion,
    form_reviews,
    delete_reviews,
    getDiscussionByMovieId,
    getReviewsById,
    add_comment,
    get_comment,
    updateIsReplyOpen,
    deleteComment,
)


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


@community_api.route("/discussion/getReviewById", methods=["POST", "GET"])
def getReviewById():
    if request.method == "POST":
        data = request.get_json()
        id = data["id"]
        item = getReviewsById(id)
        items_list = {
            "id": item[0],
            "title": item[1],
            "body": item[2],
            "date": item[3],
            "rating": item[4],
            "movie_id": item[5],
            "user_id": item[6],
        }

        return jsonify(items_list)
    return jsonify({"URL: ": "/api/community/discussion/getReviewById"})


@community_api.route("/discussion/getByMovieId", methods=["POST", "GET"])
def getByMovieId():
    if request.method == "POST":
        data = request.get_json()
        id = data["id"]
        items = getDiscussionByMovieId(id)
        items_list = [
            {
                "id": item[0],
                "title": item[1],
                "body": item[2],
                "date": item[3],
                "movie_title": item[4],
                "username": item[5],
                "user_image": item[6],
                "user_id": item[7],
                "movie_id": item[8],
            }
            for item in items
        ]
        return jsonify(items_list)
    return jsonify({"URL: ": "/api/community/discussion/getById"})


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


@community_api.route("/discussion/get-comment", methods=["POST", "GET"])
def getComment():
    if request.method == "POST":
        data = request.get_json()
        comments = get_comment(data)
        comments_list = [
            {
                "id": i[0],
                "body": i[1],
                "review_id": i[2],
                "user_id": i[3],
                "username": i[6],
                "user_image": i[8],
                "isReplyOpen": i[4],
            }
            for i in comments
        ]
        return jsonify(comments_list)
    return jsonify({"URL: ": "/api/community/discussion/add-comment"})


@community_api.route("/discussion/add-comment", methods=["POST", "GET"])
def addComment():
    if request.method == "POST":
        data = request.get_json()
        body = data["body"]
        review_id = data["review_id"]
        user_id = data["user_id"]
        add_comment(body, review_id, user_id)
        return jsonify({"Message": "comment addedd!!!"})
    return jsonify({"URL: ": "/api/community/discussion/add-comment"})


@community_api.route("/discussion/comment/delete", methods=["POST"])
def commentDelete():
    if request.method == "POST":
        data = request.get_json()
        id = data["id"]
        deleteComment(id)
        return jsonify({"Message": "Comment Deleted"})
    return jsonify({"URL: ": "/api/community/discussion/comment/delete"})


@community_api.route("/discussion/isReplyOpen", methods=["GET", "POST"])
def updateReply():
    if request.method == "POST":
        data = request.get_json()
        id = data["id"]
        isReplyOpen = data["isReplyOpen"]
        updateIsReplyOpen(id, isReplyOpen)
        return jsonify({"Message": "reply updated"})
    return jsonify({"URL: ": "/api/community/discussion/isReplyOpen"})
