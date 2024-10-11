// In components/HomePage.js
import React from 'react';
import MainSection from './HomePage/MainSection'; // Importing MainSection component
import ResearchHighlights from './HomePage/ResearchHighlights';
import RecentNews from './HomePage/RecentNews';

const HomePage = () => {
  return (
    <div>
      <MainSection />
      {/*<ResearchHighlights />*/}
      <RecentNews />
      {/* Rest of your HomePage content */}
    </div>
  );
};

export default HomePage;

