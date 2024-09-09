import React from 'react';

function Footer() {
    return (
        <footer style={{ backgroundColor: '#333', padding: '10px', color: 'white', position: 'fixed', width: '100%', bottom: 0 }}>
            <p>&copy; {new Date().getFullYear()} Your Company Name</p>
        </footer>
    );
}

export default Footer;
