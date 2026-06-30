from flask import Blueprint, request, jsonify
from google import genai
import os

ai = Blueprint("ai", __name__)
print("GOOGLE_API_KEY =", os.getenv("GOOGLE_API_KEY"))
client = genai.Client(api_key=os.getenv("GOOGLE_API_KEY"))


@ai.route("/ai", methods=["POST"])
def ask_ai():

    data = request.get_json()
    prompt = data.get("prompt", "")

    if prompt.strip() == "":
        return jsonify({"response": "Please enter a prompt."})

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )

        return jsonify({
            "response": response.text
        })

    except Exception as e:
        import traceback

    traceback.print_exc()

    return jsonify({
        "response": str(e)
    }), 500