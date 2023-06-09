import React from 'react';
import '../styles/Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className='nav'>

            <header className='header'>

            <a href='https://www.google.com/' className='logo'>
                Rick Martinez
            </a>

                <navbar className='navbar'>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                    
                </navbar>

            </header>

        </div>
    )
}

export default Navbar;