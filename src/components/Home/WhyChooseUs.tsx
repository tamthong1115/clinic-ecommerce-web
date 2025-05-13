import { BsCalendar, BsCloud, BsHospital, BsPhone } from 'react-icons/bs';
import { FaStethoscope } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <>
      <div
        className={
          'w-full h-full flex flex-col justify-center items-center p-2'
        }
      >
        <div
          className={
            'text-3xl text-[#015259] bg-[#EBFCFD] p-3 rounded-lg mb-10 mt-5 border-b-2 border-[#015259]'
          }
        >
          Why Choose Us
        </div>
        <div
          className={
            'w-full sm:w-[80%] flex flex-col sm:flex-row sm:flex-wrap justify-around items-center'
          }
        >
          <div
            className={
              'w-[70%] sm:w-fit h-fit p-2 flex flex-col justify-center items-center'
            }
          >
            <div className={'bg-[#015259] w-fit h-fit p-2 m-2'}>
              <div className={'w-fit h-fit p-4 rounded-full bg-white'}>
                <BsPhone size={80} color={'#015259'} className={'p-2'} />
              </div>
            </div>
            <div className={'text-[#015259] p-2'}>Dịch vụ khẩn cấp</div>
            <div>Bla Bla Bla</div>
          </div>

          <div
            className={
              'w-[70%] sm:w-fit  h-fit p-2 flex flex-col justify-center items-center'
            }
          >
            <div className={'bg-[#015259] w-fit h-fit p-2 m-2'}>
              <div className={'w-fit h-fit p-4 rounded-full bg-white'}>
                <BsCalendar size={80} color={'#015259'} className={'p-2'} />
              </div>
            </div>
            <div className={'text-[#015259] p-2'}>Hoạt động 24/24</div>
            <div>Bla Bla Bla</div>
          </div>

          <div
            className={
              'w-[70%] sm:w-fit  h-fit p-2 flex flex-col justify-center items-center'
            }
          >
            <div className={'bg-[#015259] w-fit h-fit p-2 m-2'}>
              <div className={'w-fit h-fit p-4 rounded-full bg-white'}>
                <BsCloud size={80} color={'#015259'} className={'p-2'} />
              </div>
            </div>
            <div className={'text-[#015259] p-2'}>Hoạt động trực tuyến</div>
            <div>Bla Bla Bla</div>
          </div>

          <div
            className={
              'w-[70%] sm:w-fit  h-fit p-2 flex flex-col justify-center items-center'
            }
          >
            <div className={'bg-[#015259] w-fit h-fit p-2 m-2'}>
              <div className={'w-fit h-fit p-4 rounded-full bg-white'}>
                <BsHospital size={80} color={'#015259'} className={'p-2'} />
              </div>
            </div>
            <div className={'text-[#015259] p-2'}>Cấp cứu</div>
            <div>Bla Bla Bla</div>
          </div>

          <div
            className={
              'w-[70%] sm:w-fit  h-fit p-2 flex flex-col justify-center items-center'
            }
          >
            <div className={'bg-[#015259] w-fit h-fit p-2 m-2'}>
              <div className={'w-fit h-fit p-4 rounded-full bg-white'}>
                <FaStethoscope size={80} color={'#015259'} className={'p-2'} />
              </div>
            </div>
            <div className={'text-[#015259] p-2'}>
              Chăm sóc sức khỏe ưu tiên
            </div>
            <div>Bla Bla Bla</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WhyChooseUs;
