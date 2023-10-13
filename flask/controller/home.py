from flask import Blueprint, render_template, redirect
from db import db_connection


home = Blueprint('home', __name__)

@home.route('/')
def index():
    return render_template('index.html')