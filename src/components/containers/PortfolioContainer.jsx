import React, { useState } from 'react';
import NavLayout from '../layouts/NavLayout';
import FooterLayout from '../layouts/FooterLayout'
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // Depending on the value of `currentPage` the corresponding component is rendered.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='portfolioContainer'>
      {/* Passes the currentPage from state and the function to update it */}
      <NavLayout currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Calls the renderPage method which returns a component */}
      {renderPage()}
      <FooterLayout />
    </div>
  );
}
