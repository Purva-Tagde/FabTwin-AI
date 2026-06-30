from flask import Blueprint, request, jsonify
from bson import ObjectId

from models.document import documents

document = Blueprint("document", __name__)


# Get All Documents
@document.route("/documents", methods=["GET"])
def get_documents():

    all_documents = []

    for doc in documents.find():
        doc["_id"] = str(doc["_id"])
        all_documents.append(doc)

    return jsonify(all_documents)


# Add Document
@document.route("/documents", methods=["POST"])
def add_document():

    data = request.json

    documents.insert_one({
        "name": data["name"],
        "type": data["type"],
        "date": data["date"]
    })

    return jsonify({"message": "Document Added Successfully"})


# Delete Document
@document.route("/documents/<id>", methods=["DELETE"])
def delete_document(id):

    documents.delete_one({"_id": ObjectId(id)})

    return jsonify({"message": "Document Deleted Successfully"})