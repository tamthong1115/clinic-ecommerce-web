import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import sidebarItems from './DashboardSideBarItem.tsx';
import SearchField from '../../components/SearchField/SearchField.tsx';
import UserMenu from '../../components/UserMenu/UserMenu.tsx';

const DashboardNavbar: React.FC = () => {
  const location = useLocation();

  const currentItem = location.pathname;
  let currentTitle = 'Trang không tồn tại';

  sidebarItems.forEach((item) => {
    const match =
      item.path === currentItem
        ? item
        : item.submenu?.find((sub) => sub.path === currentItem);

    if (match) {
      currentTitle = item.submenu?.includes(match)
        ? `${item.title} - ${match.title}`
        : match.title;
    }
  });

  return (
    <div className="w-auto flex justify-between mx-8 h-[6.4rem]">
      <div className="text-left flex py-4 rounded-2xl flex-col mt-2">
        <span className={'text-lg font-bold'}>Pages</span>
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
        <UserMenu />
      </div>
    </div>
  );
};

export default DashboardNavbar;
