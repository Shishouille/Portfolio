import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from './Navigation';
import Footer from './Footer';
import StyledLayout from './StyledLayout';

const Layout = ({ children }) => (
  <StyledLayout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Shirin Boomi - Front-end Developper</title>
      <meta name="portolio" content="This is my portfolio." />
      <link rel="canonical" href="http://shirin-boomi.netlify.app" />
    </Helmet>
    <Navigation />
    {children}
    <Footer />
  </StyledLayout>
);
export default Layout;
