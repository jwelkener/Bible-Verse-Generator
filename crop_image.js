function cropToSquare(inputImage, outputCanvas) {
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

        // Save or display the cropped image
        // For example, document.body.appendChild(canvas);

        // If you want to convert it back to an image URL
        const croppedImageURL = canvas.toDataURL('image/jpeg');
        console.log(croppedImageURL);
    };
}

// Example usage:
const inputImagePath = 'path/to/your/input/image.jpg';
cropToSquare(inputImagePath);
