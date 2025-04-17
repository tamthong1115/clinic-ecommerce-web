import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import sidebarItems from './ClinicSideBarItem.tsx';

const DashboardSidebar: React.FC = () => {
  const location = useLocation();

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
            {sidebarItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={index} className=" w-2/3 text-lg">
                  <Link
                    to={item.path}
                    className={`flex items-center rounded-xl p-2 transition ${
                      isActive ? 'bg-white text-black' : 'text-gray-500'
                    }`}
                  >
                    <img
                      src={isActive ? item.iconActive : item.iconInactive}
                      className={`rounded-full p-2 w-12 h-12 ${isActive ? 'scale-125 transition duration-1000 ease-in-out' : 'scale-100'}`}
                      alt=""
                    />
                    <span className="text-sm font-bold">{item.title}</span>
                  </Link>
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
