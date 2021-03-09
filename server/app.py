from flask import Flask
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from database.db import initialize_db
from flask_restful import Api
from resources.routes import initialize_routes
from resources.errors import errors

app = Flask(__name__)
app.config.from_object(__name__)
app.config['SECRET_KEY'] = 'somesecretkey'
app.config.from_envvar('ENV_FILE_LOCATION')
# export(linux)|set(windows) ENV_FILE_LOCATION=./.envipip
app.config['MONGODB_SETTINGS'] = {'host':  'mongodb://localhost/housing_app'}
api = Api(app, errors=errors)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

initialize_db(app)
initialize_routes(api)

CORS(app, resources={r'/*': {'origins': '*'}})
app.config['CORS_HEADERS'] = 'Content-Type'

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=9000, debug=True)