import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PowerNodePage from './components/PowerNodePage';
import NodeTypesPage from './pages/NodeTypesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <Routes>
          <Route path="/" element={<PowerNodePage />} />
          <Route path="/nodes" element={<PowerNodePage />} />
          <Route path="/node-types" element={<NodeTypesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;