import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Pages/Register/Register';
import Login from './Components/Pages/Login/Login';
import Prediction from './Components/Pages/Prediction/PredictionForm'; // Import the Prediction component
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Home from './Components/Pages/Home/Home';

function App() {

  useEffect(() => {
    const tailwindCDN = document.createElement('script');
    tailwindCDN.src = 'https://cdn.tailwindcss.com';
    document.head.appendChild(tailwindCDN);
}, []);

  return (
    <Router>
        <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/prediction" element={<Prediction />} /> {/* Add the route for Prediction */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
