import React from 'react';
import '../styles/Navbar.css';
import { Link } from "react-router-dom";
import Home from './Home';

function Navbar() {
    return (
        <div className='nav'>

            <header className='header'>

            <a className='logo'>
                Rick Martinez 
            </a>

                <navbar className='navbar'>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>

                    
                </navbar>

            </header>

            {/* <Home /> */}

        </div>
    )
}

export default Navbar;