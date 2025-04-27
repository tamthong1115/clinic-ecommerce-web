import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BsList, BsXLg } from 'react-icons/bs';
import { navLink } from '../../constants/header/navLink';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import logo from '../../assets/logo.png';
import PublicPaths from '../../routes/public/pathPublic.ts';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.tsx';
import UserPaths from '../../routes/user/pathUser.ts';

const NavigatorBar = ({ widthDevice }: { widthDevice: number }) => {
  const [activeTab, setActiveTab] = useState(new Array(4).fill(false));
  const [currentTab, setCurrentTab] = useState(-1);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [widthOffset, setWidthOffset] = useState('0');
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  const handleEnter = (index: number) => {
    // Need to reformat this code
    setActiveTab((prev) => {
      const newContent = [...prev];
      if (currentTab < 0) {
        setCurrentTab(index);
        newContent[index] = !newContent[index];
      } else if (currentTab !== index) {
        setCurrentTab(index);
        newContent[currentTab] = !newContent[currentTab];
        newContent[index] = !newContent[index];
      } else {
        setCurrentTab(-1);
        newContent[index] = !newContent[index];
      }
      return newContent;
    });
  };

  const handleCloseMenu = () => {
    setIsShowMenu(false);
    setCurrentTab(-1);
    setActiveTab(Array.from(new Array(4).fill(false)));
  };

  const handleShowMenu = () => {
    setIsShowMenu(true);
  };

  const handleNavigate = (path: string) => {
    if (path) {
      setIsShowMenu(false);
      navigate(path);
    }
  };

  const handleLogout = () => {
    logout();
  };

  const getMotionMobileConfig = (isClosed: boolean, distance: string) => {
    return {
      initial: {
        left: isClosed ? distance : 0,
      },
      animate: {
        left: isClosed ? 0 : distance,
      },
      transition: {
        left: {
          duration: 0.5,
        },
      },
      exit: {
        left: isClosed ? distance : 0,
      },
    };
  };

  // useEffect(() => {
  //   console.log(isAuthenticated);
  // }, [isShowMenu]);

  useEffect(() => {
    if (widthDevice <= 640) {
      setWidthOffset('-350px');
    } else setWidthOffset('0');
  }, [widthDevice]);

  return (
    <div
      className={
        'w-full h-max sm:flex sm:flex-col sm:justify-center sm:items-center'
      }
    >
      <div
        className={`w-fit h-fit p-2 sm:bg-emerald-600 cursor-pointer sm:hidden`}
        onClick={handleShowMenu}
      >
        <BsList color={'white'} size={25} />
      </div>
      <MotionConfig>
        <AnimatePresence initial={false}>
          <motion.div
            {...getMotionMobileConfig(isShowMenu, widthOffset)}
            className=" bg-white top-0 max-w-[80%] sm:w-full h-max absolute sm:relative shadow-lg sm:shadow-none shadow-gray-500 text-black z-[10]"
          >
            <ul className=" w-full h-full flex flex-col sm:flex-row justify-between items-start sm:items-center">
              {/*This is for brand's banner*/}
              {widthOffset !== '0' ? (
                <li
                  className={
                    'w-full shadow-md shadow-gray-600 flex flex-row justify-between items-center z-[2]'
                  }
                >
                  <div
                    className={
                      'w-[80%] mr-5 flex flex-row justify-start items-center'
                    }
                  >
                    <img src={logo} alt={'logo'} className={'h-20'} />
                    <div className="w-full px-2 text-blue-800 font-bold">
                      4ChillyGuys
                    </div>
                  </div>
                  <div className={'w-[20%] ml-5 flex flex-row justify-center'}>
                    <button type={'button'} onClick={handleCloseMenu}>
                      <BsXLg />
                    </button>
                  </div>
                </li>
              ) : null}
              {/*This is for notify if guest does not sign-in/sign-up*/}
              {widthOffset !== '0' ? (
                isAuthenticated ? (
                  <li
                    className={
                      'w-full bg-gradient-to-tl from-emerald-600 to-emerald-400 p-2'
                    }
                  >
                    <div
                      className={
                        ' w-full text-left break-words text-white font-bold'
                      }
                    >
                      Xin chào, {user?.username}
                    </div>
                    <div className={'mt-2'}>
                      {/*Buttons for sign-in and sign-up*/}
                      <button
                        type={'button'}
                        className={
                          'w-fit p-1 rounded-full bg-white text-emerald-600 font-bold mr-3'
                        }
                        onClick={() => handleNavigate(UserPaths.SETTINGS)}
                      >
                        {user?.username}
                      </button>
                      <button
                        type={'button'}
                        className={
                          'w-fit px-2 py-1 rounded-full bg-emerald-700 text-white font-bold ml-3'
                        }
                        onClick={() => handleLogout()}
                      >
                        Đăng xuất
                      </button>
                    </div>
                  </li>
                ) : (
                  <li
                    className={
                      'w-full bg-gradient-to-tl from-emerald-600 to-emerald-400 p-2'
                    }
                  >
                    <div
                      className={
                        ' w-full text-left break-words text-white font-bold'
                      }
                    >
                      Đăng nhập để hưởng những đặc quyền dành riêng cho thành
                      viên
                    </div>
                    <div className={'mt-2'}>
                      {/*Buttons for sign-in and sign-up*/}
                      <button
                        type={'button'}
                        className={
                          'w-fit p-1 rounded-full bg-white text-emerald-600 font-bold mr-3'
                        }
                        onClick={() => handleNavigate(PublicPaths.LOGIN)}
                      >
                        Đăng nhập
                      </button>
                      <button
                        type={'button'}
                        className={
                          'w-fit px-2 py-1 rounded-full bg-emerald-600 text-white font-bold ml-3'
                        }
                        onClick={() => handleNavigate(PublicPaths.SIGN_UP)}
                      >
                        Đăng kí
                      </button>
                    </div>
                  </li>
                )
              ) : null}
              {navLink.map((item, index) => (
                <li
                  className={`w-full font-[500] flex flex-col justify-between items-center gap-2 text-md mb-3 sm:m-2 relative cursor-pointer`}
                  onClick={() => {
                    handleEnter(index);
                  }}
                  key={index}
                >
                  <div
                    className={`w-full p-2 flex flex-row items-center justify-between  ${activeTab[index] ? `text-emerald-600` : `text-black`}`}
                  >
                    {item.nameLink}
                    {activeTab[index] ? (
                      <div className={`text-[20px]`}>
                        <IoIosArrowUp />
                      </div>
                    ) : (
                      <div className="text-[20px]">
                        <IoIosArrowDown />
                      </div>
                    )}
                  </div>

                  {activeTab[index] ? (
                    <ul className="bg-[white] text-[black] w-full sm:absolute sm:top-10 shadow-md shadow-gray-500">
                      {Object.entries(item.item).map(
                        ([key, value], subIndex) => (
                          <li
                            className="cursor-pointer mb-[5px] p-3"
                            key={`${index}-${key}-${subIndex}`}
                            onClick={handleCloseMenu}
                          >
                            {value}
                          </li>
                        )
                      )}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </motion.div>

          {widthOffset !== '0' ? (
            <motion.div
              {...getMotionMobileConfig(isShowMenu, '-600vw')}
              className={
                'w-screen h-screen absolute top-0 left-0 bg-[#5d5d5d4d] z-[1] cursor-pointer'
              }
              onClick={handleCloseMenu}
            ></motion.div>
          ) : null}
        </AnimatePresence>
      </MotionConfig>
    </div>
  );
};
export default NavigatorBar;
