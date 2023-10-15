import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/user">Users</NavLink>
            <NavLink to="/signup">Signup</NavLink>
            <NavLink to="/signin">Sign In</NavLink>
        </div>
    );
};

export default Header;