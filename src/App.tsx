import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/Layout';
import { Home, Gallery, Lab } from './pages/Pages';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/lab" element={<Lab />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
