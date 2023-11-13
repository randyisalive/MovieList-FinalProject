from flask import Blueprint, jsonify, request, render_template


homeServices = Blueprint('homeServices', __name__)

@homeServices.route('/service/home')
def index():
    return render_template('index.html')