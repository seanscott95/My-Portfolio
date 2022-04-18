import React, { useState } from 'react';
import NavLayout from '../layouts/NavLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

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
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Passes the currentPage from state and the function to update it */}
      <NavLayout currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Calls the renderPage method which returns a component */}
      {renderPage()}
    </div>
  );
}
