const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 5000;
const booksFile = './books.json';

app.use(bodyParser.json());
app.use(cors());

// Load books from JSON file
const loadBooks = () => {
  if (fs.existsSync(booksFile)) {
    const data = fs.readFileSync(booksFile);
    return JSON.parse(data);
  }
  return [];
};

// Save books to JSON file
const saveBooks = (books) => {
  fs.writeFileSync(booksFile, JSON.stringify(books, null, 2));
};

app.get('/books', (req, res) => {
  const books = loadBooks();
  res.json(books);
});

app.post('/books', (req, res) => {
  const books = loadBooks();
  const newBook = req.body;
  books.push(newBook);
  saveBooks(books);
  res.status(201).json(newBook);
});

app.delete('/books/:id', (req, res) => {
  let books = loadBooks();
  const { id } = req.params;
  books = books.filter(book => book.id !== id);
  saveBooks(books);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
