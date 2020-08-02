import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => (
    <div className='text-center'>
        <NavLink to="/books"><img className="img-fluid mb-4" src='images/hPGBooks.png' /></NavLink>
        <p></p>
    </div>
);

export default Home;