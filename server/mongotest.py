from flask import Flask
from flask_mongoengine import MongoEngine
from datetime import datetime
app = Flask(__name__)

# This would usually come from your config file
# DB_URI = "mongodb+srv://femiblack:7monarchofhell@cluster0.afkoj.mongodb.net/MongoTestDB?retryWrites=true&w=majority"


# client = pymongo.MongoClient("mongodb+srv://femiblack:<password>@cluster0.afkoj.mongodb.net/<dbname>?retryWrites=true&w=majority")
# db = client.test

# app.config["MONGODB_HOST"] = DB_URI
app.config['MONGODB_SETTINGS'] = {'host':  'mongodb://127.0.0.1/housing'}

db = MongoEngine(app)
# db.init_app(app)
class Yearcol(db.EmbeddedDocument):
    jan = db.StringField()
    feb = db.StringField()
    dec = db.StringField()

# class RemCol(db.Document):
#     remark = db.StringField()
#     response = db.StringField()
    
class BuildingExtEnv(db.EmbeddedDocument):
    # drv_rain =  db.EmbeddedDocumentField(RemCol)
    # drainage_issue = db.ReferenceField(RemCol)
    response = db.StringField()

class Temp(db.EmbeddedDocument):
    drv_rain =  db.EmbeddedDocumentField(Yearcol)
    temp_17 = db.DictField()
    temp_18 = db.DictField()
    temp_19 = db.DictField()
    temp_20 = db.DictField()

class Rain(db.EmbeddedDocument):
    temp_17 = db.DictField()
    temp_18 = db.DictField()
    temp_19 = db.DictField()
    temp_20 = db.DictField()

class User(db.Document):
    email = db.StringField(required=True, unique=True)
    password = db.StringField(required=True, min_length=6)
    activated = db.BooleanField(default=False)
    date_created = db.DateField()
    # movies = db.ListField(db.ReferenceField('Movie', reverse_delete_rule=db.PULL))

    def hash_password(self):
        self.password = generate_password_hash(self.password).decode('utf8')

    def check_password(self, password):
        return check_password_hash(self.password, password)

class Building(db.Document):
    name = db.StringField(required=True)
    temp = db.EmbeddedDocumentField(Temp)
    rain = db.EmbeddedDocumentField(Rain)


obj = Building(name='BuildingTemp')
obj.temp = Temp(
    drv_rain = {'jan':'lago'},
    temp_17 = {'jan':'lorem','oct':'ipsum','dec':'dolor'},
    temp_18 = {'jan':'lorem','oct':'ipsum','dec':'dolor'},
    temp_19 = {'jan':'lorem','oct':'ipsum','dec':'dolor'},
    temp_20 = {'jan':'lorem','oct':'ipsum','dec':'dolor'}
)
obj.rain = Rain(
    temp_17 = {'jan':'lorem','oct':'ipsum','dec':'dolor'},
    temp_18 = {'jan':'lorem','oct':'ipsum','dec':'dolor'},
    temp_19 = {'jan':'lorem','oct':'ipsum','dec':'dolor'},
    temp_20 = {'jan':'lorem','oct':'ipsum','dec':'dolor'}
)
obj.save()

if __name__ == '__main__':
    app.run(debug=True)