// app.js

document.getElementById('generateImageButton').addEventListener('click', function() {
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
});
