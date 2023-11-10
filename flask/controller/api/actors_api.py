from flask import Blueprint, request, jsonify
from services.actors_services import addActors

actors_api = Blueprint("actors_api", __name__)


@actors_api.route("/add", methods=["GET", "POST"])
def add():
    if request.method == "POST":
        data = request.get_json()
        FirstName = data["FirstName"]
        LastName = data["LastName"]
        description = data["description"]
        birthday = data["birthday"]
        birthplace = data["birthplace"]
        if data:
            print(data)
            addActors(FirstName, LastName, description, birthday, birthplace)
            return jsonify({"Added actors"})

    return jsonify({"URL: ": "/api/actors/add"})
