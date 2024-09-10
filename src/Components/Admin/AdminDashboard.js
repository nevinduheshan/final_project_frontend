import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8000/admin/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    const handleDelete = async (userId) => {
        try {
            await axios.delete(`http://localhost:8000/admin/users/${userId}`);
            alert('User deleted successfully');
            // Optionally, remove the user from the state to update the UI
            setUsers(users.filter(user => user.id !== userId));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };
    

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <h2>User Management</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username} - {user.name} - {user.phone}
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
