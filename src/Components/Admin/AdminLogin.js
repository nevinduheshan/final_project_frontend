import React, { useState } from 'react';
import axios from 'axios';

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
            <h1>Admin Login</h1>
            <form onSubmit={handleLogin}>
                <label>Username:</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
                <br />
                <label>Password:</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <br />
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AdminLogin;
