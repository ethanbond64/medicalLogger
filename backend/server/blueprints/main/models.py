import os
from backend.server.utils.extensions import db
from backend.server.utils.BaseModel import BaseModel
from sqlalchemy.dialects.postgresql import JSON


class Record(BaseModel, db.Model):

    __tablename__ = "reacords"

    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String(64))
