import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import '../../assets/css/swiper-style.css';
import logo from '../../assets/logo.png';

const OurTeam = () => {
  return (
    <section className="w-full py-16 px-6 bg-[#1695a0]/70 text-white h-full flex flex-col justify-center items-center">
      <div
        className={
          'w-fit text-3xl text-[#015259] bg-[#EBFCFD] py-3 px-10 rounded-lg mb-10 mt-5 border-b-2 border-[#015259]'
        }
      >
        Our Team
      </div>
      <div className={'w-full h-full'}>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className={'custom-swiper'}
        >
          <SwiperSlide>
            <div
              className={
                'w-fit h-fit flex flex-col justify-center items-center bg-[#1695a0]/70'
              }
            >
              <div className={'w-full'}>
                <img src={logo} alt={'avatar'} />
              </div>
              <p className={'text-[#015259] font-bold text-xl p-2'}>Dr.Thanh</p>
              <p className={'text-white p-2'}>Khoa cơ-xương khớp</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={
                'w-fit h-fit flex flex-col justify-center items-center bg-[#1695a0]/70'
              }
            >
              <div className={'w-full'}>
                <img src={logo} alt={'avatar'} />
              </div>
              <p className={'text-[#015259] font-bold text-xl p-2'}>Dr.Thanh</p>
              <p className={'text-white p-2'}>Khoa cơ-xương khớp</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={
                'w-fit h-fit flex flex-col justify-center items-center bg-[#1695a0]/70'
              }
            >
              <div className={'w-full'}>
                <img src={logo} alt={'avatar'} />
              </div>
              <p className={'text-[#015259] font-bold text-xl p-2'}>Dr.Thanh</p>
              <p className={'text-white p-2'}>Khoa cơ-xương khớp</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={
                'w-fit h-fit flex flex-col justify-center items-center bg-[#1695a0]/70'
              }
            >
              <div className={'w-full'}>
                <img src={logo} alt={'avatar'} />
              </div>
              <p className={'text-[#015259] font-bold text-xl p-2'}>Dr.Thanh</p>
              <p className={'text-white p-2'}>Khoa cơ-xương khớp</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={
                'w-fit h-fit flex flex-col justify-center items-center bg-[#1695a0]/70'
              }
            >
              <div className={'w-full'}>
                <img src={logo} alt={'avatar'} />
              </div>
              <p className={'text-[#015259] font-bold text-xl p-2'}>Dr.Thanh</p>
              <p className={'text-white p-2'}>Khoa cơ-xương khớp</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export default OurTeam;
