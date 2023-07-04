class InternalServerError(Exception):
    pass

class SchemaValidationError(Exception):
    pass

class BuildingAlreadyExistsError(Exception):
    pass

class UpdatingBuildingError(Exception):
    pass

class DeletingBuildingError(Exception):
    pass

class BuildingNotExistsError(Exception):
    pass

class EmailAlreadyExistsError(Exception):
    pass

class UsernameAlreadyExistsError(Exception):
    pass

class UnauthorizedError(Exception):
    pass

errors = {
    "InternalServerError": {
        "message": "Something went wrong",
        "status": 500
    },
    "SchemaValidationError": {
        "message": "Request is missing required fields",
        "status": 400
    },
    "BuildingAlreadyExistsError": {
        "message": "Building with given name already exists",
        "status": 400
    },
    "UpdatingBuildingError": {
        "message": "Updating Building added by another is forbidden",
        "status": 403
    },
    "DeletingBuildingError": {
        "message": "Deleting Building added by another is forbidden",
        "status": 403
    },
    "BuildingNotExistsError": {
        "message": "Building with given id doesn't exist",
        "status": 400
    },
    "EmailAlreadyExistsError": {
        "message": "User with given email already exists",
        "status": 400
    },
    "UsernameAlreadyExistsError": {
        "message": "User with given username already exists",
        "status": 400
    },
    "UnauthorizedError": {
        "message": "Invalid username or password",
        "status": 401
    },
}
