import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the external CSS file

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/dashboard">Home</Link>
                    </li>
                    <li>
                        <Link to="/register">Dashboardd</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    {/* Add more links as needed */}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
