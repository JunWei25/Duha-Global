import React, { useState } from 'react';
import Layout from './pages/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Layout collapsed={collapsed} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
