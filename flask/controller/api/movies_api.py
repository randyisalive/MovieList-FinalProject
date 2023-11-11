from flask import Blueprint, request, jsonify
from services.movies import getAllMovies, addMovies, getMovieByTitle, getMovieById

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
            "list_id": movie[6],
            "status": movie[8],
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
        "genres_id": movie[5],
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


@movies_api.route("/getId", methods=["POST", "GET"])
def getId():
    if request.method == "POST":
        data = request.get_json()
        item = getMovieById(data)
        movie_list = {
            "id": item[0],
            "title": item[1],
            "rating": item[2],
            "description": item[3],
            "image": item[4],
            "genre_id": item[5],
        }

        return jsonify(movie_list)
    return jsonify({"URL: ": "/api/movies/getId"})
