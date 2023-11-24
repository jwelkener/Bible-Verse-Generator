<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bible Verse Generator</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>

<body>
    <h1> Insta-Bible</h1>
    <h2>Bible Verse Image Generator</h2>
    <h3>by John Welkener</h3>

    <!-- Popular verses grid -->
    <p>Or, select a popular verse below:</p><br>
    <div id="popularVerseBank" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;">
        <?php
        // Establish a connection to the SQLite database
        $db = new SQLite3('verses.db');

        // Fetch popular verses from the database
        $result = $db->query('SELECT book, chapter, verse FROM verses LIMIT 12');

        // Loop through the result set and generate grid items
        while ($row = $result->fetchArray()) {
            $verseLink = 'https://yourwebsite.com/verse.php?book=' . urlencode($row['book']) . '&chapter=' . $row['chapter'] . '&verse=' . $row['verse'];
            echo "<div><a href=\"$verseLink\">{$row['book']} {$row['chapter']}:{$row['verse']}</a></div>";
        }

        // Close the database connection
        $db->close();
        ?>
    </div>

	<div class="input-container">
           <form id="generateForm">
               <label for="imageInput">Paste Image URL:</label><br>
               <input type="text" id="imageInput" name="image" placeholder="Enter image URL" required>
           </form>
           <p>Or, select a popular background below:</p> <br>
                <div id="thumbnailContainer"></div>
       </div>
   </div>

   <br><br>
   <button type="button" id="generateImageButton">Let's Go!</button>

   <!-- Move the generated image container here -->
   <br><br>
   <div id="imageContainer">
    <img id="image" src="your-image.jpg" alt="Image">
       <!-- The generated image will be displayed here -->
   </div> <br><br>

   <div id="downloadDiv">
    <!-- Add an image inside the div -->
    
</div>

<!-- Button to trigger the download -->
<button id="downloadButton">Download Image</button>

   <!-- Add script tags for necessary scripts -->
   <!-- <script src="randomimage.js"></script>
   <script src="randomverse.js"></script> -->
   <script src="app.js"></script>
</body>
</html>

