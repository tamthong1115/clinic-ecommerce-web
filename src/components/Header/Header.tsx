import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import PublicPaths from '../../routes/public/pathPublic';
import { RiCalendarScheduleLine } from 'react-icons/ri';
import { BsBagPlus, BsSearch } from 'react-icons/bs';
import SearchingField from './SearchingField.tsx';
import { MdOutlinePhoneInTalk, MdOutlinePhoneIphone } from 'react-icons/md';
import { linkHeader } from '../../constants/header/linkHeader.tsx';
import NavigatorBar from './NavigatorBar.tsx';
import UserMenu from '../UserMenu/UserMenu.tsx';
import UserPaths from '../../routes/user/pathUser.ts';

const Header: React.FC = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [winSize, setWinSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setWinSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (winSize.width <= 500) {
      setIsMobile(true);
    } else setIsMobile(false);
  }, [winSize]);

  return (
    <header className="h-max w-screen relative">
      <div className="w-full sm:pt-4 bg-[#1695a0]">
        <div className="w-full flex flex-col justify-center items-center">
          {/*fore header*/}
          <div className="w-full sm:px-4 mb-4 hidden sm:flex justify-between items-center ">
            <div className="flex items-center text-[white] font-[500]">
              <div className="mr-[9px]">
                <MdOutlinePhoneInTalk />
              </div>
              <div className=" text-lg font-bold">
                <Link to={'/'}>Liên hệ ngay: 1800 3508</Link>
              </div>
            </div>

            <div className="flex items-center text-[white] font-[500]">
              <div className="mr-[9px]">
                <MdOutlinePhoneIphone />
              </div>
              <div className=" text-lg font-bold">
                <Link to={'/'}>Tải ứng dụng</Link>
              </div>
            </div>
          </div>
          {/*main header here*/}
          {/*Containing menu + logo + name + calendar on the top*/}
          {/*Containing searching bar on the bottom*/}
          <div className="w-full flex flex-col justify-around items-center">
            <div
              className={
                'relative w-[90%] flex flex-row justify-between items-center'
              }
            >
              {/*With smartphone version (or small screen) we use minimize menu*/}
              <div
                className={
                  'w-fit flex flex-col justify-start items-center sm:hidden'
                }
              >
                <NavigatorBar widthDevice={winSize.width} />
              </div>
              {/*Logo here*/}
              <div className="w-fit mr-2 flex flex-row justify-start items-center">
                <div className="w-20 mr-2">
                  <Link to={PublicPaths.HOME}>
                    <img src={logo} alt="" className="rounded-md" />
                  </Link>
                </div>
                <div className={'text-xl font-bold text-white'}>
                  4ChillyGuys
                </div>
              </div>
              {/*Quick access buttons here*/}
              <div className="w-fit flex flex-row justify-around items-center px-3">
                <div className="flex items-center">
                  <Link
                    to={UserPaths.BOOKING_EVENT}
                    className={'relative hidden sm:block'}
                  >
                    <div className="flex items-center mr-5 bg-white rounded-full p-2">
                      <div>
                        <RiCalendarScheduleLine size={25} color={'#059669'} />
                      </div>
                      <div className="ml-[8px] hidden sm:block">
                        {linkHeader.BOOKING_EVENT}
                      </div>
                    </div>
                  </Link>
                  <Link to={UserPaths.PRODUCT_CART} className={' relative'}>
                    <div className="flex items-center mr-5 bg-white rounded-full p-2">
                      <div>
                        <BsBagPlus size={25} color={'#059669'} />
                      </div>
                      <div className="ml-[8px] hidden sm:block">
                        {linkHeader.PRODUCT_CART}
                      </div>
                    </div>
                  </Link>
                  <UserMenu />
                </div>
              </div>
            </div>
            {/*Searching field here*/}
            {/*We are desiring from longchau's website*/}
            <div
              className={'w-[70%] bg-white rounded-full mb-2'}
              onClick={() => setIsSearching(true)}
            >
              <form
                className={' w-full flex flex-row justify-between items-center'}
              >
                <fieldset className={'w-[95%]'}>
                  <input
                    type={'text'}
                    placeholder={'Tìm kiếm tại đây...'}
                    className={
                      'w-full p-2 rounded-full outline-emerald-600 outline-1'
                    }
                  />
                </fieldset>
                <div className={'w-[5%] flex justify-center items-center'}>
                  <button type={'submit'} className={'rounded-full p-3'}>
                    <BsSearch />
                  </button>
                </div>
              </form>
            </div>
            {/*With tablet or PC version (or larger screen) we use visible menu*/}
            <div
              className={
                'w-full flex flex-col justify-center items-center max-sm:hidden bg-white shadow-md shadow-gray-500'
              }
            >
              <NavigatorBar widthDevice={winSize.width} />
            </div>
          </div>
        </div>
      </div>

      {/*Searching zone here*/}
      {/*With phone's screen, we will use full-screen searching*/}
      {/*But with a larger screen, like tablet or computer, we need a dialog box (like this)*/}
      {isSearching && isMobile ? (
        <SearchingField setIsSearching={setIsSearching} />
      ) : null}
    </header>
  );
};

export default Header;
