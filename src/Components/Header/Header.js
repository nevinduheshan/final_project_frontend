import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png'


function Header() {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const location = useLocation();//get the current location path 

    const handleLogout = () => {
        // Clear the authentication token
        localStorage.removeItem('token');
        // Redirect to the homepage or login page after logout
        navigate('/');
    };

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={ logo } className="h-8" alt="Site Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tea sales</span>
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {token ? (
                        <button 
                            onClick={handleLogout} 
                            type="button" 
                            className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800">
                            Logout
                        </button>
                    ) : (
                        <Link to="/login">
                            <button 
                                type="button" 
                                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Login
                            </button>
                        </Link>
                    )}
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to="/" className={`block px-3 rounded ${isActive('/') ? 'text-white bg-blue-700 md:bg-transparent md:text-green-700' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700'}`}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className={`block px-3 rounded ${isActive('/about') ? 'text-white bg-blue-700 md:bg-transparent md:text-green-700' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700'}`}>About Us</Link>
                        </li>
                         {/* Conditionally render the Prediction link if the user is logged in */}
                         {token && (
                            <li>
                                <Link to="/prediction" className={`block px-3 rounded ${isActive('/prediction') ? 'text-white bg-green-700 md:bg-transparent md:text-green-700' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700'}`}>Prediction</Link>
                            </li>
                        )}
                        <li>
                            <Link to="/contact" className={`block px-3 rounded ${isActive('/contact') ? 'text-white bg-green-700 md:bg-transparent md:text-green-700' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-green-700 md:dark:hover:bg-transparent dark:border-gray-700'}`}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
