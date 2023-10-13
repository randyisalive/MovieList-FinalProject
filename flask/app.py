from flask import Flask, Blueprint
from flask_cors import CORS
from services.home import home

app = Flask(__name__)

app.secret_key = '1'
app.debug = True

app.register_blueprint(home)