from flask import Flask, render_template
import sqlite3, random

app = Flask(__name__)

# Function to connect to the SQLite database and get a random verse
def get_random_verse():
    conn = sqlite3.connect('your_database.db')
    cursor = conn.cursor()
    
    # Execute the SQL script from verse.sql to create the table, insert data, and get top 100 verses
    with open('verse.sql', 'r') as sql_file:
        sql_script = sql_file.read()
        cursor.executescript(sql_script)

    # Fetch a random verse from the database
    cursor.execute("SELECT id, text FROM verses ORDER BY RANDOM() LIMIT 1")
    result = cursor.fetchone()
    
    if result:
        verse_id, verse_text = result
        return f"{verse_id}: {verse_text}"
    else:
        return None
    
	# Commit changes and close the database connection
    conn.commit()
    conn.close()

# Sample Image Bank
image_bank = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
    # Add more image URLs to the list
]

# Function to randomly select an image URL
def select_random_image():
    return random.choice(image_bank)

@app.route('/')
def index():
    # Get a random verse and a random image when the user accesses the main page
    random_verse_from_db = get_random_verse()
    random_image = select_random_image()

    # Render the HTML template with the random verse and image
    return render_template('index.html', random_verse=random_verse_from_db, random_image=random_image)

if __name__ == '__main__':
    app.run(debug=True)

