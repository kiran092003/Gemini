import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/home'; 
import CodeConverter from './components/codeConverter';
import ErrorCorrector from './components/error-corrector';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lang-converter" element={<CodeConverter/>}/>
        <Route path="/error-corrector" element={<ErrorCorrector/>}/>
      </Routes>
    </Router>
  );
}

export default App;
