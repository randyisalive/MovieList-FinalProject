from flask import Blueprint, request, jsonify
from services.profile_services import (
    updateProfile,
    updateProfileNoImage,
    get_count,
    get_total_rating,
)
import os


profile_api = Blueprint("profile_api", __name__)

save_route = "./vite-app/user_data/picture"


@profile_api.route("/update", methods=["POST", "GET"])
def update():
    if request.method == "POST":
        username = request.form.get("username")
        user_id = request.form.get("user_id")
        biography = request.form.get("biography")
        birthday = request.form.get("birthday")
        gender = request.form.get("gender")
        print(gender)

        # Ensure that the 'image' key exists in request.files
        if "image" in request.files and request.files["image"]:
            image = request.files["image"]
            filename = image.filename
            current_directory = os.getcwd()  # get working directory

            # Specify the directory where you want to save the uploaded files
            save_route_vite = (
                f"{current_directory}/vite-app/user_data/picture/{user_id}"
            )
            save_route_flask = (
                f"{current_directory}/flask/static/users_data/picture/{user_id}"
            )
            # Create the directory if it doesn't exist
            os.makedirs(os.path.join(save_route_vite), exist_ok=True)
            os.makedirs(os.path.join(save_route_flask), exist_ok=True)
            image.save(os.path.join(save_route_vite, filename))
            image.save(os.path.join(save_route_flask, filename))
            updateProfile(username, filename, biography, birthday, gender, user_id)
            return jsonify({"Message": "Photo Uploaded"})
        else:
            updateProfileNoImage(username, biography, birthday, gender, user_id)
        return jsonify({"Message": "User updated!!"})
    return jsonify({"URL: ": "/api/profile/update"})


@profile_api.route("/total", methods=["POST", "GET"])
def total():
    if request.method == "POST":
        data = request.get_json()
        id = data.get("id")
        count_watching = get_count("Watching", id)
        count_completed = get_count("Completed", id)
        count_dropped = get_count("Dropped", id)
        count_plan = get_count("Plan to Watch", id)
        result = [
            count_watching[0],
            count_completed[0],
            count_dropped[0],
            count_plan[0],
        ]
        return jsonify(result)
    return jsonify({"url: ": "/api/profile/total"})


@profile_api.route("/total_rating", methods=["POST", "GET"])
def totalRating():
    if request.method == "POST":
        data = request.get_json()
        id = data["id"]
        star_1 = get_total_rating(1, id)
        star_2 = get_total_rating(2, id)
        star_3 = get_total_rating(3, id)
        star_4 = get_total_rating(4, id)
        star_5 = get_total_rating(5, id)
        star_list = [star_1[0], star_2[0], star_3[0], star_4[0], star_5[0]]
        return jsonify(star_list)
    return jsonify({"URL: ": "/api/profile/total_rating"})
