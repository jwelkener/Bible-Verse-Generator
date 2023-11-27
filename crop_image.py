# pip3 install Pillow
# Crop image into a square

from PIL import Image

def crop_to_square(input_path, output_path):
    # Open the image
    img = Image.open(input_path)

    # Find the center of the image
    center_x, center_y = img.width // 2, img.height // 2

    # Calculate the crop box
    size = min(img.width, img.height)
    left = center_x - size // 2
    top = center_y - size // 2
    right = center_x + size // 2
    bottom = center_y + size // 2

    # Crop the image
    img_cropped = img.crop((left, top, right, bottom))

    # Save the cropped image
    img_cropped.save(output_path)

# Example usage:
input_image_path = 'path/to/your/input/image.jpg'
output_image_path = 'path/to/your/output/cropped_image.jpg'
crop_to_square(input_image_path, output_image_path)
