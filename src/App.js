import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Founders from './pages/Founders';
import Mint from './pages/Mint';
import Footer from './components/Footer';  // Import the footer component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/founders">Founders</a></li>
            <li><a href="/mint">Mint</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/founders" element={<Founders />} />
          <Route path="/mint" element={<Mint />} />
        </Routes>
        <Footer /> {/* Add the footer component here */}
      </div>
    </Router>
  );
}

export default App;
