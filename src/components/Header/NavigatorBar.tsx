import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { navLink } from '../../constants/header/navLink';
import { useEffect, useState } from 'react';
import { BsList } from 'react-icons/bs';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';

const NavigatorBar = () => {
  const [activeTab, setActiveTab] = useState(new Array(4).fill(false));
  const [currentTab, setCurrentTab] = useState(-1);
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleEnter = (index: number) => {
    // Need to reformat this code
    setActiveTab((prev) => {
      const newContent = [...prev];
      if (currentTab === -1) {
        setCurrentTab(index);
        newContent[index] = !newContent[index];
      } else if (currentTab !== index) {
        setCurrentTab(index);
        newContent[currentTab] = !newContent[currentTab];
        newContent[index] = !newContent[index];
      } else {
        newContent[index] = !newContent[index];
      }
      return newContent;
    });
  };

  const handleCloseMenu = () => {
    console.log('close');
    setIsShowMenu(false);
    setCurrentTab(-1);
    setActiveTab(Array.from(new Array(4).fill(false)));
  };

  const handleShowMenu = () => {
    setIsShowMenu(true);
  };

  const getMotionConfig = (isClosed: boolean, distance: string) => {
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

  useEffect(() => {
    console.log(isShowMenu);
  }, [isShowMenu]);
  return (
    <div className={'w-full h-max relative'}>
      <div
        className={`w-fit h-fit p-2 bg-emerald-600 cursor-pointer ${isShowMenu ? `hidden` : `block`}`}
        onClick={handleShowMenu}
      >
        <BsList color={'white'} size={25} />
      </div>
      <MotionConfig>
        <AnimatePresence initial={false}>
          <motion.div
            {...getMotionConfig(isShowMenu, '-200px')}
            className=" bg-white top-0 w-fit h-max absolute shadow-lg shadow-gray-500 text-black z-[10]"
          >
            <ul className=" w-full h-full flex flex-col justify-between items-start">
              {navLink.map((item, index) => (
                <li
                  className={`w-full font-[500] flex flex-col justify-between items-center gap-2 text-md mb-3 relative cursor-pointer`}
                  onClick={() => {
                    handleEnter(index);
                  }}
                  key={index}
                >
                  <div
                    className={`w-full p-2 flex flex-row items-center justify-between  ${activeTab[index] ? `bg-emerald-600 text-white` : `bg-white text-black`}`}
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
                    <ul className="bg-[white] text-[black] w-fit ml-5">
                      {Object.entries(item.item).map(([key, value]) => (
                        <li
                          className="cursor-pointer mb-[5px] p-3"
                          key={key}
                          onClick={handleCloseMenu}
                        >
                          {value}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...getMotionConfig(isShowMenu, '-100vw')}
            className={
              'w-screen h-screen absolute top-0 left-0 bg-[#5d5d5d4d] z-[1] cursor-pointer'
            }
            onClick={handleCloseMenu}
          ></motion.div>
        </AnimatePresence>
      </MotionConfig>
    </div>
  );
};
export default NavigatorBar;
