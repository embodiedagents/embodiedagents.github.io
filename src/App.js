import React from 'react'; // Importing the React library
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing necessary components from react-router-dom
import Header from './components/Header'; // Importing Header component
import HomePage from './components/HomePage'; // Importing HomePage component
import PeoplePage from './components/PeoplePage'; // Importing PeoplePage component
import ResearchPage from './components/ResearchPage'; // Importing ResearchPage component
import JoiningPage from './components/JoiningPage'; // Importing JoiningPage component
import PublicationsPage from './components/PublicationsPage'; // Importing PublicationsPage component
import Footer from './components/Footer'; // Importing Footer component
import './App.css'; // Importing the main stylesheet

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/people`} element={<PeoplePage />} />
          {/* <Route path={`${process.env.PUBLIC_URL}/research`} element={<ResearchPage />} /> */}
          <Route path={`${process.env.PUBLIC_URL}/publications`} element={<PublicationsPage />} />
          <Route path={`${process.env.PUBLIC_URL}/joining`} element={<JoiningPage />} />
          <Route path={`${process.env.PUBLIC_URL}/`} element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
