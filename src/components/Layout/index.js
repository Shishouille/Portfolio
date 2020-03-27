import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div>
    <Navigation />
    <main>
      {children}
    </main>
    <Footer />
  </div>
);
export default Layout;
