import React, { useState } from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainBody from './components/Main';
import ProductDetail from './components/ProductDetails'; // Import your ProductDetail component

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar onMenuToggle={toggleDrawer} />
        <Sidebar open={drawerOpen} onClose={toggleDrawer} />
        <Routes>
          <Route exact path="/" element={<MainBody sidebarOpen={drawerOpen} />} />
          <Route path="/product/:productId" element={<ProductDetail />} /> {/* Add this route */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
