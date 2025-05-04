import React, { useState } from 'react';
import { Avatar, Menu, MenuItem } from '@mui/material';
import { RiUserLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.tsx';
import PublicPaths from '../../routes/public/pathPublic.ts';
import UserPaths from '../../routes/user/pathUser.ts';
import { linkHeader } from '../../constants/header/linkHeader.tsx';

const UserMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (path?: string) => {
    setAnchorEl(null);
    if (path) {
      navigate(path);
    }
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
  };

  if (!isAuthenticated) {
    return (
      <Link to={PublicPaths.LOGIN}>
        <div className="sm:flex items-center mr-5 bg-white rounded-full p-2 hidden">
          <div>
            <RiUserLine size={25} color={'#059669'} />
          </div>
          <div className="ml-[8px] hidden sm:block">{linkHeader.SIGN_IN}</div>
        </div>
      </Link>
    );
  }

  return (
    <div>
      <Avatar
        alt={user?.username || 'username'}
        src="/static/images/avatar/1.jpg"
        onClick={handleMenuOpen}
        className="cursor-pointer"
      />
      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={() => handleMenuClose()}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={() => handleMenuClose(UserPaths.PROFILE)}>
          Hồ sơ
        </MenuItem>
        <MenuItem>
          {isAuthenticated ? (
            <div
              className={
                'w-4 h-4 rounded-full bg-red-600 absolute top-1 right-3'
              }
            ></div>
          ) : null}
          <Link to={UserPaths.BOOKING_LIST}>Lịch hẹn</Link>
        </MenuItem>
        <MenuItem onClick={() => handleLogout()}>Đăng xuất</MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
