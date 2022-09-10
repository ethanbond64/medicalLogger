import os
from uuid import uuid4
from flask import Blueprint, jsonify, make_response
from sqlalchemy import desc
from flask_cors import CORS

main = Blueprint("main", __name__, template_folder="templates")
CORS(main, origins=["http://localhost:3000", "https://www.youtube.com/", "*"])


@main.route("/test", methods=["GET"])
def get_test():
    return make_response(jsonify({"Test": True}), 200)
