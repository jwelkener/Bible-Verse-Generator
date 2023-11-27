document.addEventListener('DOMContentLoaded', function () {
    const imageContainer = document.getElementById('imageContainer');
    
    // Path to your image within the "images" folder
    const imagePath = 'images/teemu-paananen-OOE4xAnBhKo-unsplash.jpg';

    // Create an image element
    const imageElement = document.createElement('img');
    imageElement.src = imagePath;
    imageElement.alt = 'Your Image';

    // Append the image to the container
    thumbnailContainer.appendChild(imageElement);
});

// /Users/johnwelkener/Desktop/InstaBible/images/white-square.png