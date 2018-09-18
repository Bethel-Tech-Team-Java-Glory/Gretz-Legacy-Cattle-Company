import React from 'react';

const Header = ({ title }) => (
    <div>
        <h1>{title}</h1>
        <a href="/">Home</a>
        <a href="/signup">Sign Up</a>
        <a href="/login">Log In</a>
        <a href="/service">Services</a>
        <a href="/contact">Contact</a>
    </div>
);

export default Header;