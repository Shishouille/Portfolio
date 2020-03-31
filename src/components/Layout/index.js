import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import StyledLayout from './StyledLayout';

const Layout = ({ children }) => (
  <StyledLayout>
    <Navigation />
    {children}
    <Footer />
  </StyledLayout>
);
export default Layout;
