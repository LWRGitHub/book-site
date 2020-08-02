import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <NavLink className="btn btn-outline-secondary m-2" to="/home">Home</NavLink>
      <NavLink className="btn btn-outline-secondary m-2" to="/books">Books</NavLink>
      <NavLink className="btn btn-outline-secondary m-2" to="/about">About</NavLink>
    </nav>
    <div class="jumbotron" >
      <h1 class="display-4 font-weight-bold">The Midnight Dream Publishing</h1>
    </div>
  </header>
);


export default Header;