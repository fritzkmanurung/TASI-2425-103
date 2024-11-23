from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)  # Aktifkan CORS untuk menerima permintaan dari frontend

    # Import routes
    from .routes.example_routes import example_bp
    app.register_blueprint(example_bp)

    return app
