import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NuevoVideoPage from './pages/NuevoVideoPage';
import { VideoProvider } from './context/VideoContext';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <VideoProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/NuevoVideoPage" element={<NuevoVideoPage />} />
        </Routes>
        <Footer />
      </Router>
    </VideoProvider>
  );
};

export default App;