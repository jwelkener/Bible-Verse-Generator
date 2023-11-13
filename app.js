// app.js

// Function to fetch a random Bible verse
function getRandomVerse() {
    // Implement logic to fetch a random verse from your database or external API
    // ...

    // For demo purposes, return a sample verse
    return "John 1:1 - In the beginning was the Word, and the Word was with God, and the Word was God.";
}

// Function to fetch verse suggestions from the API
function fetchVerseSuggestions(verseInput) {
    // Make a request to the Bible API to search for verses
    return fetch(`https://api.scripture.api.bible/v1/bibles/{YOUR_BIBLE_ID}/search?query=${verseInput}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching verse suggestions:', error);
            throw error;
        });
}

// Function to handle image generation
function generateImage() {
    // Get the selected verse and image URL
    const verseInput = document.getElementById('verseInput').value;
    const imageInput = document.getElementById('imageInput').value;

    // Validate inputs (you may want to implement more robust validation)
    if (!verseInput || !imageInput) {
        alert("Please enter both a verse and an image URL.");
        return;
    }

    // Send the selected verse and image URL to the server for image generation
    fetch('/create_image', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            verse: verseInput,
            image_url: imageInput,
        }),
    })
        .then(response => response.text())
        .then(result => {
            // Display the generated image or handle the result as needed
            document.getElementById('generatedImageContainer').innerHTML = `<img src="${result}" alt="Generated Image">`;
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while generating the image.');
        });
}

// Event listener for generating image
document.getElementById('generateImageButton').addEventListener('click', generateImage);

// Event listener for surprising with a random verse
document.getElementById('surpriseVerseButton').addEventListener('click', async function () {
    try {
        // Fetch a random verse and set it in the input field
        const randomVerse = await getRandomVerse();
        document.getElementById('verseInput').value = randomVerse;
    } catch (error) {
        console.error('Error fetching random verse:', error);
        alert('An error occurred while fetching a random verse.');
    }
});

// Event listener for surprising with a random image
document.getElementById('surpriseImageButton').addEventListener('click', async function () {
    try {
        // Fetch a random image URL or choose from a predefined list
        // For demo purposes, return a sample image URL
        const sampleImageURL = "https://example.com/sample-image.jpg";
    
        // Set the random image URL in the input field
        document.getElementById('imageInput').value = sampleImageURL;
    } catch (error) {
        console.error('Error fetching random image:', error);
        alert('An error occurred while fetching a random image.');
    }
});

// Event listener for live verse suggestions while typing
document.getElementById('verseInput').addEventListener('input', async function () {
    try {
        // When the user types in the verse input field, fetch suggestions from the API
        const verseInput = this.value;
        const suggestions = await fetchVerseSuggestions(verseInput);
        
        // Process and display verse suggestions
        displayVerseSuggestions(suggestions);
    } catch (error) {
        console.error('Error handling verse suggestions:', error);
        alert('An error occurred while handling verse suggestions.');
    }
});

function displayVerseSuggestions(data) {
    // Process the data and update the UI with verse suggestions
    // For simplicity, let's assume the API returns an array of verse suggestions
    const suggestionsContainer = document.getElementById('verseSuggestions');

    // Clear previous suggestions
    suggestionsContainer.innerHTML = '';

    // Display each suggestion
    data.verses.forEach(verse => {
        const suggestionItem = document.createElement('div');
        suggestionItem.textContent = `${verse.reference}: ${verse.text}`;
        suggestionItem.addEventListener('click', function () {
            // Set the selected verse in the input field
            document.getElementById('verseInput').value = verse.reference;

            // Clear the suggestions
            suggestionsContainer.innerHTML = '';
        });

        suggestionsContainer.appendChild(suggestionItem);
    });
}
