import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import CifIiScheme from './components/CifIiScheme';
import CifIiiScheme from './components/CifIiiScheme';
import CreaegisTransformationsFund from './components/CreaegisTransformationsFund';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cif-ii-scheme-i" element={<CifIiScheme />} />
          <Route path="/cif-iii-scheme-i" element={<CifIiiScheme />} />
          <Route path="/creaegis-transformations-fund-trust" element={<CreaegisTransformationsFund />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;