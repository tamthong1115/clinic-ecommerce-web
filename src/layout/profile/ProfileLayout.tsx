import React, { useEffect, useState } from 'react';
import './ProfileLayout.css';
import * as Bs from 'react-icons/bs';
import { motion, MotionConfig } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProfileLayout: React.FC<{
  children: React.ReactElement | null;
  current: number;
}> = ({ children, current }) => {
  const [activeTab, setActiveTab] = useState(
    Array.from({ length: 6 }, (_, i) => i === 0)
  );
  const [currentTab, setCurrentTab] = useState(current);
  const [isMinimized, setIsMinimized] = useState(false);
  const handleActiveTab = (index: number) => {
    setActiveTab((prevState) => {
      const newContent = [...prevState];
      if (currentTab !== index) {
        setCurrentTab(index);
        newContent[currentTab] = !newContent[currentTab];
        newContent[index] = !newContent[index];
      }
      return newContent;
    });
  };

  const handleActiveMenu = () => {
    setIsMinimized(!isMinimized);
  };

  //configuration for motion
  const getMotionConfig = (isClosed: boolean) => {
    return {
      initial: {
        width: isClosed ? 0 : 'max-content',
        height: isClosed ? 0 : 'max-content',
        opacity: isClosed ? 0 : 1,
        fontSize: isClosed ? '0' : '16px',
      },
      animate: {
        width: isClosed ? 'max-content' : 0,
        height: isClosed ? 'max-content' : 0,
        opacity: isClosed ? 1 : 0,
        fontSize: isClosed ? '16px' : '0',
      },
      transition: {
        width: { duration: 0.3, delay: isClosed ? 0.2 : 0 },
        height: { duration: 0.3, delay: isClosed ? 0.2 : 0 },
        opacity: { duration: 0.3, delay: isClosed ? 0.5 : 0 },
        fontSize: { duration: 0.3, delay: isClosed ? 0.5 : 0 },
      },
      exit: {
        width: isClosed ? 0 : 'max-content',
        height: isClosed ? 0 : 'max-content',
        opacity: isClosed ? 0 : 1,
        fontSize: isClosed ? '0' : '16px',
        overflow: 'hidden',
      },
    };
  };

  useEffect(() => {
    handleActiveTab(current);
    setIsMinimized(true);
  }, [currentTab]);

  return (
    <div className={'w-full min-h-screen my-5 relative'}>
      {/*Build menu bar first*/}
      <div className={'w-fit h-fit absolute left-0 top-0'}>
        {/*Minimize button here*/}
        <div
          className={
            'w-fit h-fit absolute -top-5 -right-5 bg-white p-2 rounded-xl shadow-gray-500 shadow-md z-10'
          }
          onClick={handleActiveMenu}
        >
          {isMinimized ? (
            <Bs.BsCaretLeftFill color={'#059669'} size={20} />
          ) : (
            <Bs.BsCaretRightFill color={'#059669'} size={20} />
          )}
        </div>
        {/*Menu here*/}
        <MotionConfig>
          <motion.ul
            id={'navigator'}
            {...getMotionConfig(isMinimized)}
            className={`bg-emerald-600 text-white font-bold ${isMinimized ? `rounded-r-xl` : `rounded-4xl`} py-4`}
          >
            <li onClick={() => handleActiveTab(0)}>
              <div
                className={`relative text-center bg-emerald-600 flex flex-col justify-center items-center`}
              >
                <div
                  className={`absolute left-0 h-5 w-5 bg-emerald-600 clip-triangle`}
                ></div>
                <div
                  className={`p-3 flex-1 w-full h-full font-bold text-center ${activeTab[0] ? `bg-white text-black` : `bg-emerald-600 text-white`}`}
                >
                  Tài khoản
                </div>
              </div>
            </li>
            <li onClick={() => handleActiveTab(1)}>
              <div
                className={`relative text-center bg-emerald-600 flex flex-col justify-center items-center`}
              >
                <div
                  className={`absolute left-0 h-5 w-5 bg-emerald-600 clip-triangle`}
                ></div>
                <div
                  className={`p-3 flex-1 w-full h-full font-bold text-center ${activeTab[1] ? `bg-white text-black` : `bg-emerald-600 text-white`}`}
                >
                  Bệnh án
                </div>
              </div>
            </li>
            <li onClick={() => handleActiveTab(2)}>
              <div
                className={`relative text-center bg-emerald-600 flex flex-col justify-center items-center`}
              >
                <div
                  className={`absolute left-0 h-5 w-5 bg-emerald-600 clip-triangle`}
                ></div>
                <div
                  className={`p-3 flex-1 w-full h-full font-bold text-center ${activeTab[2] ? `bg-white text-black` : `bg-emerald-600 text-white`}`}
                >
                  <Link to={'/calendar-booking'}>Lịch hẹn</Link>
                </div>
              </div>
            </li>
            <li onClick={() => handleActiveTab(3)}>
              <div
                className={`relative text-center bg-emerald-600 flex flex-col justify-center items-center`}
              >
                <div
                  className={`absolute left-0 h-5 w-5 bg-emerald-600 clip-triangle`}
                ></div>
                <div
                  className={`p-3 flex-1 w-full h-full font-bold text-center ${activeTab[3] ? `bg-white text-black` : `bg-emerald-600 text-white`}`}
                >
                  Trao đổi
                </div>
              </div>
            </li>
            <li onClick={() => handleActiveTab(4)}>
              <div
                className={`relative text-center bg-emerald-600 flex flex-col justify-center items-center`}
              >
                <div
                  className={`absolute left-0 h-5 w-5 bg-emerald-600 clip-triangle`}
                ></div>
                <div
                  className={`p-3 flex-1 w-full h-full font-bold text-center ${activeTab[4] ? `bg-white text-black` : `bg-emerald-600 text-white`}`}
                >
                  Hỗ trợ
                </div>
              </div>
            </li>
            <li onClick={() => handleActiveTab(5)}>
              <div
                className={`relative text-center bg-emerald-600 flex flex-col justify-center items-center`}
              >
                <div
                  className={`absolute left-0 h-5 w-5 bg-emerald-600 clip-triangle`}
                ></div>
                <div
                  className={`p-3 flex-1 w-full h-full font-bold text-center ${activeTab[5] ? `bg-white text-black` : `bg-emerald-600 text-white`}`}
                >
                  Đăng xuất
                </div>
              </div>
            </li>
          </motion.ul>
        </MotionConfig>
      </div>
      <div className={'w-full h-fit '}>{children}</div>
    </div>
  );
};
export default ProfileLayout;
