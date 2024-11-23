from app.main import app, db
from flask_migrate import MigrateCommand
from flask_script import Manager

# Setup Manager
manager = Manager(app)

# Tambahkan command db untuk migrasi
manager.add_command('db', MigrateCommand)

if __name__ == "__main__":
    manager.run()
