import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PowerNodeLanding from './pages/PowerNodeLanding';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<PowerNodeLanding />} />
          <Route path="/powernode" element={<PowerNodeLanding />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;