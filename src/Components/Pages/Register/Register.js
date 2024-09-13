import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo.png'

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/register', {
        username,
        password,
        phone,
        name,
      });

      if (response.status === 201) {
        setSuccessMessage('User registered successfully!');
        setTimeout(() => navigate('/login'), 2000); // Redirect to login after 2 seconds
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setErrorMessage(error.response.data.message); // Display error from the backend
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    // <Layout>
    <div>


      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-20 lg:py-16 lg:grid-cols-12">
          <div class="w-full place-self-center lg:col-span-6">
            <div class="p-6 mx-auto bg-white rounded-lg shadow dark:bg-gray-800 sm:max-w-xl sm:p-8">
              <Link to="/" className="inline-flex items-center text-2xl font-semibold text-gray-900">
                <img src={logo} className="h-14 mr-4" alt="Site Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">Tea sales</span>
              </Link>
              <h1 class="mb-2 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                Register Form
              </h1>
              <p class="text-sm font-light text-gray-500 dark:text-gray-300">
                Start your website in seconds. Have an account? <Link to="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign In here</Link>.
              </p>
              <form class="mt-4 space-y-6 sm:mt-6" onSubmit={handleSubmit}>
                <div>
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Name" required />
                </div>
                <div>
                  <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Username" required />
                </div>
                <div>
                  <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                  <input type="phone" value={phone} onChange={(e) => setPhone(e.target.value)} name="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="0712345678" required />
                </div>
                <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Password" required />
                </div>

                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

                <div class="flex items-center">
                  <div class="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
                  <div class="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
                </div>

                <button type="submit" class="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>
              </form>
            </div>
          </div>
          <div class="mr-auto place-self-center lg:col-span-6">
            <img class="hidden mx-auto lg:flex" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg" alt="illustration" />
          </div>
        </div>
      </section>


      {/* <h2>Registerfdsfsdf</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Phone:</label>
          <input
            type="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form> */}

    </div>
    // </Layout>
  );
};

export default Register;
