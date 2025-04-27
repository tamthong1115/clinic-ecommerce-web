import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import sidebarItems from './ClinicSideBarItem.tsx';
import SearchField from '../../components/SearchField/SearchField.tsx';

const DashboardNavbar: React.FC = () => {
  const location = useLocation();

  const currentItem = sidebarItems.find(
    (item) => item.path === location.pathname
  );
  const currentTitle = currentItem ? currentItem.title : 'Trang không tồn tại';

  return (
    <div className="w-auto flex justify-between mx-8 h-[6.4rem]">
      <div className="items-center flex p-4 rounded-2xl">
        <span className={'text-lg font-bold'}>{currentTitle}</span>
      </div>
      <div className="flex items-center justify-evenly w-auto h-auto">
        <SearchField />
        <Link to="/" className="mx-2">
          <img
            src="/icon/icon-setting-gray.png"
            alt="setting"
            className="w-5 h-5"
          />
        </Link>
        <Link to="/" className="flex mx-2 items-center justify-evenly">
          <img
            src="/icon/icon-bell-gray-2.png"
            alt="bell"
            className="w-5 h-5"
          />
        </Link>
        <Link to="/" className="flex mx-2 items-center justify-evenly">
          <div className="w-8 h-8 bg-gray-300 rounded-full" />
        </Link>
      </div>
    </div>
  );
};

export default DashboardNavbar;
