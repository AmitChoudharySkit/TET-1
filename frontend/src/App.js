// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import BookList from './components/BookList';
// import AddBook from './components/AddBook';
// import './App.css';

// const App = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/books')
//       .then(response => {
//         setBooks(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the books!', error);
//       });
//   }, []);

//   const addBook = (book) => {
//     axios.post('http://localhost:5000/books', book)
//       .then(response => {
//         setBooks([...books, response.data]);
//       })
//       .catch(error => {
//         console.error('There was an error adding the book!', error);
//       });
//   };

//   const deleteBook = (id) => {
//     axios.delete(`http://localhost:5000/books/${id}`)
//       .then(() => {
//         setBooks(books.filter(book => book.id !== id));
//       })
//       .catch(error => {
//         console.error('There was an error deleting the book!', error);
//       });
//   };

//   return (
//     <div className="App">
//       <h1>Book Management System</h1>
//       <AddBook onAdd={addBook} />
//       <BookList books={books} onDelete={deleteBook} />
//     </div>
//   );
// };

// export default App;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);
  
  // Get the backend URL from an environment variable
  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://backend:5000';

  useEffect(() => {
    axios.get(`${backendUrl}/books`)
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the books!', error);
      });
  }, [backendUrl]);

  const addBook = (book) => {
    axios.post(`${backendUrl}/books`, book)
      .then(response => {
        setBooks([...books, response.data]);
      })
      .catch(error => {
        console.error('There was an error adding the book!', error);
      });
  };

  const deleteBook = (id) => {
    axios.delete(`${backendUrl}/books/${id}`)
      .then(() => {
        setBooks(books.filter(book => book.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the book!', error);
      });
  };

  return (
    <div className="App">
      <h1>Book Management System</h1>
      <AddBook onAdd={addBook} />
      <BookList books={books} onDelete={deleteBook} />
    </div>
  );
};

export default App;
