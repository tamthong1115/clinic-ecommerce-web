import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import PublicPaths from '../../routes/public/pathPublic';
import {
  RiCalendarScheduleLine,
  RiSearchLine,
  RiUserLine,
} from 'react-icons/ri';
import SearchingField from './SearchingField.tsx';
import { MdOutlinePhoneInTalk, MdOutlinePhoneIphone } from 'react-icons/md';
import { linkHeader } from '../../constants/header/linkHeader.tsx';
import NavigatorBar from './NavigatorBar.tsx';

const Header: React.FC = () => {
  const [isSearching, setIsSearching] = useState(false);
  const openSearchField = () => {
    setIsSearching(true);
  };

  return (
    <header className="h-max w-screen relative">
      <div className="w-full bg-gradient-to-r from-yellow-400 to-green-700 py-2 px-1 shadow-md ">
        <div className=" flex flex-col justify-center items-center">
          {/*fore header*/}
          <div className="w-full sm:w-[95%] mb-4 hidden sm:flex justify-between items-center ">
            <div className="flex items-center text-[white] font-[500]">
              <div className="mr-[9px]">
                <MdOutlinePhoneInTalk />
              </div>
              <div className=" text-lg font-bold">
                <Link to={'/'}>Liên hệ ngay: 1800 1919.</Link>
              </div>
            </div>

            <div className="flex items-center text-[white] font-[500]">
              <div className="mr-[9px]">
                <MdOutlinePhoneIphone />
              </div>
              <div className=" text-lg font-bold">
                <Link to={'/'}>Tải ứng dụng.</Link>
              </div>
            </div>
          </div>
          {/*main header:searching*/}
          <div className="w-full sm:w-[95%] flex flex-row justify-between items-center">
            <div className="w-[55%] flex flex-row justify-start items-center">
              <div className="w-20 mr-2">
                <Link to={PublicPaths.HOME}>
                  <img src={logo} alt="" className="rounded-md" />
                </Link>
              </div>
              <div className={'text-xl font-bold text-white'}>4ChillyGuys</div>
            </div>
            <div className="w-[40%] sm:w-[30%] flex flex-row justify-around items-center">
              {/*searching zone*/}
              <div
                className={'mr-5 font-bold'}
                onClick={() => {
                  openSearchField();
                }}
              >
                <RiSearchLine color={'white'} size={25} />
              </div>
              <div className="flex items-center">
                <Link to={PublicPaths.BOOKING_CART}>
                  <div className="flex items-center mr-5 bg-white rounded-full p-2">
                    <div>
                      <RiCalendarScheduleLine size={25} color={'#059669'} />
                    </div>
                    <div className="ml-[8px] hidden sm:block">
                      {linkHeader.BOOKING_CART}
                    </div>
                  </div>
                </Link>
                <Link to={PublicPaths.LOGIN}>
                  <div className="flex items-center mr-5 bg-white rounded-full p-2">
                    <div>
                      <RiUserLine size={25} color={'#059669'} />
                    </div>
                    <div className="ml-[8px] hidden sm:block">
                      {linkHeader.SIGN_IN}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Searching zone here*/}
      {/*With phone's screen, we will use full screen searching*/}
      {/*But, with larger screen, like tablet or computer, we need a dialog box (like this)*/}
      {isSearching ? <SearchingField setIsSearching={setIsSearching} /> : null}

      {/*About menu navigator bar Because we use this version for all screen size*/}
      {/*(from PC to smartphone) so we will use [dot menu] - which is smaller and*/}
      {/*easy to show*/}
      <div className={'relative'}>
        <NavigatorBar />
      </div>
    </header>
  );
};

export default Header;
