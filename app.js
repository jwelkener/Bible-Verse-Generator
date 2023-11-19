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

    // Display the verse directly based on user input
    displayVerse(verseInput);

    // Make an API call to get the verse and display it on the image (uncomment if needed)
    // fetchVerseAndDisplay(verseInput);
});

// Function to display verse directly
function displayVerse(userInput) {
    const [book, reference] = userInput.split(' ', 2);
    const [chapter, verse] = reference.split(':');

    // Replace this with your actual logic to fetch the verse text
    const verseText = getVerseText(book, parseInt(chapter), parseInt(verse));

    if (verseText) {
        const imageContainer = document.getElementById('imageContainer');

        // Create a new div element for the centered verse
        const centeredVerse = document.createElement('div');
        centeredVerse.classList.add('centered-verse'); // Add styling class if needed
        centeredVerse.innerText = `${verseText} - ${userInput}`;

        // Clear previous content and append the centered verse to the image container
        imageContainer.innerHTML = '';
        imageContainer.appendChild(centeredVerse);
    } else {
        alert(`Verse not found for ${userInput}`);
    }
}


function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}

function displayVerse(userInput) {
    const [book, reference] = userInput.split(' ', 2);
    const [chapter, verse] = reference.split(':');

    // Replace this with your actual logic to fetch the verse text
    const verseText = getVerseText(book, parseInt(chapter), parseInt(verse));

    if (verseText) {
        alert(`${verseText} - ${userInput}`);
    } else {
        alert(`Verse not found for ${userInput}`);
    }
}

function getVerseText(book, chapter, verse) {
    // Replace this with your actual logic to fetch the verse text from the database
    // For now, using a simple mapping based on the provided sample verses
    const verseMapping = {
        'John': { 3: { 16: 'For God so loved the world that He gave His one and only Son, that whoever believes in Him shall not perish but have eternal life.' } }
        // Add mappings for other sample verses...
    };

    return verseMapping[book]?.[chapter]?.[verse];
}

document.addEventListener("DOMContentLoaded", function () {
    const backgroundContainer = document.getElementById("backgroundContainer");
  
    // Fetch backgrounds from JSON file
    fetch("backgrounds.json")
      .then(response => response.json())
      .then(data => {
        // Iterate through background URLs and create image elements
        data.backgrounds.forEach(url => {
          const img = document.createElement("img");
          img.src = url;
          img.classList.add("background-image"); // Add styling class if needed
          img.addEventListener("click", function () {
            // Handle image selection if needed
            document.getElementById("imageInput").value = url;
          });
  
          // Append the image to the container
          backgroundContainer.appendChild(img);
        });
      })
      .catch(error => console.error("Error fetching backgrounds:", error));
  });

// thumbnailContainer.js - for managing background thumbnails on start page

// Number of images in the "images" folder
const numberOfImages = 12;

// Container for image thumbnails
const thumbnailContainer = document.getElementById('thumbnailContainer');

// Loop to generate image thumbnails dynamically
for (let i = 1; i <= numberOfImages; i++) {
    // Create image element
    const image = document.createElement('img');

    // Set image source (replace with your GitHub repository URL and image path)
    image.src = `https://raw.githubusercontent.com/your-username/your-repo/main/images/image${i}.jpg`;

    // Set other attributes as needed
    image.alt = `Image ${i} Thumbnail`;
    image.width = 100; // Set the desired width for the thumbnail

    // Append image to the thumbnail container
    thumbnailContainer.appendChild(image);
}


// document.getElementById('generateImageButton').addEventListener('click', function () {
    //     const verseInput = document.getElementById('verseInput').value;
    //     const imageInput = imageInputField.value;
    
    //     // Basic input validation
    //     if (!verseInput || !imageInput) {
    //         alert('Please enter valid inputs for verse and image.');
    //         return;
    //     }
    
    //     // Display the verse directly based on user input
    //     displayVerse(verseInput);
    
    //     // Alternatively, you can uncomment the line below to make an API call to get the verse
    //     // fetchVerseAndDisplay(verseInput);
    // });

// Function to fetch verse using API call (uncomment if needed)
// function fetchVerseAndDisplay(verseInput) {
//     fetch('/get_verse', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             verseInput: verseInput,
//         }),
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Assume you have an image container with the ID 'imageContainer'
//         const imageContainer = document.getElementById('imageContainer');
//
//         // Create a new div element for the centered verse
//         const centeredVerse = document.createElement('div');
//         centeredVerse.classList.add('centered-verse'); // Add styling class if needed
//         centeredVerse.innerText = data.verse;
//
//         // Append the centered verse to the image container
//         imageContainer.innerHTML = ''; // Clear previous content
//         imageContainer.appendChild(centeredVerse);
//     })
//     .catch(error => {
//         console.error('Error fetching verse:', error);
//         alert('An error occurred while fetching the verse. Please try again.');
//     });
// }
