import React from 'react';
import { Navigation, Footer } from '.';

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
