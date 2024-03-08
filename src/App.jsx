import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainBody from './components/Main';


const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <Navbar onMenuToggle={toggleDrawer} />
      <Sidebar open={drawerOpen} onClose={toggleDrawer} />
      <MainBody sidebarOpen={drawerOpen} />
    </div>
  );
};

export default App;
