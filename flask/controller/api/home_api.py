from flask import Blueprint, request, jsonify
from services.home_services import get_newest_movies_in_list
from services.movies import get_ten_movies_random

home_api = Blueprint("home_api", __name__)


@home_api.route("/newest-movies-in-list", methods=["POST", "GET"])
def newest_movies_in_list():
    if request.method == "POST":
        data = request.get_json()
        user_id = data.get("id")
        movies = get_newest_movies_in_list(user_id)
        movies_list = [
            {
                "id": i[0],
                "title": i[1],
                "image": i[2],
                "rating": i[3],
                "date": i[4],
                "status": i[5],
            }
            for i in movies
        ]
        return jsonify(movies_list)
    return jsonify({"URL: ": "/api/home/newest-movies-in-list"})


@home_api.route("/random-movies", methods=["POST", "GET"])
def random_movies():
    movies = get_ten_movies_random()
    movies_list = [
        {
            "id": i[0],
            "title": i[1],
            "rating": i[2],
            "image": i[3],
        }
        for i in movies
    ]
    return jsonify(movies_list)
