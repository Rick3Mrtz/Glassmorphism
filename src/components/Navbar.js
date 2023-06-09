import '../styles/Navbar.css';

function Navbar() {
    return (
        <div className='nav'>

            <header className='header'>

            <a href='https://www.google.com/' className='logo'>
                Rick Martinez
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