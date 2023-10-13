from flask import Flask, Blueprint
from flask_cors import CORS
from services.homeServices import homeServices
from controller.home import home
from services.userServices import userServices
from services.tokenServices import tokenServices

app = Flask(__name__)
CORS(app)

app.secret_key = '1'
app.debug = True

app.register_blueprint(home)
app.register_blueprint(homeServices)
app.register_blueprint(userServices)
app.register_blueprint(tokenServices)

if __name__ == '__main__':
    app.run()