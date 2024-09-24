import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png'

function Footer() {
    return (
        <footer className="p-4 bg-black md:p-8 lg:p-10 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl text-center">

                <Link to="/" className="flex justify-center items-center pb-3 space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-8" alt="Site Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Tea sales</span>
                </Link>
                <ul className="flex flex-wrap justify-center items-center mb-6 text-white">
                    <li>
                        <Link to="/" className="mr-4 hover:underline md:mr-6 ">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="mr-4 hover:underline md:mr-6">About</Link>
                    </li>
                    <li>
                        <Link to="/prediction" className="mr-4 hover:underline md:mr-6 ">Prediction</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="mr-4 hover:underline md:mr-6">Contact Us</Link>
                    </li>
                </ul>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; {new Date().getFullYear()} Nevindu Heshan</span>
            </div>
        </footer>
    );
}

export default Footer;
