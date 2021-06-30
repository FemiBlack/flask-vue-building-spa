from flask import Flask
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from database.db import initialize_db
from flask_restful import Api
from resources.routes import initialize_routes
from resources.errors import errors

import os
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__, static_folder='../client/dist/', static_url_path='/')
app.config.from_object(__name__)
app.config['SECRET_KEY'] = 'somesecretkey'
DATABASE_URL = os.environ.get('DATABASE_URI')
app.config['MONGODB_SETTINGS'] = {'host':  DATABASE_URL}
# app.config['MONGODB_SETTINGS'] = {'host':  'mongodb://127.0.0.1/housing_app'}

api = Api(app, errors=errors)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

initialize_db(app)
initialize_routes(api)

CORS(app, resources={r'/*': {'origins': '*'}})
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def index():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(port=(os.getenv('PORT') if os.getenv('PORT') else 8000), debug=True)
