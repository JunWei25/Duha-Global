import React from "react";
import {
  LayoutDashboard,
  Files,
  ShoppingCart,
  Settings,
  KeyRound,
  ChevronLeft,
  Menu,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import UserItem from "./userItem/UserItem";

interface SideBarProps {
  collapsed: boolean;
  toggleSidebar: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ collapsed, toggleSidebar }) => {
  const location = useLocation();

  const menuList = [
    {
      group: "General",
      items: [
        { link: "/", icon: <LayoutDashboard />, text: "Home" },
        { link: "/orders", icon: <ShoppingCart />, text: "Orders" },
        { link: "/reports", icon: <Files />, text: "Reports" },
      ],
    },
    {
      group: "Settings",
      items: [
        { link: "/settings", icon: <Settings />, text: "General Settings" },
        {
          link: "/change-password",
          icon: <KeyRound />,
          text: "Change Password",
        },
      ],
    },
  ];

  return (
    <div
      className={`fixed flex flex-col gap-4 border-r min-h-screen p-3 ${
        collapsed ? "w-20" : "w-80"
      }`}
    >
      <div
        className={`flex items-center ${
          collapsed ? "justify-center" : "justify-between"
        }`}
      >
        {!collapsed && (
          <div className="pl-2 font-bold text-xl">Duha Global</div>
        )}
        <button onClick={toggleSidebar} className="p-2">
          {collapsed ? <Menu /> : <ChevronLeft />}
        </button>
      </div>
      <div className="flex-1 overflow-auto mt-2">
        {menuList.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-5">
            <div
              className={`pl-2 text-[0.8rem] text-gray-600 font-semibold mb-1 ${
                collapsed ? "hidden" : ""
              }`}
            >
              {group.group}
            </div>
            {group.items.map((item, itemIndex) => (
              <NavLink
                key={itemIndex}
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center gap-2 block px-2 py-2 rounded hover:bg-gray-100 text-[0.9rem] ${
                    collapsed ? "justify-center" : ""
                  } ${isActive ? "bg-blue-100" : ""}`
                }
                title={item.text}
              >
                <div
                  className={`flex-shrink-0 ${
                    collapsed ? "flex justify-center w-full" : ""
                  } ${
                    location.pathname === item.link
                      ? "bg-blue-500 text-white p-2 rounded"
                      : ""
                  }`}
                >
                  {item.icon}
                </div>
                {!collapsed && <span>{item.text}</span>}
              </NavLink>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-auto">
        <UserItem collapsed={collapsed} />
      </div>
    </div>
  );
};

export default SideBar;
