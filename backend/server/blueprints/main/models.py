from backend.server.utils.extensions import db
from backend.server.utils.BaseModel import BaseModel
from sqlalchemy.dialects.postgresql import JSON

PATH_PREFIX = "/uploads/"


class Record(BaseModel, db.Model):

    __tablename__ = "reacords"

    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(db.String(64))

    fileType = db.Column(db.String(128))
    fileDate = db.Column(db.DateTime())
    fileContent = db.Column(db.String(2048))
    fileInfo = db.Column(JSON)
    filePath = db.Column(db.String(256))
