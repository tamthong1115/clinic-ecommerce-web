import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import sidebarItems from './DashboardSideBarItem.tsx';
import { useAuth } from '../../context/AuthContext.tsx';

const DashboardSidebar: React.FC = () => {
  const location = useLocation();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const { hasRole } = useAuth();

  const toggleSubmenu = (path: string) => {
    setOpenSubmenu(openSubmenu === path ? null : path);
  };

  const filteredSidebarItems = sidebarItems.filter(
    (item) =>
      !item.requiredRoles || item.requiredRoles.some((role) => hasRole(role))
  );

  return (
    <div className="flex">
      <aside className="h-screen w-full p-4">
        <div className="flex items-center flex-wrap justify-center py-3">
          <div className="flex items-center justify-center">
            <img src="/logo.png" className="w-16 h-16" alt="logo" />
          </div>
          <span className="text-sm text-black font-bold">
            4 Brand Chill Guys
          </span>
        </div>
        <hr className="w-2/3 mx-auto block" />
        <nav>
          <ul className="my-1 flex flex-col items-center w-full">
            {filteredSidebarItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              const hasSubmenu = item.submenu && item.submenu.length > 0;
              const filteredSubmenu = item.submenu?.filter(
                (subItem) =>
                  !subItem.requiredRoles ||
                  subItem.requiredRoles.some((role) => hasRole(role))
              );

              return (
                <li key={index} className="w-2/3 text-lg">
                  <div className="flex items-center justify-between w-full">
                    <Link
                      to={item.path}
                      className={`flex items-center rounded-xl p-2 transition ${
                        isActive ? 'bg-white text-black' : 'text-gray-500'
                      }`}
                    >
                      <img
                        src={isActive ? item.iconActive : item.iconInactive}
                        className={`rounded-full p-2 w-12 h-12 ${
                          isActive
                            ? 'scale-125 transition duration-1000 ease-in-out'
                            : 'scale-100'
                        }`}
                        alt=""
                      />
                      <span className="text-sm font-bold">{item.title}</span>
                    </Link>
                    {hasSubmenu &&
                      filteredSubmenu &&
                      filteredSubmenu.length > 0 && (
                        <button
                          onClick={() => toggleSubmenu(item.path)}
                          className="ml-2 text-gray-500 hover:text-black"
                        >
                          {openSubmenu === item.path ? '▲' : '▼'}
                        </button>
                      )}
                  </div>
                  {hasSubmenu &&
                    openSubmenu === item.path &&
                    filteredSubmenu &&
                    filteredSubmenu.length > 0 && (
                      <ul className="ml-6 mt-2">
                        {filteredSubmenu?.map((subItem, subIndex) => {
                          const isSubActive =
                            location.pathname === subItem.path;
                          return (
                            <li key={subIndex} className="text-base">
                              <Link
                                to={subItem.path}
                                className={`flex items-center rounded-lg p-2 transition ${
                                  isSubActive
                                    ? 'bg-gray-200 text-black'
                                    : 'text-gray-500'
                                }`}
                              >
                                <img
                                  src={
                                    isSubActive
                                      ? subItem.iconActive
                                      : subItem.iconInactive
                                  }
                                  className="w-8 h-8 mr-2"
                                  alt=""
                                />
                                <span>{subItem.title}</span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default DashboardSidebar;
