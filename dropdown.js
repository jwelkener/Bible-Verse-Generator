// dropdown.js - dynamically populate dropdown menu with book, chapter, and verse

const bookSelect = document.getElementById('bookSelect');
const chapterSelect = document.getElementById('chapterSelect');
const verseSelect = document.getElementById('verseSelect');

bookSelect.addEventListener('change', (event) => {
  const selectedBook = event.target.value;
  const verseData = getVerseData(selectedBook);
  populateChapterOptions(verseData);
});

chapterSelect.addEventListener('change', (event) => {
  const selectedBook = bookSelect.value;
  const selectedChapter = event.target.value;
  const verseData = getVerseData(selectedBook);
  populateVerseOptions(verseData, selectedChapter);
});

function getVerseData(selectedBook) {
  // Fetch verse data from a source (e.g., API, JSON file)
  const verseData = {
    book: selectedBook,
    chapters: [1, 2, 3, 4, 5],
    verses: {
      1: [1, 2, 3],
      2: [4, 5, 6],
      3: [7, 8, 9],
    },
  };
  return verseData;
}

function populateChapterOptions(verseData) {
  while (chapterSelect.options.length > 0) {
    chapterSelect.options[0].remove();
  }

  for (const chapter of verseData.chapters) {
    const option = document.createElement('option');
    option.value = chapter;
    option.textContent = chapter;
    chapterSelect.appendChild(option);
  }
}

function populateVerseOptions(verseData, selectedChapter) {
  const verses = verseData.verses[selectedChapter];

  while (verseSelect.options.length > 0) {
    verseSelect.options[0].remove();
  }

  for (const verse of verses) {
    const option = document.createElement('option');
    option.value = verse;
    option.textContent = verse;
    verseSelect.appendChild(option);
  }
}
