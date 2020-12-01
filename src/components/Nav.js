import React from 'react';
import './Nav.css';
import {Link } from 'react-router-dom';

const Nav = ({basket}) => {
    return (
        <nav>
            <h1>Web Shop</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    Basket: {basket}
                </li>
            </ul>
        </nav>
    )
}

export default Nav
