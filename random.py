# from flask import Flask, render_template, jsonify
# from flask_sqlalchemy import SQLAlchemy
# import requests
# import random

# app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///bible_verse_generator.db'
# db = SQLAlchemy(app)

# class Verse(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     text = db.Column(db.Text)
#     views_count = db.Column(db.Integer)

# class Image(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     photographer = db.Column(db.String(255))
#     url = db.Column(db.Text)

# # Function to fetch a random verse from the Bible API
# def get_random_verse():
#     response = requests.get("https://bible-api.com/john 3:16")  # Example with John 3:16
#     if response.status_code == 200:
#         verse_text = response.json().get('text')
#         return verse_text
#     else:
#         return None

# # Function to randomly select an image URL
# def select_random_image():
#     random_image = Image.query.order_by(db.func.random()).first()
#     return random_image.url if random_image else None

# @app.route('/')
# def index():
#     # Fetch a random verse from the Bible API
#     random_verse = get_random_verse()

#     # Fetch a random image from the database
#     random_image = select_random_image()

#     return render_template('index.html', random_verse=random_verse, random_image=random_image)

# if __name__ == '__main__':
#     # Create the database tables before running the app
#     db.create_all()
#     app.run(debug=True)
