from flask import Response, request, jsonify
from database.models import Building, User
from flask_jwt_extended import jwt_required, get_jwt_identity, get_jwt
from flask_restful import Resource
import json

from mongoengine.errors import FieldDoesNotExist, \
    NotUniqueError, DoesNotExist, ValidationError, InvalidQueryError
from resources.errors import SchemaValidationError, BuildingAlreadyExistsError, \
    InternalServerError, UpdatingBuildingError, DeletingBuildingError, BuildingNotExistsError

class HousingApi(Resource):
    def get(self):
        houses = Building.objects().to_json()
        return Response(houses, mimetype="application/json", status=200)

    @jwt_required()
    def post(self):
        claims = get_jwt()
        if int(claims['role']) >=1:
            try:
                user_id = get_jwt_identity()
                body = request.get_json()
                user = User.objects.get(id=user_id)
                house = Building(**body, added_by=user)
                house.save()
                user.update(push__houses=house)
                user.save()
                id = house.id
                return {'id':str(id)}, 200
            except (FieldDoesNotExist, ValidationError):
                raise SchemaValidationError
            except NotUniqueError:
                raise BuildingAlreadyExistsError
            except Exception as e:
                raise InternalServerError
        else:
            return jsonify(message='Account has not yet been activated')

class HouseApi(Resource):
    @jwt_required()
    def put(self, id):
        claims = get_jwt()
        if int(claims['role']) >=1:
            try:
                body = request.get_json()
                Building.objects.get(id=id).update(**body)
                return '',200
            except InvalidQueryError:
                raise SchemaValidationError
            except DoesNotExist:
                raise UpdatingBuildingError
            except Exception:
                raise InternalServerError
        else:
            return jsonify(message='Account has not yet been activated')
    
    @jwt_required()
    def delete(self, id):
        claims = get_jwt()
        if int(claims['role']) >=1:
            try:
                user_id = get_jwt_identity()
                house = Building.objects.get(id=id, added_by=user_id)
                house.delete()
                return '', 200
            except DoesNotExist:
                raise DeletingBuildingError
            except Exception:
                raise InternalServerError
        else:
            return jsonify(message='Account has not yet been activated')

    def get(self, id):
        try:
            houses = Building.objects.get(id=id).to_json()
            return Response(houses, mimetype="application/json", status=200)
        except DoesNotExist:
            raise BuildingNotExistsError
        except Exception:
            raise InternalServerError

class UserHouseApi(Resource):
    @jwt_required()
    def get(self):
        claims = get_jwt()
        if int(claims['role']) >=1:
            user_id = get_jwt_identity()
            houses = Building.objects(added_by=user_id).to_json()
            return Response(houses, mimetype="application/json", status=200)
        else:
            return jsonify(message='Account has not yet been activated')
