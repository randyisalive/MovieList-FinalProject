from flask import Blueprint, request, jsonify
from services.genres_services import addGenres, getGenresByMovieId
from services.movies import getMoviesByGenre


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


@genres_api.route("/getSimilar", methods=["POST", "GET"])
def similar():
    if request.method == "POST":
        data = request.get_json()
        genre_id = data["genre_id"]
        movies = getMoviesByGenre(genre_id)
        movies_list = [
            {
                "movie_id": movie[0],
                "movie_title": movie[1],
                "movie_rating": movie[2],
                "movie_description": movie[3],
                "movie_image": movie[4],
                "genre_id": movie[5],
            }
            for movie in movies
        ]
        return jsonify(movies_list)
    return jsonify({"URL: ": "/api/genres/getSimilar"})
