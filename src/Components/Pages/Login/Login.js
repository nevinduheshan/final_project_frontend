import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Layout from '../../../Layout';

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
        <Layout>
        <div className="pt-16">
            <h1>Login</h1>
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
            {errorMessage && <p>{errorMessage}</p>}
        </div>
        </Layout>
    );
}

export default Login;
