import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe'; // Updated
import Projects from './components/Projects';
import Services from './components/Services';
import ContactMe from './components/ContactMe';
 // Updated

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} /> {/* Updated */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactme" element={<ContactMe />} /> {/* Updated */}
      </Routes>
    </Router>
  );
}

export default App;
