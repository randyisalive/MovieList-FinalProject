from flask import Blueprint, request, jsonify
from services.movies_reviews_service import getReviews

movies_reviews_api = Blueprint("movies_reviews_api", __name__)


@movies_reviews_api.route("/get", methods=["POST", "GET"])
def get():
    if request.method == "POST":
        data = request.get_json()
        movie_id = data["movie_id"]
        reviews = getReviews(movie_id)
        return jsonify(reviews)
    return jsonify({"URL: ": "/api/movie_reviews/get"})
