from flask import Blueprint, jsonify

example_bp = Blueprint('example', __name__)

@example_bp.route("/api/example", methods=["GET"])
def example_route():
    return jsonify({"message": "Hello from Flask!"})
