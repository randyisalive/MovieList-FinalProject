from flask import Flask
from flask_cors import CORS
from services.homeServices import homeServices
from controller.home_controller import home_controller
from services.userServices import userServices

## api controller
from controller.api.mylist_api import mylist_api
from controller.api.movies_api import movies_api
from controller.api.tokens_api import tokens_api
from controller.api.auth_api import auth_api
from controller.api.cast_api import cast_api
from controller.api.actors_api import actors_api
from controller.api.genres_api import genres_api
from controller.api.movies_reviews_api import movies_reviews_api
from controller.api.community_api import community_api
from controller.api.profile_api import profile_api
from controller.api.status_api import status_api
from controller.api.friends_api import friends_api
from controller.api.home_api import home_api
from controller.api.where_to_watch_api import where_to_watch

## api controller


app = Flask(__name__)
CORS(app)

app.secret_key = "1"
app.debug = True

app.register_blueprint(home_controller)
app.register_blueprint(homeServices)
app.register_blueprint(userServices)

# api controller #
app.register_blueprint(home_api, url_prefix="/api/home")
app.register_blueprint(genres_api, url_prefix="/api/genres")
app.register_blueprint(auth_api, url_prefix="/api/auth")
app.register_blueprint(tokens_api, url_prefix="/api/tokens")
app.register_blueprint(movies_api, url_prefix="/api/movies")
app.register_blueprint(mylist_api, url_prefix="/api/mylist")
app.register_blueprint(cast_api, url_prefix="/api/cast")
app.register_blueprint(movies_reviews_api, url_prefix="/api/movies_reviews")
app.register_blueprint(actors_api, url_prefix="/api/actors")
app.register_blueprint(community_api, url_prefix="/api/community")
app.register_blueprint(profile_api, url_prefix="/api/profile")
app.register_blueprint(status_api, url_prefix="/api/status")
app.register_blueprint(friends_api, url_prefix="/api/friends")
app.register_blueprint(where_to_watch, url_prefix="/api/where_to_watch")
# api controller #

if __name__ == "__main__":
    app.run(host="0.0.0.0")
