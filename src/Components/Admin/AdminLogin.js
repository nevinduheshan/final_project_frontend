import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/adminLogin', { 
                username, 
                password 
            });

            if (response.status === 200) {
                setMessage('Login successful');
                // Redirect to the admin dashboard after login
                window.location.href = '/admin/dashboard';
            }
        } catch (error) {
            setMessage('Invalid credentials');
        }
    };

    return (
        <div>
            <section class="bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/background.jpg')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply bg-opacity-60">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen pt:mt-0">
      <Link class="flex items-center mb-6 text-2xl font-semibold text-white">
          <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          Flowbite    
      </Link>
      <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800">
          <div class="p-6 space-y-4 md:space-y-6 lg:space-y-8 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
                  Admin Login
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                  <div>
                      <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}  name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="username" required/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required/>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <Link href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                  </div>
                  {message && <span className='p-0 mb-4 text-sm text-red-800 dark:text-red-400'>{message}</span>}
                  <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log in to your account</button>
                  <p class="text-sm font-light text-center text-gray-500 dark:text-gray-300">
                        <Link href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Don't have an account?</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>

        </div>
    );
};

export default AdminLogin;
