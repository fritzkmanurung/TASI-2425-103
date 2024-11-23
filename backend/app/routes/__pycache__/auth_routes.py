from flask import Blueprint, request, jsonify
import bcrypt

auth_bp = Blueprint("auth", __name__)

# Simulasi database
users = {}

# Register endpoint
@auth_bp.route("/api/register", methods=["POST"])
def register():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify({"error": "Username and password are required"}), 400

    if username in users:
        return jsonify({"error": "User already exists"}), 400

    # Hash password
    hashed_password = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())
    users[username] = hashed_password

    return jsonify({"message": "User registered successfully!"}), 201

# Login endpoint
@auth_bp.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify({"error": "Username and password are required"}), 400

    if username not in users:
        return jsonify({"error": "Invalid credentials"}), 401

    # Check password
    if bcrypt.checkpw(password.encode("utf-8"), users[username]):
        return jsonify({"message": "Login successful!"}), 200

    return jsonify({"error": "Invalid credentials"}), 401
