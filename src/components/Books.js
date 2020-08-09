import React from 'react';
import { NavLink } from 'react-router-dom';

const Books = () => (
    <div class="container mb-4">
        <div class="input-group mb-4 mx-auto" style={{width: "215px"}}>
            <input type="text" placeholder="Search Books.." name="search" />
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2"> <i className="fa fa-search"></i></button>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-sm-4 text-center mb-2">
                <div class="container px-3">
                    <h2 class="font-weight-bold">Books</h2>
                    <div class="row">
                        <div class="rounded p-1 col-3 col-sm-12 col-md-6">
                            <button className="btn btn-outline-secondary">finances</button>
                        </div>
                        <div class="rounded p-1 col-3 col-sm-12 col-md-6">
                            <button className="btn btn-outline-secondary">Kids</button>
                        </div>
                        <div class="rounded p-1 col-3 col-sm-12 col-md-6">
                            <button className="btn btn-outline-secondary">Food</button>
                        </div>
                        <div class="rounded p-1 col-3 col-sm-12 col-md-6">
                            <button className="btn btn-outline-secondary">All</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-8 text-center">
            <NavLink to="/all"><img className='img-fluid' src='images/books.png' /></NavLink>
            </div>
        </div>
    </div>
);

export default Books;