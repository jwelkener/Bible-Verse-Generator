document.addEventListener('DOMContentLoaded', function () {
    const thumbnailContainer = document.getElementById('thumbnailContainer');

    // Array of image paths
    const imagePaths = [
        'alexander-grey-jYbKxinWQGk-unsplash.jpg',
        'artur-luczka-loAfOVk1eNc-unsplash.jpg',
        'daniel-leone-g30P1zcOzXo-unsplash.jpg',
        'dave-hoefler-lsoogGC_5dg-unsplash.jpg',
        'david-marcu-78A265wPiO4-unsplash (1).jpg',
        'david-marcu-78A265wPiO4-unsplash.jpg',
        'davies-designs-studio-_UCVrH-ZIIg-unsplash.jpg',
        'eberhard-grossgasteiger-S-2Ukb_VqpA-unsplash.jpg',
        'eberhard-grossgasteiger-y2azHvupCVo-unsplash.jpg',
        'j-lee-5WFfI63aEBo-unsplash.jpg',
        'janke-laskowski-jz-ayLjk2nk-unsplash.jpg',
        'jonatan-pie-EvKBHBGgaUo-unsplash.jpg',
        'mads-schmidt-rasmussen-xfngap_DToE-unsplash.jpg',
        'qingbao-meng-01_igFr7hd4-unsplash.jpg',
        'rohit-ranwa-twEy5TouJLg-unsplash.jpg',
        'sam-dan-truong-ju2NgSoR6pA-unsplash.jpg',
        'shifaaz-shamoon-9K9ipjhDdks-unsplash.jpg',
        'steffi-Cj0tPzC5Uic-unsplash.jpg',
        'teemu-paananen-OOE4xAnBhKo-unsplash.jpg',
        'white-square.png'
    ];

    // Shuffle the array to get random images
    const shuffledImages = shuffleArray(imagePaths);

    // Display only the first 12 images
    const imagesToDisplay = shuffledImages.slice(0, 12);

    // Iterate through the array of image paths
    imagesToDisplay.forEach(function (imagePath) {
        // Call the cropToSquare function and pass the imagePath
        cropToSquare('images/' + imagePath, function (croppedImageURL) {
            // Create an image element
            const imageElement = document.createElement('img');
            imageElement.src = croppedImageURL;
            imageElement.alt = 'Your Cropped Image';

            // Set the width of the image to 70 pixels
            imageElement.style.width = '70px';
            imageElement.style.height = '70px';

            // Append the image to the thumbnail container
            thumbnailContainer.appendChild(imageElement);
        });
    });
});

function cropToSquare(inputImage, callback) {
    const img = new Image();
    img.src = inputImage;

    img.onload = function () {
        const canvas = document.createElement('canvas');
        const size = Math.min(img.width, img.height);

        canvas.width = size;
        canvas.height = size;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(
            img,
            (img.width - size) / 2,
            (img.height - size) / 2,
            size,
            size,
            0,
            0,
            size,
            size
        );

        // Convert the cropped image to a data URL
        const croppedImageURL = canvas.toDataURL('image/jpeg');

        // Call the callback function with the croppedImageURL
        callback(croppedImageURL);
    };
}

// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
