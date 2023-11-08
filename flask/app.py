from flask import Flask, Blueprint
from flask_cors import CORS
from services.homeServices import homeServices
from controller.home import home
from services.userServices import userServices
from controller.api.mylist_api import mylist_api
from controller.api.movies_api import movies_api
from controller.api.tokens_api import tokens_api
from controller.api.auth_api import auth_api
from controller.api.cast_api import cast_api
from controller.api.genres_api import genres_api

app = Flask(__name__)
CORS(app)

app.secret_key = "1"
app.debug = True

app.register_blueprint(home)
app.register_blueprint(homeServices)
app.register_blueprint(userServices)
app.register_blueprint(genres_api, url_prefix="/api/genres")
app.register_blueprint(auth_api, url_prefix="/api/auth")
app.register_blueprint(tokens_api, url_prefix="/api/tokens")
app.register_blueprint(movies_api, url_prefix="/api/movies")
app.register_blueprint(mylist_api, url_prefix="/api/mylist")
app.register_blueprint(cast_api, url_prefix="/api/cast")

if __name__ == "__main__":
    app.run(host="0.0.0.0")
