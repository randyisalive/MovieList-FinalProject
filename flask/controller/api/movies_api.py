from flask import Blueprint, request, jsonify
from services.movies import getAllMovies, addMovies, getMovieByTitle

movies_api = Blueprint("movies_api", __name__)


## url_prefix =  /api/movies
@movies_api.route("/get", methods=["POST", "GET"])
def get():
    movies = getAllMovies()
    movie_list = [
        {
            "id": movie[0],
            "title": movie[1],
            "rating": movie[2],
            "description": movie[3],
            "image": movie[4],
            "list_id": movie[5],
            "status": movie[7],
        }
        for movie in movies
    ]
    return jsonify(movie_list)


@movies_api.route("/getTitle", methods=["POST", "GET"])
def getTitle():
    data = request.get_json()
    title = data["title"]
    movie = getMovieByTitle(title)
    movie_list = {
        "id": movie[0],
        "title": movie[1],
        "rating": movie[2],
        "description": movie[3],
        "image": movie[4],
    }
    return jsonify(movie_list)


@movies_api.route("/add", methods=["POST", "GET"])
def add():
    if request.method == "POST":
        datas = request.get_json()
        for i in range(0, 100):
            addMovies(
                datas["title"][i],
                datas["rating"][i],
                datas["description"][i],
                datas["images"][i],
            )
            print(datas["title"][0])
        return jsonify({"added movies": datas})
    return jsonify({"Messages": "Movie added"})
