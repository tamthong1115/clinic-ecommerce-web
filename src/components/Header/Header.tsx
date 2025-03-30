import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { RiLoopRightFill } from 'react-icons/ri';
import { MdOutlinePhoneIphone, MdOutlinePhoneInTalk } from 'react-icons/md';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';
import logo from '../../assets/logo.jpg';
import PublicPaths from '../../routes/public/pathPublic';
import { linkHeader } from '../../constants/header/linkHeader';
import { navLink } from '../../constants/header/navLink';

const Header: React.FC = () => {
  const [tokenLogin, setTokenLogin] = useState(sessionStorage.getItem('token'));
  const [fullName, setFullName] = useState('');

  const [open, setOpen] = useState(false);
  const [nameNav, setNameNav] = useState('');

  const handleEnter = (nameLink: string) => {
    setNameNav(nameLink);
    setOpen(true);
  };

  // Fetch user info when tokenLogin changes
  useEffect(() => {
    const fetchData = async () => {
      if (tokenLogin) {
        try {
          const response = await axios.post('http://localhost:3000/auth/me', {
            token: tokenLogin,
          });
          setFullName(response.data.user.fullName);
        } catch (error) {
          console.error('Lỗi lấy thông tin user:', error);
          setFullName(''); // Reset tên nếu lỗi
        }
      } else {
        setFullName(''); // Reset khi không có token
      }
    };

    fetchData();
  }, [tokenLogin]);

  // Lắng nghe sự thay đổi của sessionStorage
  useEffect(() => {
    const handleAuthChange = () => {
      setTokenLogin(sessionStorage.getItem('token'));
    };

    window.addEventListener('authChanged', handleAuthChange);

    return () => {
      window.removeEventListener('authChanged', handleAuthChange);
      //window.dispatchEvent(new Event("authChanged"));
    };
  }, []);

  return (
    <header className="bg-gradient-to-r from-yellow-400 to-green-700 p-4 shadow-md h-[210px]">
      <div className="container mx-auto px-[160px]">
        {/* Top section */}
        <div className="mb-[10px] flex justify-between items-center">
          <div className="flex items-center text-[white] font-[500]">
            <MdOutlinePhoneInTalk className="mr-[9px] text-[20px]" />
            <Link to="/">Liên hệ ngay: 1800 1919.</Link>
          </div>
          <div className="flex items-center text-[white] font-[500]">
            <MdOutlinePhoneIphone className="mr-[9px] text-[20px]" />
            <Link to="/">Tải ứng dụng.</Link>
          </div>
        </div>

        {/* Middle section */}
        <div className="flex justify-between items-center mb-[20px]">
          {/* Logo */}
          <Link to={PublicPaths.HOME} className="w-[100px]">
            <img
              src={logo}
              alt="Logo"
              className="object-cover rounded-full p-[10px]"
            />
          </Link>

          {/* Search Bar */}
          <form className="flex flex-1 px-[20px] h-[52px] relative">
            <input
              type="text"
              placeholder="Tra cứu phòng khám....."
              className="w-full h-full px-[30px] py-[6px] rounded-full outline-none"
            />
            <CiSearch className="absolute top-1 right-6 text-[40px] opacity-40" />
          </form>

          {/* User Info & Booking */}
          <div className="flex items-center">
            {fullName ? (
              <Link
                to={'/profile'}
                className="flex items-center mr-[20px] text-[white] font-[700]"
              >
                <FaRegUser className="text-[24px]" />
                <span className="ml-[8px]">{fullName}</span>
              </Link>
            ) : (
              <Link
                to={PublicPaths.LOGIN}
                className="flex items-center mr-[20px] text-[white] font-[700]"
              >
                <FaRegUser className="text-[24px]" />
                <span className="ml-[8px]">{linkHeader.SIGN_IN}</span>
              </Link>
            )}

            <Link
              to={PublicPaths.BOOKING_CART}
              className="flex items-center text-[white] font-[700] bg-[#2db192] px-[20px] py-[10px] rounded-full"
            >
              <RiLoopRightFill className="text-[24px]" />
              <span className="ml-[8px]">{linkHeader.BOOKING_CART}</span>
            </Link>
          </div>
        </div>

        {/* Bottom Navigation */}
        <nav className="px-[200px]">
          <ul className="flex justify-between items-center">
            {navLink.map((item, index) => (
              <li
                key={index}
                className="text-[white] font-[500] flex items-center gap-2 text-[20px] mb-[20px] relative"
                onMouseEnter={() => handleEnter(item.nameLink)}
                onMouseLeave={() => setOpen(false)}
              >
                <Link to={item.routerLink}>{item.nameLink}</Link>
                {open && nameNav === item.nameLink ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
                {open && nameNav === item.nameLink && (
                  <ul className="absolute top-[30px] bg-[white] text-[black] w-[200px] z-50 rounded-[10px]">
                    {Object.values(item.item).map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="cursor-pointer mb-[5px] hover:bg-[#46b346] hover:text-[white] p-[10px] rounded-[10px]"
                      >
                        {subItem}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
