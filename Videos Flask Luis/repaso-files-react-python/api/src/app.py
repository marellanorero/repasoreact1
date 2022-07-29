from flask import Flask, request, jsonify, render_template
from flask_migrate import Migrate
from flask_cors import CORS 
"""
evita problemas de cors al realizar la petición
"""
from routes import user
from models import db

app=Flask(__name__)
app.config['DEBUG'] = True
app.config['ENV'] = 'development'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite://database.db'

db.init_app(app)
Migrate(app, db)
CORS(app)

app.register_blueprint(user.api, url_prefix='/api')

@app.route('/')
def main():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()
