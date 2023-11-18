from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_verse', methods=['POST'])
def get_verse():
    try:
        book = request.form.get('bookInput')
        chapter = request.form.get('chapterInput')
        verse = request.form.get('verseInput')

        # Make an API call to get the verse
        api_url = f'https://bible-api.com/{book}+{chapter}:{verse}'
        response = requests.get(api_url)
        data = response.json()

        if 'text' in data:
            return jsonify({'verse': data['text']})
        else:
            return jsonify({'verse': 'Verse not found.'})
    except Exception as e:
        return jsonify({'verse': 'An error occurred.'})

if __name__ == '__main__':
    app.run(debug=True)
