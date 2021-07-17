from .db import db
from datetime import datetime
from flask_bcrypt import generate_password_hash,check_password_hash


# class RemCol(db.Document):
#     remark = db.StringField()
#     response = db.StringField()

class BuildingExtEnv(db.EmbeddedDocument):
    drv_rain =  db.DictField()
    drainage_issue =  db.DictField()
    water_log =  db.DictField() # read-docs
    unkempt =  db.DictField() # read-docs
    pollution =  db.DictField() # read-docs
    topography =  db.DictField() # read-docs
    radiation =  db.DictField() # read-docs
    extreme_temp =  db.DictField() # read-docs
    flood =  db.DictField() # read-docs
    fire_source =  db.DictField() # read-docs
    traffic_issue =  db.DictField() # read-docs
    building_threat =  db.DictField() # read-docs
    wind =  db.DictField() # read-docs
    moisture =  db.DictField() # read-docs

class BuildingIntCond(db.EmbeddedDocument):
    moisture =  db.DictField() # read-docs
    excess_heat =  db.DictField() # read-docs
    ventilation =  db.DictField() # read-docs
    dry_air =  db.DictField() # read-docs

class BuildingGenCond(db.EmbeddedDocument):
    foundation_sett =  db.DictField() # read-docs
    deformation =  db.DictField() # read-docs
    defects =  db.DictField() # read-docs
    cracks =  db.DictField() # read-docs

class BuildingQualityofComponent(db.EmbeddedDocument):
    physical_app =  db.DictField() # read-docs
    texture =  db.DictField() # read-docs
    strength =  db.DictField() # read-docs
    crack =  db.DictField() # read-docs
    dimension =  db.DictField() # read-docs
    deflection =  db.DictField() # read-docs
    spalling =  db.DictField() # read-docs
    corrosion =  db.DictField() # read-docs
    structural_defect =  db.DictField() # read-docs
    distress =  db.DictField() # read-docs
    deformation =  db.DictField() # read-docs
    deterioration =  db.DictField() # read-docs

class BuildingDesignLevel(db.EmbeddedDocument):
    dimension =  db.DictField() # read-docs
    spanning =  db.DictField() # read-docs
    configuration =  db.DictField() # read-docs
    redundant_element =  db.DictField() # read-docs
    loading =  db.DictField() # read-docs
    structural_defect =  db.DictField() # read-docs
    deformation =  db.DictField() # read-docs
    detailing =  db.DictField(default='Nil') # read-docs

class BuildingWorkXPLevel(db.EmbeddedDocument):
    dimension =  db.DictField() # read-docs
    misalignment =  db.DictField() # read-docs
    deflection =  db.DictField() # read-docs
    excess_waviness =  db.DictField() # read-docs
    corossion =  db.DictField() # read-docs
    bar_spacing =  db.DictField() # read-docs
    deficient_cover =  db.DictField() # read-docs
    reinforcement_spec =  db.DictField() # read-docs
    seq_construction =  db.DictField() # read-docs
    internal =  db.DictField(default='Nil') # read-docs

class BuildingIndoorEnv(db.EmbeddedDocument):
    moisture =  db.DictField() # read-docs
    humidity =  db.DictField() # read-docs
    vibration =  db.DictField() # read-docs
    excess_heat =  db.DictField() # read-docs
    ventilation =  db.DictField() # read-docs
    lighting =  db.DictField() # read-docs

class BuildingOutdoorEnv(db.EmbeddedDocument):
    drainage_issue =  db.DictField() # read-docs
    flood_issue =  db.DictField() # read-docs
    heat =  db.DictField() # read-docs
    traffic_issue =  db.DictField() # read-docs
    drv_rain =  db.DictField() # read-docs
    unkempt =  db.DictField() # read-docs
    pollution =  db.DictField() # read-docs
    extreme_temp =  db.DictField() # read-docs
    building_threat =  db.DictField() # read-docs

class BuildingInUseCond(db.EmbeddedDocument):
    addition =  db.DictField() # read-docs
    overloading =  db.DictField() # read-docs
    not_kept =  db.DictField() # read-docs
    vibration =  db.DictField() # read-docs
    vandalism =  db.DictField() # read-docs
    residential_only =  db.DictField() # read-docs

class BuildingMaintenance(db.EmbeddedDocument):
    int_env =  db.DictField() # read-docs
    ext_env =  db.DictField() # read-docs
    struct_elements =  db.DictField() # read-docs
    maintenance_issue =  db.DictField() # read-docs
    damage_maintenance =  db.DictField() # read-docs
    care_takers =  db.DictField() # read-docs
    planned_frequency =  db.DictField() # read-docs

class NDTestRes(db.EmbeddedDocument):
    # code = db.StringField()
    grid = db.StringField()
    ultrasonic =  db.DictField() # read-docs
    eq_strength = db.IntField()
    hammer_val = db.IntField()
    avg_hammer_val = db.IntField()
    avg_eq_strength = db.IntField()

class BuildingWeatherTemp(db.EmbeddedDocument):
    temp_17 = db.DictField()
    temp_18 = db.DictField()
    temp_19 = db.DictField()
    temp_20 = db.DictField()

class BuildingWeatherRain(db.EmbeddedDocument):
    rain_17 = db.DictField()
    rain_18 = db.DictField()
    rain_19 = db.DictField()
    rain_20 = db.DictField()

class SiteDescription(db.EmbeddedDocument):
    location = db.StringField()
    surr_veg = db.StringField()
    surr_out = db.StringField()
    wall_mat = db.StringField()
    roof_mat = db.StringField()
    ceil_mat = db.StringField()
    windows_mat = db.StringField()
    door_mat = db.StringField()
    floor_finish = db.StringField()

class Building(db.Document):
    date_created = db.DateTimeField(default=datetime.now())
    building_no = db.StringField(required=True, unique=True)
    address = db.StringField(required=True)
    date = db.DateTimeField(default=None)
    building_age = db.IntField(default='Nil')
    last_repair_date = db.DateTimeField(default='Nil')
    nature_of_repair = db.StringField()
    frequency_of_repair = db.StringField()
    geometry = db.StringField()
    characteristics = db.StringField()
    compliance = db.StringField()
    deviation = db.StringField()
    external_env = db.EmbeddedDocumentField(BuildingExtEnv)
    internal_cond = db.EmbeddedDocumentField(BuildingIntCond)
    general_being = db.EmbeddedDocumentField(BuildingGenCond)
    component_quality = db.EmbeddedDocumentField(BuildingQualityofComponent)
    design_lvl = db.EmbeddedDocumentField(BuildingDesignLevel)
    work_xp_lvl = db.EmbeddedDocumentField(BuildingWorkXPLevel)
    indoor_env = db.EmbeddedDocumentField(BuildingIndoorEnv)
    outdoor_env = db.EmbeddedDocumentField(BuildingOutdoorEnv)
    in_use_cond = db.EmbeddedDocumentField(BuildingInUseCond)
    maintenance = db.EmbeddedDocumentField(BuildingMaintenance)
    nd_test_res = db.EmbeddedDocumentField(NDTestRes)
    weather_info_temp = db.EmbeddedDocumentField(BuildingWeatherTemp)
    weather_info_rain = db.EmbeddedDocumentField(BuildingWeatherRain)
    site_desc = db.EmbeddedDocumentField(SiteDescription)
    is_completed = db.StringField() # set to true on FIELD4 SUBMISSION
    added_by = db.ReferenceField('User')

ACCESS = {
    'guest': 0,
    'user': 1,
    'admin': 2
}
class User(db.Document):
    email = db.EmailField(required=True, unique=True)
    username = db.StringField(required=True, unique=True)
    password = db.StringField(required=True, min_length=6)
    role = db.IntField(default=ACCESS['guest'])
    houses = db.ListField(db.ReferenceField('Building', reverse_delete_rule=db.PULL))

    def hash_password(self):
        self.password = generate_password_hash(self.password).decode('utf8')

    def check_password(self, password):
        return check_password_hash(self.password, password)

User.register_delete_rule(Building, 'added_by', db.CASCADE)
