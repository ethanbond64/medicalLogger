from crypt import methods
import os
from urllib import request
from uuid import uuid4
from flask import Blueprint, jsonify, make_response
from models import Record
from sqlalchemy import desc, or_
from flask_cors import CORS


main = Blueprint("main", __name__, template_folder="templates")
CORS(main, origins=["http://localhost:3000", "https://www.youtube.com/", "*"])


@main.route("/test", methods=["GET"])
def get_test():
    return make_response(jsonify({"Test": True}), 200)


@main.route("/list/files", methods=["GET"])
def listFiles():

    search = request.args.get("search")
    subSet = request.args.get("set")

    try:
        if subSet is not None:
            subSet = [int(s) for s in subSet.split(",")]
            # TODO check this is how to do IN/listContains
            records = Record.query.filter(Record.id.in_(subSet)).all()
        else:
            searchChain = (Record.title.ilike(search), Record.fileContent.ilike(search))
            searchQuery = or_(*searchChain)
            records = Record.query.filter(searchQuery).all()

        return make_response(jsonify({"Records": [r.json() for r in records]}), 500)

    except:
        return make_response(jsonify({"Data": "Error during search"}), 500)
