const imageInputField = document.getElementById('imageInput');

imageInputField.addEventListener('input', function () {
    const imageInput = imageInputField.value;
    const imageContainer = document.getElementById('imageContainer');

    // Validate if the entered value is a valid URL
    if (isValidUrl(imageInput)) {
        // Clear previous content
        imageContainer.innerHTML = '';

        // Create an image element
        const imageElement = document.createElement('img');
        imageElement.src = imageInput;
        imageElement.alt = 'Selected Image';

        // Append the image element to the image container
        imageContainer.appendChild(imageElement);
    } else {
        // Display an error message or handle invalid URL
        imageContainer.innerHTML = '<p>Invalid URL</p>';
    }
});

document.getElementById('generateImageButton').addEventListener('click', function () {
    const verseInput = document.getElementById('verseInput').value;
    const imageInput = imageInputField.value;

    // Basic input validation
    if (!verseInput || !imageInput) {
        alert('Please enter valid inputs for verse and image.');
        return;
    }

    // Make an API call to get the verse and display it on the image
    fetchVerseAndDisplay(verseInput, imageInput);
});

// Function to make an API call and display verse on the image
async function fetchVerseAndDisplay(verseInput, imageUrl) {
    // Make an API call to get the verse text based on user input
    try {
        const verseText = await getVerseText(verseInput);
debugger
        const imageContainer = document.getElementById('imageContainer');

        // Create a new div element for the centered verse
        const centeredVerse = document.createElement('div');
        centeredVerse.classList.add('centered-verse'); // Add styling class if needed

        // Create an image element
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.alt = 'Selected Image';

        // Set the text properties
        centeredVerse.innerText = `${verseText} - ${verseInput}`;

        // Append the image and centered verse to the image container
        imageContainer.innerHTML = '';
        imageContainer.appendChild(imageElement);
        imageContainer.appendChild(centeredVerse);
    } catch (error) {
        alert(error.message);
    }
}

// Function to check if the entered value is a valid URL
function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}

// Function to make an API call to get the verse text
async function getVerseText(verseInput) {
    const apiUrl = `https://bible-api.com/${verseInput}?verse_numbers=true`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const verseData = await response.json();

        if (verseData.verses) {
            return verseData.verses[0].text;
        } else {
            throw new Error(`Verse not found for ${verseInput}`);
        }
    } catch (error) {
        console.error('Error fetching verse:', error);
        throw new Error('An error occurred while fetching the verse. Please try again.');
    }
}
