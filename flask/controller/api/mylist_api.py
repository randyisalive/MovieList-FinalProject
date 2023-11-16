from flask import Blueprint, jsonify, request
from db import db_connection
from services.mylist import (
    getMyListById,
    updateRatingById,
    insertToList,
    deleteList,
    updateIsWatched,
    getListById,
    getRatingById,
    getStatusById,
    updateStatusById,
)

mylist_api = Blueprint("mylist_api", __name__)


@mylist_api.route("/get", methods=["POST", "GET"])
def get():
    if request.method == "POST":
        data = request.get_json()
        user_id = data["user_id"]
        if user_id:
            my_lists = getMyListById(user_id)
            json_data = [
                {
                    "movie_id": my_list[0],
                    "movie_image": my_list[1],
                    "movie_title": my_list[2],
                    "list_status": my_list[3],
                    "list_id": my_list[4],
                    "isAdded": my_list[5],
                    "rating": my_list[6],
                }
                for my_list in my_lists
            ]
            return jsonify(json_data)
    return jsonify({"URL: ": "/api/mylist/get"})


@mylist_api.route("/get_rating", methods=["POST", "GET"])
def getRating():
    if request.method == "POST":
        data = request.get_json()
        id = data["id"]
        rating = getRatingById(id)
        return jsonify(rating)
    return jsonify({"URL: ": "/api/mylist/get_rating"})


@mylist_api.route("/update_rating", methods=["POST", "GET"])
def updateRating():
    if request.method == "POST":
        data = request.get_json()
        rating = data["rating"]
        id = data["id"]
        updateRatingById(id, rating)
        return jsonify({"Message": "Updated Rating in list!"})
    return jsonify({"URL: ": "/api/mylist/update_rating"})


@mylist_api.route("/add", methods=["POST", "GET"])
def add():
    if request.method == "POST":
        data = request.get_json()
        movie_id = data["movie_id"]
        user_id = data["user_id"]
        if data:
            insertToList(movie_id, user_id)

    return jsonify({"URL: ": "/api/mylist/add"})


@mylist_api.route("/delete", methods=["POST", "GET"])
def delete():
    if request.method == "POST":
        data = request.get_json()
        id = data["id"]
        if data:
            deleteList(id)
    return jsonify({"URL: ": "/api/mylist/delete"})


@mylist_api.route("/getStatus", methods=["POST", "GET"])
def get_status():
    if request.method == "POST":
        data = request.get_json()
        id = data["id"]
        status = getStatusById(id)
        return jsonify(status)
    return jsonify({"URL: ": "/api/mylist/getStatus"})


@mylist_api.route("/updateStatus", methods=["POST", "GET"])
def update_status():
    if request.method == "POST":
        data = request.get_json()
        id = data["id"]
        status = data["status"]
        update_status(id, status)
        return jsonify({"Message: ": "updated status in list"})
    return jsonify({"URL: ": "/api/mylist/updateStatus"})


@mylist_api.route("/get/byId", methods=["GET", "POST"])
def getById():
    if request.method == "POST":
        data = request.get_json()
        id = data["id"]
        lists = getListById(id)
        lists_list = [
            {
                "movie_id": i[0],
                "movie_image": i[1],
                "movie_title": i[2],
                "list_status": i[3],
                "list_id": i[4],
                "list_isWatched": i[5],
            }
            for i in lists
        ]
        return jsonify(lists_list)
    return jsonify({"URL: ": "/api/mylist/get/byId"})
