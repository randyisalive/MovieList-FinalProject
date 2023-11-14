from flask import Blueprint, request, jsonify
from services.profile_services import updateProfile, updateProfileNoImage
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

        # Ensure that the 'image' key exists in request.files
        if "image" in request.files and request.files["image"]:
            image = request.files["image"]
            filename = image.filename
            current_directory = os.getcwd()  # get working directory

            # Specify the directory where you want to save the uploaded files
            save_route = f"{current_directory}/vite-app/user_data/picture/{user_id}"
            # Create the directory if it doesn't exist
            os.makedirs(os.path.join(save_route), exist_ok=True)
            image.save(os.path.join(save_route, filename))
            updateProfile(username, filename, biography, birthday, gender, user_id)
            return jsonify({"Message": "Photo Uploaded"})
        else:
            updateProfileNoImage(username, biography, birthday, gender, user_id)
        return jsonify({"Message": "User updated!!"})
    return jsonify({"URL: ": "/api/profile/update"})