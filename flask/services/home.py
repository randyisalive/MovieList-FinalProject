from flask import Blueprint, jsonify, request, render_template


home = Blueprint('home', __name__)

@home.route('/')
def index():
    return render_template('index.html')