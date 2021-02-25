from flask import Flask
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from database.db import initialize_db
from flask_restful import Api
from resources.routes import initialize_routes
from resources.errors import errors

app = Flask(__name__)
app.config['SECRET_KEY'] = 'somesecretkey'
app.config.from_envvar('ENV_FILE_LOCATION')
# export(linux)|set(windows) ENV_FILE_LOCATION=./.env
api = Api(app, errors=errors)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

app.config['MONGODB_SETTINGS'] = {'host':  'mongodb://localhost/housing_app'}
CORS(app, resources={r'/*': {'origins': '*'}})


initialize_db(app)
initialize_routes(api)

if __name__ == '__main__':
    app.run()