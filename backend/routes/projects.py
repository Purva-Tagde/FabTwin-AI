from flask import Blueprint, request, jsonify
from bson import ObjectId

from models.project import projects

project = Blueprint("project", __name__)

# ---------------- Get All Projects ---------------- #

@project.route("/projects", methods=["GET"])
def get_projects():

    all_projects = []

    for p in projects.find():
        p["_id"] = str(p["_id"])
        all_projects.append(p)

    return jsonify(all_projects)


# ---------------- Add Project ---------------- #

@project.route("/projects", methods=["POST"])
def add_project():

    data = request.json

    projects.insert_one({
        "name": data["name"],
        "status": data["status"],
        "updated": data["updated"]
    })

    return jsonify({"message": "Project Added Successfully"})


# ---------------- Update Project ---------------- #

@project.route("/projects/<id>", methods=["PUT"])
def update_project(id):

    data = request.json

    projects.update_one(
        {"_id": ObjectId(id)},
        {
            "$set": {
                "name": data["name"],
                "status": data["status"],
                "updated": data["updated"]
            }
        }
    )

    return jsonify({"message": "Project Updated Successfully"})


# ---------------- Delete Project ---------------- #

@project.route("/projects/<id>", methods=["DELETE"])
def delete_project(id):

    projects.delete_one({"_id": ObjectId(id)})

    return jsonify({"message": "Project Deleted Successfully"})