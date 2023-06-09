import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Packages from './Packages';
import Footer from './Footer';
import Reviews from './Reviews';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About title="ABOUT" secTitle="US" />
      <Services title="OUR" secTitle="SERVICES" />
      <Packages title="POPULAR" secTitle="PACKAGES" />
      <Reviews />
      <Footer />
    </>
  );
};

export default Layout;
