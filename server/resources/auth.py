from flask import Response, request
from flask_jwt_extended import create_access_token
from database.models import User
from flask_jwt_extended import jwt_required, get_jwt
from flask_restful import Resource
import datetime
import json

from mongoengine.errors import FieldDoesNotExist, NotUniqueError, DoesNotExist, InvalidQueryError
from resources.errors import SchemaValidationError, EmailAlreadyExistsError, UnauthorizedError, \
    InternalServerError,DeletingBuildingError, UpdatingBuildingError

class SignupApi(Resource):
    def post(self):
        try:
            body = request.get_json()
            user = User(**body)
            user.hash_password()
            user.save()
            id = user.id
            return {'id': str(id)}, 200
        except FieldDoesNotExist:
            raise SchemaValidationError
        except NotUniqueError:
            return {"message": "User with given email already exists"}, 400
            raise EmailAlreadyExistsError
        except Exception as e:
            raise InternalServerError

class LoginApi(Resource):
    def post(self):
        try:
            body = request.get_json()
            user = User.objects.get(username=body.get('username'))
            authorized = user.check_password(body.get('password'))
            if not authorized:
                return {'error': 'Username or password invalid'}, 401

            role = str(user.role)
            expires = datetime.timedelta(days=1)
            access_token = create_access_token(identity=str(user.id), additional_claims={'role':role}, expires_delta=expires)
            return {'token': access_token, 'role': role}, 200
        except (UnauthorizedError, DoesNotExist):
            raise UnauthorizedError
        except Exception as e:
            raise InternalServerError

class GetUsersApi(Resource):
    @jwt_required()
    def get(self):
        claims = get_jwt()
        if int(claims['role']) == 2:
            users = User.objects().to_json()
            return Response(users, mimetype="application/json", status=200)
        else:
            return {'message':'Unauthorized access'}, 401
    
class UserApi(Resource):
    @jwt_required()
    def put(self, id):
        claims = get_jwt()
        if int(claims['role']) == 2:
            try:
                body = request.get_json()
                User.objects.get(id=id).update(**body)
                return '',200
            except InvalidQueryError:
                raise SchemaValidationError
            except DoesNotExist:
                raise UpdatingBuildingError
            except Exception:
                raise InternalServerError
        else:
            return {'message':'Unauthorized access'}, 403
    
    @jwt_required()
    def delete(self, id):
        claims = get_jwt()
        if int(claims['role']) == 2:
            try:
                user = User.objects.get(id=id)
                user.delete()
                return '', 200
            except DoesNotExist:
                raise DeletingBuildingError
            except Exception:
                raise InternalServerError
        else:
            return {'message':'Unauthorized access'}, 403