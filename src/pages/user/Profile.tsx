import * as Bs from 'react-icons/bs';

/**
 * @param {String} date -  using format: mmm/dd/yyyy as string
 * @param {String} time - using format: hh:mm and HH:mm as string
 * **/
const renderBookingCalendarItem = (date: string, time: string) => {
  return (
    <div
      className={
        'h-full w-[95%] flex flex-row justify-start items-center rounded-lg bg-[#00CC9B] overflow-hidden'
      }
    >
      {/*Date here*/}
      <div
        className={
          'h-40 w-[20%] py-auto bg-[#024D50] text-white font-bold flex justify-center items-center text-center rounded-l-lg'
        }
      >
        {date}
      </div>
      {/*Content here*/}
      <div
        className={
          'h-40 w-[80%] ml-2 py-2 flex flex-col justify-between items-start'
        }
      >
        <div className="min-h[78%]">
          <ul className={'font-bold'}>
            <li>Galaxy</li>
            <li>4ChillyGuys Company&#39;s event</li>
            <li>Truong Tam Thong - B</li>
          </ul>
        </div>
        {/*Booking time here*/}
        <div
          className={
            'h-[20%] w-fit py-1 px-3 font-bold flex flex-row justify-start items-center bg-[#024D50] rounded-full'
          }
        >
          <Bs.BsClock color={'white'} />
          <div className={'text-white ml-2'}>{time}</div>
        </div>
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <div
      className={'w-full h-fit m-3 flex flex-col justify-start items-center'}
    >
      {/*This is for personal card*/}
      <div
        className={'w-[80%] h-fit shadow-lg shadow-gray-300 rounded-lg mb-5'}
      >
        {/*title here*/}
        <div
          className={
            'w-full min-h-4 p-2 bg-emerald-600 text-white font-bold text-lg text-center rounded-tl-lg rounded-tr-lg'
          }
        >
          Thông tin cá nhân
        </div>
        {/*content here*/}
        <div
          className={
            'w-full h-fit p-3 flex justify-between items-center flex-row'
          }
        >
          {/*avatar here*/}
          <div className={'h-fit w-[20%]'}>
            <img
              className={' w-full border border-gray-200 rounded-full'}
              src={
                'https://ss-images.saostar.vn/wwebp700/2025/3/21/pc/1742525348364/9eso7emv421-keo7ztxk2r2-m86e7zgcoa3.png'
              }
              alt={'example'}
            />
          </div>
          {/*Information here*/}
          <div className={'w-[75%] h-fit'}>
            <ul>
              <li>Allen Greenlee</li>
              <li>32 White Social Court, Albany, Ny, 16979</li>
              <li>(122) 155-2688</li>
              <li>Ada.Callahan52@nowehere.com</li>
            </ul>
          </div>
        </div>
      </div>
      {/*This is for booking calendar*/}
      <div
        className={'w-[80%] h-fit shadow-lg shadow-gray-300 rounded-lg mb-5'}
      >
        {/*title here*/}
        <div
          className={
            'w-full min-h-4 p-2 bg-emerald-600 text-white font-bold text-lg text-center rounded-tl-lg rounded-tr-lg'
          }
        >
          Lịch hẹn sắp tới
        </div>
        {/*Content here*/}
        <div
          className={
            'w-full h-fit p-3 flex justify-between items-center flex-col'
          }
        >
          {/*Card notify here*/}
          {renderBookingCalendarItem('June 22, 2025', '7:65')}
        </div>
      </div>

      {/*This is for quick settings*/}
      <div
        className={'w-[80%] h-fit shadow-lg shadow-gray-300 rounded-lg mb-5'}
      >
        {/*title here*/}
        <div
          className={
            'w-full min-h-4 p-2 bg-emerald-600 text-white font-bold text-lg text-center rounded-tl-lg rounded-tr-lg'
          }
        >
          Cài đặt tài khoản
        </div>
        {/*Content here*/}
        <div
          className={
            'w-full h-fit p-3 flex justify-around items-start flex-row'
          }
        >
          {/*Quick access here*/}
          {/*Edit access here*/}
          <div
            className={
              'max-w-[30%] h-fit font-bold flex justify-center items-center flex-col'
            }
          >
            <button className={'bg-emerald-600 p-2 rounded-lg '}>
              <Bs.BsPencilFill size={30} color={'white'} />
            </button>
            Chỉnh sửa
          </div>
          {/*Delete Account here*/}
          <div
            className={
              'max-w-[30%] h-fit font-bold flex justify-center items-center flex-col text-center'
            }
          >
            <button className={'bg-emerald-600 p-2 rounded-lg '}>
              <Bs.BsTrashFill size={30} color={'white'} />
            </button>
            Đổi mật khẩu
          </div>
          {/*Change password here*/}
          <div
            className={
              'max-w-[30%] h-fit font-bold flex justify-center items-center flex-col text-center'
            }
          >
            <button className={'bg-emerald-600 p-2 rounded-lg '}>
              <Bs.BsLockFill size={30} color={'white'} />
            </button>
            Xóa tài khoản
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
