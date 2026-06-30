from flask import Blueprint, jsonify
from models.project import projects
from models.document import documents
from models.user import users

dashboard = Blueprint("dashboard", __name__)

@dashboard.route("/dashboard", methods=["GET"])
def get_dashboard():

    return jsonify({
        "projects": projects.count_documents({}),
        "documents": documents.count_documents({}),
        "users": users.count_documents({}),
        "accuracy": "98%"
    })