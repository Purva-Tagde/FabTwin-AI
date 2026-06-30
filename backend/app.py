from dotenv import load_dotenv
load_dotenv()

from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient

from config import Config
from routes.auth import auth
from routes.projects import project
from routes.documents import document
from routes.dashboard import dashboard
from routes.ai import ai


app = Flask(__name__)
CORS(app)

# MongoDB Connection
client = MongoClient(Config.MONGO_URI)
db = client[Config.DATABASE_NAME]

# Register Blueprint
app.register_blueprint(auth)
app.register_blueprint(project)
app.register_blueprint(document)
app.register_blueprint(dashboard)
app.register_blueprint(ai)

@app.route("/")
def home():

    collections = db.list_collection_names()
    users = db.users.find()

    all_users = []

    for user in users:
        user["_id"] = str(user["_id"])
        all_users.append(user)

    return jsonify({
        "message": "FabTwin AI Backend Running Successfully",
        "database": Config.DATABASE_NAME,
        "collections": collections,
        "users": all_users
    })


if __name__ == "__main__":
    app.run(debug=True)