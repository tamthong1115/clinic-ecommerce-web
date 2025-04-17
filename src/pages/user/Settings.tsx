import UserPaths from '../../routes/user/pathUser.ts';
import { Link } from 'react-router-dom';
import {
  BsCalendarDate,
  BsGearFill,
  BsKeyFill,
  BsPersonFill,
} from 'react-icons/bs';
import ChangePassword from './forms/ChangePassword.tsx';
import { useState } from 'react';

const Settings = () => {
  const [isChangePass, setIsChangePass] = useState<boolean>(false);

  const handleChangePass = () => {
    setIsChangePass(true);
  };

  return (
    <div className="w-full h-full flex flex-row justify-center items-center">
      <ul className={'w-full flex flex-col justify-start items-center'}>
        <li
          className={
            'w-[80%] h-fit p-2 border-2 border-emerald-600 mb-0.5 rounded-lg flex flex-row justify-between items-center'
          }
        >
          <Link to={UserPaths.PROFILE} className={'w-full h-full block'}>
            Tài khoản
          </Link>
          <BsPersonFill size={20} color="#059669" />
        </li>
        <li
          className={
            'w-[80%] h-fit p-2 border-2 border-emerald-600  mb-0.5 rounded-lg flex flex-row justify-between items-center'
          }
        >
          <Link to={UserPaths.CALENDAR} className={'w-full h-full block'}>
            Lịch hẹn
          </Link>
          <BsCalendarDate size={20} color={'#059669'} />
        </li>
        <li
          className={
            'w-[80%] h-fit p-2 border-2 border-emerald-600  mb-0.5 rounded-lg flex flex-row justify-between items-center'
          }
        >
          <button
            type={'button'}
            className={'w-full text-left'}
            onClick={handleChangePass}
          >
            Đổi mật khẩu
          </button>
          <BsKeyFill size={20} color={'#059669'} />
        </li>
        <li
          className={
            'w-[80%] h-fit p-2 border-2 border-emerald-600  mb-0.5 rounded-lg flex flex-row justify-between items-center'
          }
        >
          <Link to={UserPaths.PROFILE} className={'w-full h-full block'}>
            Cài đặt chung
          </Link>
          <BsGearFill size={20} color={'#059669'} />
        </li>
      </ul>
      {isChangePass ? (
        <ChangePassword setIsChangePass={setIsChangePass} />
      ) : null}
    </div>
  );
};
export default Settings;
