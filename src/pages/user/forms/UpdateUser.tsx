import { useQuery } from '@tanstack/react-query';
import { userProfile } from '../../../api/user/userService.ts';
import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface UpdateUserProps {
  setIsOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const UpdateUser: React.FC<UpdateUserProps> = ({ setIsOpenForm }) => {
  const { data: profile } = useQuery({
    queryKey: ['userProfile'],
    queryFn: userProfile,
  });

  const handleRollBack = () => {
    setIsOpenForm(false);
  };
  const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

  const formData = useFormik({
    initialValues: {
      username: '',
      address: '',
      phone: '',
      email: '',
    },
    onSubmit: (values) => {
      try {
        const respone = values;
      } catch (err) {
        console.error(err);
      }
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Yêu cầu phải có tên người dùng'),
      email: Yup.string().email('Email của bạn sai định dạng'),
      phone: Yup.string()
        .required('Yêu cầu phải cung cấp số điện thoại')
        .matches(phoneRegExp, 'Sai định dạng')
        .min(10, 'Số điện thoại phải đủ 10 chữ số')
        .max(10, 'Số điện thoại quá 10 chữ số'),
    }),
  });

  useEffect(() => {
    if (profile !== null) {
      formData.setFieldValue('username', profile?.username);
      formData.setFieldValue('address', profile?.address);

      formData.setFieldValue('phone', profile?.phone);
      formData.setFieldValue('email', profile?.email);
    }
  }, [profile]);

  return (
    <>
      <div
        className={
          'w-full h-full absolute flex flex-col justify-center items-center'
        }
      >
        <div className="w-[80%] flex flex-col justify-center items-center  shadow-lg shadow-gray-500 z-20">
          <div
            className={
              'w-full min-h-4 p-2 bg-emerald-600 text-white font-bold text-lg text-center rounded-tl-lg rounded-tr-lg'
            }
          >
            Chỉnh sửa thông tin
          </div>
          {/*content here*/}
          <div
            className={
              'w-full h-fit p-3 flex justify-between items-center flex-row bg-white'
            }
          >
            <form className={'w-full flex flex-col justify-center'}>
              <fieldset className={'w-full border-1 border-emerald-600'}>
                <legend>Tên khách hàng</legend>
                <input
                  type={'text'}
                  name={'username'}
                  className={
                    'border border-emerald-600 p-2 rounded-md mr-5 w-full outline-2 outline-emerald-600'
                  }
                  value={formData.values.username}
                  onChange={formData.handleChange}
                  onBlur={formData.handleBlur}
                />
              </fieldset>
              {formData.errors.username && formData.touched.username && (
                <p className={'my-1 p-0'}>
                  <small
                    className={
                      'text-(--text-error) italic text-sm sm:max-lg:text-xl lg:text-xl '
                    }
                  >
                    {formData.errors.username}
                  </small>
                </p>
              )}

              <fieldset className={'w-full border-1 border-emerald-600'}>
                <legend>Địa chỉ</legend>
                <input
                  type={'text'}
                  name={'address'}
                  className={
                    'border border-emerald-600 p-2 rounded-md mr-5 w-full outline-2 outline-emerald-600'
                  }
                  value={formData.values.address}
                  onChange={formData.handleChange}
                  onBlur={formData.handleBlur}
                />
              </fieldset>
              {formData.errors.address && formData.touched.address && (
                <p className={'my-1 p-0'}>
                  <small
                    className={
                      'text-(--text-error) italic text-sm sm:max-lg:text-xl lg:text-xl '
                    }
                  >
                    {formData.errors.address}
                  </small>
                </p>
              )}

              <fieldset className={'w-full border-1 border-emerald-600'}>
                <legend>Số điện thoại</legend>
                <input
                  type={'text'}
                  name={'phone'}
                  className={
                    'border border-emerald-600 p-2 rounded-md mr-5 w-full outline-2 outline-emerald-600'
                  }
                  value={formData.values.phone}
                  onChange={formData.handleChange}
                  onBlur={formData.handleBlur}
                />
              </fieldset>
              {formData.errors.phone && formData.touched.phone && (
                <p className={'my-1 p-0'}>
                  <small
                    className={
                      'text-(--text-error) italic text-sm sm:max-lg:text-xl lg:text-xl '
                    }
                  >
                    {formData.errors.phone}
                  </small>
                </p>
              )}

              <fieldset className={'w-full border-1 border-emerald-600'}>
                <legend>Email</legend>
                <input
                  type={'text'}
                  name={'email'}
                  className={
                    'border border-emerald-600 p-2 rounded-md mr-5 w-full outline-2 outline-emerald-600'
                  }
                  value={formData.values.email}
                  onChange={formData.handleChange}
                  onBlur={formData.handleBlur}
                />
              </fieldset>
              {formData.errors.email && formData.touched.email && (
                <p className={'my-1 p-0'}>
                  <small
                    className={
                      'text-(--text-error) italic text-sm sm:max-lg:text-xl lg:text-xl '
                    }
                  >
                    {formData.errors.email}
                  </small>
                </p>
              )}

              {/*These are for action buttons*/}
              <div
                className={
                  'w-full h-fit flex flex-row justify-around items-center my-2'
                }
              >
                <button
                  type={'submit'}
                  className={
                    'border-2 border-emerald-600 rounded-full px-2 py-1 bg-emerald-600 font-bold text-white'
                  }
                >
                  Cập nhật
                </button>
                <button
                  type={'button'}
                  className={
                    'border-2 border-emerald-600 rounded-full px-2 py-1'
                  }
                  onClick={handleRollBack}
                >
                  Hủy bỏ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className={'w-screen h-screen bg-gray-200 opacity-85 absolute z-10'}
      ></div>
    </>
  );
};
export default UpdateUser;
