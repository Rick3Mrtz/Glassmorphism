import '../styles/Navbar.css';

function Navbar() {
    return (
        <div className='nav'>

            <header className='header'>

                <a href='https://www.google.com/' className='logo'>Logo</a>

                <navbar className='navbar'>
                    <a href='https://www.google.com/'>Home</a>
                    <a href='https://www.google.com/'>About</a>
                    <a href='https://www.google.com/'>Portfolio</a>
                    <a href='https://www.google.com/'>Services</a>
                    <a href='https://www.google.com/'>Contact</a>
                </navbar>

            </header>

        </div>
    )
}

export default Navbar;