// verse_dropdown.js

// Function to populate a dropdown with options
function populateDropdown(dropdown, data) {
	data.forEach(item => {
	  const option = document.createElement('option');
	  option.value = item;
	  option.text = item;
	  dropdown.add(option);
	});
  }
  
  // Fetch the list of Bible books from the JSON file
  fetch('bible_books_list.json')
	.then(response => response.json())
	.then(data => {
	  const bookDropdown = document.getElementById('bookInput');
	  const chapterDropdown = document.getElementById('chapterInput');
	  const verseDropdown = document.getElementById('verseInput');
  
	  // Populate the book dropdown with options
	  populateDropdown(bookDropdown, data.books.map(book => book.book));
  
	  // Default selected book to the first in the list
	  const defaultBook = data.books[0].book;
	  bookDropdown.value = defaultBook;
  
	  // Populate the chapter and verse dropdowns based on the selected book
	  const selectedBook = data.books.find(book => book.book === defaultBook);
	  if (selectedBook) {
		populateDropdown(chapterDropdown, Array.from({ length: selectedBook.chapters }, (_, i) => i + 1));
		populateDropdown(verseDropdown, Array.from({ length: selectedBook.verses }, (_, i) => i + 1));
	  }
	})
	.catch(error => console.error('Error fetching Bible books:', error));
  