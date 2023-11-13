from flask import Blueprint, render_template, redirect, request


home_controller = Blueprint("home_controller", __name__)


folder_route = "../../vite-app/actors_data/"


@home_controller.route("/")
def index():
    return render_template("index.html")


@home_controller.route("/add-actors", methods=["POST", "GET"])
def add_actors():
    if request.method == "POST":
        FirstName = request.form["FirstName"]
        LastName = request.form["LastName"]
        description = request.form["description"]
        birthday = request.form["birthday"]
        birthplace = request.form["birthplace"]
        image = request.files["file"]
        filename = image.filename
        if filename == "":
            return None
        print(image)
    return render_template("add_actors.html")
