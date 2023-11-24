const imageInputField = document.getElementById('imageInput');
const verseInputField = document.getElementById('verseInput');
const imageContainer = document.getElementById('imageContainer');

// Add input event listener to verseInputField
verseInputField.addEventListener('input', async function () {
    const verseInput = verseInputField.value;

    // Basic input validation
    if (!verseInput) {
        return;
    }

    try {
        // Make an API call to get the verse text based on user input
        const verseText = await getVerseText(verseInput);

        // Clear previous content
        imageContainer.innerHTML = '';

        // Create a new div element for the centered verse
        const centeredVerse = document.createElement('div');
        centeredVerse.classList.add('centered-verse'); // Add styling class if needed

        // Set the text properties
        centeredVerse.innerText = `${verseText} - ${verseInput}`;

        // Append the centered verse to the image container
        imageContainer.appendChild(centeredVerse);
    } catch (error) {
        // Handle error or display a message if needed
        console.error(error.message);
    }
});

document.getElementById('generateImageButton').addEventListener('click', function () {
    const verseInput = verseInputField.value;
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

// Function to adjust styles based on content
function adjustStyles(imageContainer, centeredVerse) {
    // Add styles here as needed
}

// Function to download the div as an image
function downloadDivAsImage(container) {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // Set the canvas size to the dimensions of the square div
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;

    // Draw the content of the div onto the canvas
    context.drawSvg(container.innerHTML, 0, 0, canvas.width, canvas.height);

    // Convert the canvas to a data URL
    const dataUrl = canvas.toDataURL('image/png');

    // Create a link element
    const link = document.createElement('a');

    // Set the download attribute with a desired filename
    link.download = 'verse_image.png';

    // Set the href attribute to the data URL
    link.href = dataUrl;

    // Append the link to the document and trigger a click event to initiate the download
    document.body.appendChild(link);
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
}
