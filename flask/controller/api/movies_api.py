from flask import Blueprint, request, jsonify
from services.movies import getAllMovies

movies_api = Blueprint("movies_api", __name__)


## url_prefix =  /api/movies
@movies_api.route("/get")
def get():
    movies = getAllMovies()
    movie_list = [
        {
            "id": movie[0],
            "title": movie[1],
            "rating": movie[2],
            "description": movie[3],
            "image": movie[4],
        }
        for movie in movies
    ]
    return jsonify(movie_list)
