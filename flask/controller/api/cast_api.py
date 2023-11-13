from flask import Blueprint, jsonify, request
from services.cast_services import getActors


cast_api = Blueprint("cast_api", __name__)


@cast_api.route("/get", methods=["GET"])
def get():
    pass


@cast_api.route("/getByMovieId", methods=["POST", "GET"])
def getMovie():
    if request.method == "POST":
        data = request.get_json()
        movie_id = data["movie_id"]
        actors = getActors(movie_id)
        actors_list = [
            {
                "id": actor[0],
                "FirstName": actor[1],
                "LastName": actor[2],
                "description": actor[3],
                "birthday": actor[4],
                "birthplace": actor[5],
                "image": actor[6],
            }
            for actor in actors
        ]
        return jsonify(actors_list)
    return jsonify({"url: ": "/api/casts/getMovieById"})
