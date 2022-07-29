from enum import unique
from flask_sqlalchemy import SQLAlchemy
db=SQLAlchemy()

class User(db.Model):
    __tablename__='users'
    id= db.Column(db.Integer, primary_key=True)
    name= db.Column(db.String, nullable=False)
    email= db.Column(db.String, nullable=False, unique=True)
    avatar= db.Column(db.String, nullable=False)

    def serialize(self):

        return{
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "avatar": self.avatar
        }
    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()