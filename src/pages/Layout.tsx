import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Home from "./home/Home";
import Header from "../components/Header";

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
      <div className="z-50 bg-white">
      <SideBar collapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
      </div>
      <main
        className={`flex-1 transition-all duration-300 ${
          sidebarCollapsed ? "pl-20" : "pl-80"
        }`}
      >
        <div className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md">
          <Header />
        </div>
        <div className="mt-16 p-3">
          <Home />
        </div>
      </main>
    </div>
  );
};

export default Layout;
