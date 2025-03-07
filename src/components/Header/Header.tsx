import React, { useState } from 'react';
import logo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';
import PublicPaths from '../../routes/public/pathPublic';
import { CiSearch } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa';
import { RiLoopRightFill } from 'react-icons/ri';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { linkHeader } from '../../constants/header/linkHeader';
import { navLink } from '../../constants/header/navLink';
import { MdOutlinePhoneIphone, MdOutlinePhoneInTalk } from 'react-icons/md';
const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [nameNav, setNameNav] = useState('');
  const handleEnter = (nameLink: string) => {
    setNameNav(nameLink);
    setOpen(true);
  };
  return (
    <header className="bg-gradient-to-r from-yellow-400 to-green-700 p-4 shadow-md h-[210px]">
      <div className="container mx-auto px-[160px]">
        <div className="pt-[]">
          <div className="mb-[10px] flex justify-between items-center">
            <div className="flex items-center text-[white] font-[500]">
              <div className="mr-[9px] text-[20px]">
                <MdOutlinePhoneInTalk />
              </div>
              <div className="">
                <Link to={'/'}>Liên hệ ngay: 1800 1919.</Link>
              </div>
            </div>

            <div className="flex items-center text-[white] font-[500]">
              <div className="mr-[9px] text-[20px]">
                <MdOutlinePhoneIphone />
              </div>
              <div className="">
                <Link to={'/'}>Tải ứng dụng.</Link>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mb-[20px]">
            <div className="w-[100px]">
              <Link to={PublicPaths.HOME}>
                <img
                  src={logo}
                  alt=""
                  className="object-cover aspect-square rounded-full truncate p-[10px]"
                />
              </Link>
            </div>
            <form className="flex flex-1 px-[20px] h-[52px] relative">
              <div className="w-full h-fulls flex relative">
                <input
                  type="text"
                  placeholder="Tra cứu phòng khám....."
                  className="w-full h-full px-[30px] py-[6px] rounded-full outline-none"
                />
                <div className="absolute top-1 right-4 text-[40px] opacity-40">
                  <CiSearch />
                </div>
              </div>
            </form>
            <div className="flex items-center">
              <Link to={PublicPaths.LOGIN}>
                <div className="flex items-center mr-[20px] text-[white] font-[700]">
                  <div className="text-[24px]">
                    <FaRegUser />
                  </div>
                  <div className="ml-[8px]">{linkHeader.SIGN_IN}</div>
                </div>
              </Link>
              <Link to={PublicPaths.BOOKING_CART}>
                <div className="flex items-center text-[white] font-[700] bg-[#2db192] px-[20px] py-[10px] rounded-full">
                  <div className="text-[24px]">
                    <RiLoopRightFill />
                  </div>
                  <div className="ml-[8px]">{linkHeader.BOOKING_CART}</div>
                </div>
              </Link>
            </div>
          </div>

          <div className="px-[200px]">
            <ul className="flex justify-between items-center">
              {navLink.map((item, index) => (
                <li
                  className="text-[white] font-[500] flex items-center gap-2 text-[20px] mb-[20px] relative"
                  onMouseEnter={() => handleEnter(item.nameLink)}
                  onMouseLeave={() => setOpen(false)}
                  key={index}
                >
                  <Link to={item.routerLink}>{item.nameLink}</Link>
                  {open === true && nameNav === item.nameLink ? (
                    <div className="text-[20px]">
                      <IoIosArrowUp />
                    </div>
                  ) : (
                    <div className="text-[20px]">
                      <IoIosArrowDown />
                    </div>
                  )}

                  {open === true && nameNav === item.nameLink ? (
                    <ul className=" absolute top-[30px] bg-[white] text-[black] w-[200px] z-50 rounded-[10px]">
                      <li
                        className=" cursor-pointer mb-[5px] hover:bg-[#46b346] hover:text-[white] p-[10px] rounded-[10px]"
                        key={index}
                      >
                        {item.item.item1}
                      </li>
                      <li
                        className=" cursor-pointer mb-[5px] hover:bg-[#46b346] hover:text-[white] p-[10px] rounded-[10px]"
                        key={index}
                      >
                        {item.item.item2}
                      </li>
                      <li
                        className=" cursor-pointer mb-[5px] hover:bg-[#46b346] hover:text-[white] p-[10px] rounded-[10px]"
                        key={index}
                      >
                        {item.item.item3}
                      </li>
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
