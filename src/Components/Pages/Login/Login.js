import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../assets/Logo.png'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Use useNavigate for navigation

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/login', { username, password });
            if (response.status === 200) {
                // Save authentication token to localStorage/sessionStorage
                localStorage.setItem('token', response.data.token); // Example if using a token

                // Redirect to the dashboard after successful login
                navigate('/dashboard');
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setErrorMessage("Invalid credentials. Please try again.");
            } else {
                console.error("Login failed:", error);
                setErrorMessage("An error occurred. Please try again later.");
            }
        }
    };

    return (
        // <Layout>
        <div classNameName="pt-16">
            <section classNameName="bg-gray-50 dark:bg-gray-900">
                <div className="max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:gap-20 lg:py-16 lg:grid-cols-12">
                    <div className="flex-col justify-between hidden col-span-6 mr-auto lg:flex xl:mb-0">
                        <div>
                            <Link to="/" className="inline-flex items-center mb-6 text-2xl font-semibold text-gray-900 lg:mb-10">
                                <img src={logo} className="h-24 mr-4" alt="Site Logo" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">Tea sales</span>
                            </Link>
                            <div className="flex">
                                <svg className="w-5 h-5 mr-2 text-primary-600 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <div>
                                    <h3 className="mb-2 text-xl font-bold leading-none text-gray-900 dark:text-white">Get started quickly</h3>
                                    <p className="mb-2 font-light text-gray-500 dark:text-gray-400">Integrate with developer-friendly APIs or choose low-code.</p>
                                </div>
                            </div>
                            <div className="flex pt-8">
                                <svg className="w-5 h-5 mr-2 text-primary-600 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <div>
                                    <h3 className="mb-2 text-xl font-bold leading-none text-gray-900 dark:text-white">Support any business model</h3>
                                    <p className="mb-2 font-light text-gray-500 dark:text-gray-400">Host code that you don't want to share with the world in private.</p>
                                </div>
                            </div>
                            <div className="flex pt-8">
                                <svg className="w-5 h-5 mr-2 text-primary-600 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <div>
                                    <h3 className="mb-2 text-xl font-bold leading-none text-gray-900 dark:text-white">Join millions of businesses</h3>
                                    <p className="mb-2 font-light text-gray-500 dark:text-gray-400">Flowbite is trusted by ambitious startups and enterprises of every size.</p>
                                </div>
                            </div>
                        </div>
                        <nav>
                            <ul className="flex space-x-4">
                                <li>
                                    <Link href="#" className="text-sm text-gray-500 hover:underline hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">About</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-gray-500 hover:underline hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Term & Conditions</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-gray-500 hover:underline hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="mb-6 text-center lg:hidden">
                        <Link to="/" className="inline-flex items-center text-2xl font-semibold text-gray-900 lg:hidden dark:text-white">
                            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                            Flowbite
                        </Link>
                    </div>
                    <div className="w-full col-span-6 mx-auto bg-white rounded-lg shadow dark:bg-gray-800 md:mt-0 sm:max-w-lg xl:p-0">
                        <div className="p-6 space-y-4 lg:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 sm:text-2xl dark:text-white">
                                Welcome back
                            </h1>
                            <div className="items-center space-y-3 sm:space-x-4 sm:space-y-0 sm:flex">
                            </div>
                            <form className="space-y-4 lg:space-y-6" onSubmit={handleLogin}>
                                <div>
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                    <input
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        type="username"
                                        name="username"
                                        id="username"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Username"
                                        required="" />
                                </div>
                                <div>
                                    <label for="password" className="block text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required="" />
                                </div>
                                <div>
                                    {errorMessage && <span className='p-0 mb-4 text-sm text-red-800 dark:text-red-400'>{errorMessage}</span>}
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <Link href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                                </div>
                                <button type="submit" className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in to your account</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


            {/* <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Login</button>
            </form>
            {errorMessage && <p>{errorMessage}</p>} */}
        </div>
        // </Layout>
    );
}

export default Login;
