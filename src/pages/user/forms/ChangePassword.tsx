import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface ChangePasswordProps {
  setIsChangePass: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChangePassword: React.FC<ChangePasswordProps> = ({ setIsChangePass }) => {
  const handleRollBack = () => {
    setIsChangePass(false);
  };

  const formData = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
    },
    onSubmit: (values) => {
      try {
        const respone = values;
      } catch (err) {
        console.error(err);
      }
    },
    validationSchema: Yup.object({
      oldPassword: Yup.string().required('Yêu cầu phải có mật khẩu cũ'),
      newPassword: Yup.string().required('Yêu cầu phải có mật khẩu mới'),
    }),
  });

  return (
    <>
      <div
        className={
          'w-full h-full absolute flex flex-col justify-center items-center'
        }
      >
        <div className=" absolute w-[80%] flex flex-col justify-center items-center  shadow-lg shadow-gray-500 z-20">
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
                <legend>Nhập mật khẩu cũ</legend>
                <input
                  type={'text'}
                  name={'oldPassword'}
                  className={
                    'border border-emerald-600 p-2 rounded-md mr-5 w-full outline-2 outline-emerald-600'
                  }
                  value={formData.values.oldPassword}
                  onChange={formData.handleChange}
                  onBlur={formData.handleBlur}
                />
              </fieldset>
              {formData.errors.oldPassword && formData.touched.oldPassword && (
                <p className={'my-1 p-0'}>
                  <small
                    className={
                      'text-(--text-error) italic text-sm sm:max-lg:text-xl lg:text-xl '
                    }
                  >
                    {formData.errors.oldPassword}
                  </small>
                </p>
              )}

              <fieldset className={'w-full border-1 border-emerald-600'}>
                <legend>Nhập mật khẩu mới</legend>
                <input
                  type={'text'}
                  name={'newPassword'}
                  className={
                    'border border-emerald-600 p-2 rounded-md mr-5 w-full outline-2 outline-emerald-600'
                  }
                  value={formData.values.newPassword}
                  onChange={formData.handleChange}
                  onBlur={formData.handleBlur}
                />
              </fieldset>
              {formData.errors.newPassword && formData.touched.newPassword && (
                <p className={'my-1 p-0'}>
                  <small
                    className={
                      'text-(--text-error) italic text-sm sm:max-lg:text-xl lg:text-xl '
                    }
                  >
                    {formData.errors.newPassword}
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
export default ChangePassword;
