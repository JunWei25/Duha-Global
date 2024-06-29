import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import Home from './home/Home';
import Header from '../components/Header';

interface LayoutProps {
  collapsed: boolean;
}

const Layout: React.FC<LayoutProps> = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex min-h-screen">
      <SideBar collapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
      <main className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'pl-20' : 'pl-80'}`}>
        <Header />
        <div className="p-3">
          <Home></Home>
        </div>
      </main>
    </div>
  );
};

export default Layout;
