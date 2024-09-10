import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../../Layout';

function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is authenticated
        const token = localStorage.getItem('token');
        if (!token) {
            // Redirect to login if not authenticated
            navigate('/');
        }
    }, [navigate]);

    const handleLogout = () => {
        // Clear authentication info
        localStorage.removeItem('token');
        
        // Redirect to login
        navigate('/');
    };

    return (
        <Layout>
        <div className="pt-16">
            <h1>Welcome to the Dashboarddddd!</h1>
            {/* Your dashboard content */}
            <button onClick={handleLogout}>Logout</button>
        </div>
        </Layout>
    );
}

export default Dashboard;
