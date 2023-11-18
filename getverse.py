# getverse.py
# gets a verse from verses database
# e.g., when user enters "John 3:16" it pulls up the verse and reference

import sqlite3

def get_verse(book, chapter, verse):
    connection = sqlite3.connect('verses.db')
    cursor = connection.cursor()

    # Query the database for the specified verse
    cursor.execute("SELECT text FROM verses WHERE book=? AND chapter=? AND verse=?", (book, chapter, verse))
    result = cursor.fetchone()

    connection.close()

    return result[0] if result else None

def main():
    user_input = input("Enter the book, chapter, and verse (e.g., John 3:16): ").strip()

    try:
        book, reference = user_input.split(' ', 1)
        chapter, verse = map(int, reference.split(':'))
    except ValueError:
        print("Invalid input. Please enter the book, chapter, and verse in the format 'John 3:16'.")
        return

    verse_text = get_verse(book, chapter, verse)

    if verse_text:
        print(f"\n{user_input} - {verse_text}\n")
    else:
        print(f"\nVerse not found for {user_input}\n")

if __name__ == "__main__":
    main()
