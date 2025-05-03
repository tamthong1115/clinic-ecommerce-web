import React, { useEffect, useState } from 'react';
import { AdsApp } from './AdsApp.tsx';
import * as BsIcon from 'react-icons/bs';
import { Link } from 'react-router-dom';
import dmca from '../../assets/img/dmca.png';
import ccdv from '../../assets/img/logoCCDV.png';
import ncsc from '../../assets/img/ncsc.png';
import * as Svg from '../../assets/svg/SvgLib.tsx';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';

const Footer: React.FC = () => {
  const [hideContent, setHideContent] = useState(new Array(6).fill(true));
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const limitDesktop = 1024;

  const showContent = (key: number) => {
    if (windowWidth <= limitDesktop) {
      setHideContent((prev) => {
        const newContent = [...prev];
        newContent[key] = !newContent[key];
        return newContent;
      });
    }
  };

  const getMotionConfig = (isHidden: boolean) => ({
    initial: {
      height: !isHidden ? 0 : 'max-content',
      opacity: !isHidden ? 0 : 1,
    },
    animate: {
      height: !isHidden ? 'max-content' : 0,
      opacity: !isHidden ? 1 : 0,
    },
    transition: {
      height: { duration: 0.5 },
      opacity: { duration: 0.5 },
    },
    exit: {
      height: !isHidden ? 0 : 'max-content',
      opacity: !isHidden ? 0 : 1,
    },
  });

  // update windowWidth when it changes
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setHideContent(new Array(6).fill(windowWidth <= limitDesktop));
  }, [windowWidth]);

  return (
    <div className="flex flex-col w-full justify-center items-center bg-white text-black mt-40">
      <AdsApp />
      <div
        className={
          'w-1/3 sm:max-lg:w-1/4 h-0.5 sm:max-lg:h-1.5 lg:h-2 bg-emerald-600 rounded-full'
        }
      ></div>
      {/*those are contents of footer*/}
      <div className="w-full lg:max-xl:w-11/12 xl:grid xl:grid-cols-5 xl:justify-items-center lg:gap-0 xl:gap-9 flex flex-col justify-start p-2.5">
        <div className="text-left ms:max-lg:w-full">
          <div
            className={
              'font-bold w-full border xl:border-0 p-2 xl:p-0 cursor-pointer xl:cursor-text'
            }
            onClick={() => showContent(0)}
          >
            Công ty Cổ phần Công nghệ 4ChillyGuys
            <MotionConfig>
              <AnimatePresence initial={false}>
                {!hideContent[0] ? (
                  <motion.ul
                    {...getMotionConfig(hideContent[0])}
                    className={'list-none lg:max-xl:p-2 m-0 text-emerald-600'}
                  >
                    <li className="flex flex-row ml-2 items-center leading-8 text-gray-800">
                      <BsIcon.BsGeoAlt className={'mx-1'} /> chilli powder
                    </li>
                    <li className="flex flex-row ml-2 items-center leading-8  text-gray-800">
                      <BsIcon.BsBookmark className={'mx-1'} />
                      01234567890
                    </li>
                    <li className="flex flex-row ml-2 items-center leading-8  text-gray-800">
                      <BsIcon.BsTelephone className={'mx-1'} /> 0365848597
                    </li>
                    <li className="flex flex-row ml-2 items-center leading-8  text-gray-800">
                      <BsIcon.BsEnvelopeAt className={'mx-1'} />{' '}
                      fucking@fmail.cnd
                    </li>
                    <li>
                      <h4 className={' leading-8 font-bold'}>
                        Văn phòng tại TP. Hồ Chí Minh
                      </h4>
                      <div className="flex flex-row ml-2 items-center leading-8  text-gray-800">
                        <BsIcon.BsGeoAlt className={'mx-1'} /> chilli powder
                      </div>
                    </li>
                    <li>
                      <h4 className={' leading-8 font-bold'}>
                        Văn phòng tại TP. Hà Nội
                      </h4>
                      <div className="flex flex-row ml-2 items-center leading-8  text-gray-800">
                        <BsIcon.BsGeoAlt className={'mx-1'} /> chilli powder
                      </div>
                    </li>
                  </motion.ul>
                ) : null}
              </AnimatePresence>
            </MotionConfig>
          </div>
        </div>
        <div className="text-left ms:max-lg:w-full">
          <div
            className={
              'font-bold w-full h-full xl:h-fit border xl:border-0 p-2 xl:p-0 cursor-pointer xl:cursor-text'
            }
            onClick={() => showContent(1)}
          >
            Về chúng tôi
          </div>
          <MotionConfig>
            <AnimatePresence initial={false}>
              {!hideContent[1] ? (
                <motion.ul
                  {...getMotionConfig(hideContent[1])}
                  className={'list-none lg:max-xl:p-2 m-0 text-cyan-600'}
                >
                  <li className={'leading-8'}>
                    <Link to={''}>Liên hệ hợp tác</Link>
                  </li>
                  <li className={'leading-8'}>
                    <Link to={''}>Chuyển đổi số</Link>
                  </li>
                  <li className={'leading-8'}>
                    <Link to={''}>Chính sách bảo mật</Link>
                  </li>
                  <li className={'leading-8'}>
                    <Link to={''}>Quy chế hoạt động</Link>
                  </li>
                  <li className={'leading-8'}>
                    <Link to={''}>Tuyển dụng</Link>
                  </li>
                  <li className={'leading-8'}>
                    <Link to={''}>Điều khoản sử dụng</Link>
                  </li>
                  <li className={'leading-8'}>
                    <Link to={''}>Câu hỏi thường gặp</Link>
                  </li>
                  <li className={'leading-8'}>
                    <Link to={''}>Sức khỏe doanh nghiệp</Link>
                  </li>
                </motion.ul>
              ) : null}
            </AnimatePresence>
          </MotionConfig>
        </div>
        <div className="text-left md:max-lg:w-full">
          <div
            className={
              'font-bold w-full border xl:border-0 p-2 xl:p-0 cursor-pointer xl:cursor-text'
            }
            onClick={() => showContent(2)}
          >
            Đối tác bảo trợ nội dung
          </div>
          <MotionConfig>
            <AnimatePresence initial={false}>
              {!hideContent[2] ? (
                <motion.ul
                  {...getMotionConfig(hideContent[2])}
                  className={'list-none lg:max-xl:p-2 m-0 '}
                >
                  <li className={'mt-1'}>
                    <Link
                      to={''}
                      className="flex flex-row ml-2 items-center text-gray-800"
                    >
                      <BsIcon.BsFilePerson size={20} className={'mx-1'} />
                      <div className={'ml-2.5'}>
                        <div className={'font-bold leading-none'}>
                          Hello Doctor
                        </div>
                        <div>
                          Bảo trợ chuyên mục nội dung &#34;sức khỏe tinh
                          thần&#34;
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className={'mt-1'}>
                    <Link
                      to={''}
                      className="flex flex-row ml-2 items-center text-gray-800"
                    >
                      <BsIcon.BsFilePerson size={20} className={'mx-1'} />
                      <div className={'ml-2.5'}>
                        <div className={'font-bold leading-none'}>
                          Hệ thống y khoa chuyên sâu Quốc tế Bernard
                        </div>
                        <div>
                          Bảo trợ chuyên mục nội dung &#34;y khoa chuyên
                          sâu&#34;
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className={'mt-1'}>
                    <Link
                      to={''}
                      className="flex flex-row ml-2 items-center text-gray-800"
                    >
                      <BsIcon.BsFilePerson size={20} className={'mx-1'} />
                      <div className={'ml-2.5'}>
                        <div className={'font-bold leading-none'}>
                          Doctor Check - Tầm Soát Bệnh Để Sống Thọ Hơn
                        </div>
                        <div>
                          Bảo trợ chuyên mục nội dung &#34;sức khỏe tổng
                          quát&#34;
                        </div>
                      </div>
                    </Link>
                  </li>
                </motion.ul>
              ) : null}
            </AnimatePresence>
          </MotionConfig>
        </div>
        <div className={'text-left md:max-lg:w-full'}>
          <div
            className={
              'font-bold w-full border xl:border-0 p-2 xl:p-0 cursor-pointer xl:cursor-text'
            }
            onClick={() => showContent(3)}
          >
            Tổng đài
          </div>
          <MotionConfig>
            <AnimatePresence initial={false}>
              {!hideContent[3] ? (
                <motion.ul
                  {...getMotionConfig(hideContent[3])}
                  className={'list-none p-2 m-0 text-gray-800'}
                >
                  <li>
                    <div className="flex flex-row justify-start items-center">
                      <BsIcon.BsTelephone className={'mr-1'} /> Tư vấn dịch vụ
                    </div>
                    <div>
                      <strong className={'text-emerald-600'}>18003508</strong>{' '}
                      (nhánh 1)
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row justify-start items-center">
                      <BsIcon.BsTelephone className={'mr-1'} /> Trung tâm hỗ trợ
                      khách hàng
                    </div>
                    <div>
                      <strong className={'text-emerald-600'}>18003508</strong>{' '}
                      (nhánh 2)
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row justify-start items-center">
                      <BsIcon.BsTelephone className={'mr-1'} /> Đặt lịch hẹn
                    </div>
                    <div>
                      <strong className={'text-emerald-600'}>18003508</strong>{' '}
                      (nhánh 3)
                    </div>
                  </li>
                </motion.ul>
              ) : null}
            </AnimatePresence>
          </MotionConfig>
        </div>
        <div
          className={
            ' w-full flex flex-col items-start lg:items-center justify-start text-center sm:max-lg:flex-col sm:max-lg:justify-center sm:max-lg:items-start'
          }
        >
          <div className={'xl:mr-1 xl:p-2 w-full'}>
            <div
              className={
                'text-left xl:text-center font-bold w-full border xl:border-0 p-2 xl:p-0 cursor-pointer xl:cursor-text'
              }
              onClick={() => showContent(4)}
            >
              Chứng nhận an toàn
            </div>
            <MotionConfig>
              <AnimatePresence initial={false}>
                {!hideContent[4] ? (
                  <motion.div
                    {...getMotionConfig(hideContent[4])}
                    className={'flex flex-row text-gray-800'}
                  >
                    <img className={'h-10'} src={dmca} alt={'DMCA'} />
                    <img className={'h-10'} src={ccdv} alt={'ccdv'} />
                    <img className={'h-10'} src={ncsc} alt={'ccdv'} />
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </MotionConfig>
          </div>
          <div className={' ml-0 xl:ml-1 xl:p-2 w-full'}>
            <div
              className={
                'text-left xl:text-center font-bold w-full border xl:border-0 p-2 xl:p-0 cursor-pointer xl:cursor-text'
              }
              onClick={() => showContent(5)}
            >
              Hỗ trợ thanh toán
            </div>
            <MotionConfig>
              <AnimatePresence initial={false}>
                {!hideContent[5] ? (
                  <motion.div
                    {...getMotionConfig(hideContent[5])}
                    className={
                      'grid grid-cols-4 lg:max-xl:grid-cols-8    text-gray-800'
                    }
                  >
                    <Svg.SvgMomo size={20} border={true} />
                    <Svg.SvgVNPay size={20} border={true} />
                    <Svg.SvgAmex size={20} border={true} />
                    <Svg.SvgVisa size={20} border={true} />
                    <Svg.SvgMtc size={20} border={true} />
                    <Svg.SvgJcb size={20} border={true} />
                    <Svg.SvgZaloPay size={20} border={true} />
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </MotionConfig>
          </div>
        </div>
      </div>

      <div className="flex justify-around items-center flex-row w-full min-h-10 mt-2.5 px-5 pb-3 pt-2 bg-gray-800 text-white">
        <div>@ 2025 4ChillyGuys</div>
        <div className={'flex flex-row justify-around items-center'}>
          <Link to={''}>
            <BsIcon.BsYoutube size={30} style={{ margin: '0 10px' }} />
          </Link>
          <Link to={''}>
            <BsIcon.BsFacebook size={30} style={{ margin: '0 10px' }} />
          </Link>
          <Link to={''}>
            <BsIcon.BsTiktok size={30} style={{ margin: '0 10px' }} />
          </Link>
          <Link to={''}>
            <Svg.SvgZalo size={40} color={'white'} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
