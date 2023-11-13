from flask import Blueprint, jsonify, request
from db import db_connection
from services.mylist import (
    getMyListById,
    updateMyListStatus,
    insertToList,
    deleteList,
    updateIsWatched,
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
                    "isWatched": my_list[5],
                }
                for my_list in my_lists
            ]
            return jsonify(json_data)
    return jsonify({"URL: ": "/api/mylist/get"})


@mylist_api.route("/updateStatus", methods=["POST", "GET"])
def updateStatus():
    if request.method == "POST":
        data = request.get_json()
        status = data["status"]
        id = data["id"]
        if data:
            updateMyListStatus(status, id)
            return jsonify({"Messages": data})
    return jsonify({"url: ": "/api/mylist/updateStatus"})


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


@mylist_api.route("/update/watch", methods=["POST", "GET"])
def updateWatched():
    if request.method == "POST":
        data = request.get_json()
        id = data["id"]
        status = data["status"]
        updateIsWatched(id, status)
        return jsonify({"Message": "updated isWatched!!"})
    return jsonify({"URL: ": "/api/mylist/update/watch"})
