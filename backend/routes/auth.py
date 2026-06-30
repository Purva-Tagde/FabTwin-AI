from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash

from models.user import users

auth = Blueprint("auth", __name__)

# ---------------- Register ---------------- #

@auth.route("/register", methods=["POST"])
def register():

    data = request.json

    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    if users.find_one({"email": email}):
        return jsonify({"message": "Email already exists"}), 400

    hashed_password = generate_password_hash(password)

    users.insert_one({
        "name": name,
        "email": email,
        "password": hashed_password
    })

    return jsonify({"message": "User Registered Successfully"}), 201


# ---------------- Login ---------------- #

@auth.route("/login", methods=["POST"])
def login():

    data = request.json

    email = data.get("email")
    password = data.get("password")

    user = users.find_one({"email": email})

    if not user:
        return jsonify({"message": "User not found"}), 404

    if not check_password_hash(user["password"], password):
        return jsonify({"message": "Invalid Password"}), 401

    return jsonify({
        "message": "Login Successful",
        "name": user["name"],
        "email": user["email"]
    }), 200