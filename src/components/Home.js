import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => (
    <div className='text-center'>
        <NavLink to="/books"><img className="img-fluid mb-4"  src={process.env.PUBLIC_URL + '/images/homePageBooks.png'}/></NavLink>
        <p className="my-5" style={{fontSize: '20px'}}>Welcome, and thank you for visiting! Here at the Midnight Dream Publishing we dedicate ourselves to bringing you quality book in genres you are look for. Are books range form Finance books to kids books and on onward. We invite you to take a look at our <a href='https://www.amazon.com/Logan-Reynolds/e/B089CBVN5F'>Amazon store</a>, also feel free to brows or search are <NavLink to="/books">library.</NavLink> Once again thank you for visiting, and if you enjoy reading our books, please feel free to leave a good review on one of are books in are <a href='https://www.amazon.com/Logan-Reynolds/e/B089CBVN5F'>Amazon store.</a></p> 
    </div>
);

export default Home;