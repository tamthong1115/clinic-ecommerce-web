import * as Bs from 'react-icons/bs';
import { userProfile } from '../../api/user/userService';
import { useQuery } from '@tanstack/react-query';
import UpdateUser from './forms/UpdateUser.tsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const {
    data: profile,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['userProfile'],
    queryFn: userProfile,
  });

  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const handleUpdate = () => {
    setIsUpdate(true);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading profile</div>;
  }

  return (
    <div
      className={
        'w-full h-full m-3 flex flex-col justify-start items-center relative'
      }
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
              className={'w-full border border-gray-200 rounded-full'}
              src={
                profile?.avatarUrl ||
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2uLl8zBoK0_iM5pNwJAC8hQ2f68YKtlgc7Q&s'
              }
              alt={'User Avatar'}
            />
          </div>
          {/*Information here*/}
          <div className={'w-[75%] h-fit'}>
            <ul>
              <li>{profile?.username || 'No username available'}</li>
              <li>{profile?.address || 'No address available'}</li>
              <li>{profile?.phone || 'No phone number available'}</li>
              <li>{profile?.email || 'No email available'}</li>
            </ul>
          </div>
        </div>
      </div>

      {/*This is for calendar booking quick access*/}
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
        {/*content here*/}
        <div
          className={
            'w-full h-fit p-3 flex justify-between items-center flex-col'
          }
        >
          {/*The next booking here*/}
          <div
            className={
              'w-full h-fit border-2 border-emerald-600 rounded-lg p-1 flex flex-row justify-center items-center'
            }
          >
            {/*datetime here*/}
            <div
              className={
                'w-[30%] h-full flex justify-center items-center text-center font-bold border-r-2 border-r-emerald-600 p-1'
              }
            >
              MAY 01 <br /> 2025
            </div>
            {/*booking's content here*/}
            <div className={'w-full p-1'}>
              Dịch vụ đã đặt trước: Khám tổng quát.
              <br />
              Nơi khám: BV Đa khoa Khu vực Củ Chi
            </div>
          </div>
          {/*Quick access button here*/}
          <div
            className={
              'w-fit h-fit p-2 bg-emerald-600 rounded-lg text-white mt-5'
            }
          >
            <Link to={'/calendar'}>Xem thêm</Link>
          </div>
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
            <button
              className={'bg-emerald-600 p-2 rounded-lg '}
              onClick={handleUpdate}
            >
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
              <Bs.BsLockFill size={30} color={'white'} />
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
              <Bs.BsTrashFill size={30} color={'white'} />
            </button>
            Xóa tài khoản
          </div>
        </div>
      </div>
      {isUpdate ? <UpdateUser setIsOpenForm={setIsUpdate} /> : null}
    </div>
  );
};

export default Profile;
