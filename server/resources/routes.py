from .building import HousingApi, HouseApi, UserHouseApi
from .auth import SignupApi, LoginApi

def initialize_routes(api):
    api.add_resource(HousingApi, '/api/building')
    api.add_resource(HouseApi, '/api/building/<id>')
    api.add_resource(UserHouseApi, '/api/building/user')

    api.add_resource(SignupApi, '/api/auth/signup')
    api.add_resource(LoginApi, '/api/auth/login')