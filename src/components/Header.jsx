import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({page}) => {

    const isAuthenticated = localStorage.getItem('isAuthenticated');


    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('isAuthenticated');
        window.location.replace('/');
    }

    return (
        <header>
            <h1>{page}</h1>
            {
                isAuthenticated ? 
                    (
                        <nav>
                            <Link to="/dashboard">Dashboard</Link>
                            <Link to="/" onClick={handleLogout}>Logout</Link>
                        </nav>
                    ) : (
                        <nav>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/login">Login</Link>
                        </nav>
                    )
            }
        </header>
    );
}

export default Header;
