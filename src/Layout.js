import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function Layout({ children }) {
    return (
        <div>
            <Header />
            <main style={{ minHeight: '80vh' }}>
                {children} {/* This renders the page content between header and footer */}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
