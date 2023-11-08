from flask import Blueprint, request, jsonify
from services.genres_services import addGenres, getGenresByMovieId


genres_api = Blueprint("genres_api", __name__)


@genres_api.route("/add", methods=["POST"])
def add():
    if request.method == "POST":
        data = request.get_json()
        genre = data["genre"]
        addGenres(genre)
    return jsonify({"url: ": "/api/genres/add"})


@genres_api.route("/get", methods=["POST", "GET"])
def get():
    if request.method == "POST":
        data = request.get_json()
        movie_id = data["movie_id"]
        genres = getGenresByMovieId(movie_id)
        return jsonify(genres)
    return jsonify({"URL: ": "/api/genres/get"})
