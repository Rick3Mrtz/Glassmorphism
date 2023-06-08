import '../styles/Navbar.css';
import Logo from '../assets/glass-logo.png';

function Navbar() {
    return (
        <div className='nav'>

            <header className='header'>

            <a href='https://www.google.com/' className='logo'>
                <img src={Logo} id='glass-icon' />
            </a>

                <navbar className='navbar'>
                    <a href='https://www.google.com/'>Home</a>
                    <a href='https://www.google.com/'>Login</a>
                    <a href='https://www.google.com/'>Sign Up</a>
                    
                </navbar>

            </header>

        </div>
    )
}

export default Navbar;