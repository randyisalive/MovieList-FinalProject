from flask import Flask, Blueprint
from flask_cors import CORS
from services.homeServices import homeServices
from controller.home import home

app = Flask(__name__)

app.secret_key = '1'
app.debug = True

app.register_blueprint(home)
app.register_blueprint(homeServices)

if __name__ == '__main__':
    app.run()