import React from 'react';
import './App.css';
import Title from './Title';
import Books from './mainPage/Books';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <a href="books.js">Books</a>
        </nav>
      </header>
      <Title />
      <Books />
    </div>
  );
}

export default App;
