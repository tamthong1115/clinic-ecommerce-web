import { useFormik } from 'formik';
import * as Yup from 'yup';
import logo from '../../../assets/logo.png';
import { useEffect, useState } from 'react';

import * as dataAdmin from '../../../assets/yml/api_full_administration.json';

const NewOrder = () => {
  const [data, setData] = useState<object>([]);
  const [city, setCity] = useState([]);
  const [street, setStreet] = useState([]);
  const [commune, setCommune] = useState([]);

  const formData = useFormik({
    initialValues: {
      name: '',
      gender: 0, //default is male (1), female (2) and dont talk(0)
      email: '',
      numberphone: '',
      birthday: '',
      city: '',
      street: '',
      commune: '',
      numberHouse: '',
      serviceID: '',
      subServiceID: '',
      time: '',
      date: '',
      reason: '',
    },
    onSubmit: (values, { setSubmitting }) => {},
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Tên không được để trống')
        .min(6, 'Sai định dạng tên'),
      gender: Yup.number(),
      numberphone: Yup.string()
        .required('Bắt buộc phải có số điện thoại')
        .min(10, 'Sai định dạng')
        .max(10, 'Sai định dạng'),
      email: Yup.string().email(),
      birthday: Yup.date().required('Ngày sinh không được để trống'),
      city: Yup.string().required('Yêu cầu phải có tên thành phố'),
      street: Yup.string().required('Yêu cầu phải có tên quận/huyện'),
      commune: Yup.string().required('Yêu cầu phải có tên xã/thị trấn'),
      numberHouse: Yup.string(),
      serviceID: Yup.string().required('Không có dịch vụ nào được chọn'),
      subServiceID: Yup.string().required('Không có dịch vụ nào được chọn'),
      time: Yup.string().required('Không có thời giạn được chọn'),
      date: Yup.date().required('Không có ngày được chọn'),
      reason: Yup.string(),
    }),
  });

  useEffect(() => {
    return setData(dataAdmin.data);
  }, []);

  useEffect(() => {
    console.log(city);
  }, [city]);

  useEffect(() => {
    if (formData.values.city !== '') {
      const selectedCity = data.find(
        (item) => item.id === formData.values.city
      );
      console.log(selectedCity.data2);
      if (selectedCity) {
        setCity(selectedCity);
      }
    }
  }, [formData.values.city]);

  useEffect(() => {
    if (formData.values.street !== '') {
      const selectedStreet = city.data2.find(
        (item) => item.id === formData.values.street
      );
      console.log(selectedStreet.data3);
      if (selectedStreet) {
        setStreet(selectedStreet);
      }
    }
  }, [formData.values.street]);

  useEffect(() => {
    console.log(formData.values);
  }, [formData.values]);

  return (
    <div
      className={'w-screen h-full flex flex-col justify-center items-center'}
    >
      <div className={'w-[80%] flex flex-col justify-center items-center'}>
        <img src={logo} alt="logo" width="50%" />
        <p className={'w-[80%] text-center'}>
          <strong>Tạo</strong> nhanh lịch hẹn giúp <strong>tiết kiệm</strong>{' '}
          thời gian và làm quen với cách mà 4ChillyGuys giúp bạn được hưởng dịch
          vụ thăm khám sức khỏe một cách <strong>tốt nhất</strong>.
        </p>
      </div>
      <form
        className={
          'w-[80%] p-2 border-l-2 border-emerald-600 rounded-lg flex flex-col justify-center items-center'
        }
        onSubmit={formData.handleSubmit}
      >
        <p
          className={
            'w-fit text-center font-bold border-b-2 border-b-emerald-600 text-emerald-600'
          }
        >
          BIỂU MẪU ĐẶT LỊCH NHANH 4CG
        </p>
        {/*group 1: name*/}
        <>
          <fieldset
            className={
              'border-2 border-emerald-600 rounded-lg w-[80%] p-1 my-3'
            }
          >
            <input
              type={'text'}
              name={'name'}
              placeholder={'Họ và tên (bắt buộc)'}
              onChange={formData.handleChange}
              onBlur={formData.handleBlur}
              className={'w-full outline-none px-2 py-1'}
            />
          </fieldset>
          {formData.errors.name && formData.touched.name && (
            <p className={' w-full text-center'}>
              <small className={'italic text-red-600'}>
                {formData.errors.name}
              </small>
            </p>
          )}
        </>

        {/*group 2: gender and birthday*/}
        <>
          <div
            className={
              'w-[80%] flex flex-row justify-between items-stretch my-3'
            }
          >
            {/*gender input*/}
            <fieldset
              className={'border-2 border-emerald-600 rounded-lg w-[45%] p-1'}
            >
              <legend>Giới tính</legend>
              <select
                name={'gender'}
                onChange={formData.handleChange}
                onBlur={formData.handleBlur}
                className={'w-full outline-none px-2 py-1'}
              >
                <option value={0}>-- Chọn giới tính ---</option>
                <option value={1}>Nam</option>
                <option value={2}>Nữ</option>
              </select>
            </fieldset>

            <fieldset
              className={'border-2 border-emerald-600 rounded-lg w-[45%] p-1'}
            >
              <legend>Ngày sinh</legend>
              <input
                type={'date'}
                name={'birthday'}
                onChange={formData.handleChange}
                onBlur={formData.handleBlur}
                className={'w-full outline-none px-2 py-1'}
              />
            </fieldset>
          </div>
          {formData.errors.gender && formData.touched.gender && (
            <p className={' w-full text-center'}>
              <small className={'italic text-red-600'}>
                {formData.errors.name}
              </small>
            </p>
          )}
          {formData.errors.birthday && formData.touched.birthday && (
            <p className={' w-full text-center'}>
              <small className={'italic text-red-600'}>
                {formData.errors.birthday}
              </small>
            </p>
          )}
        </>

        {/*group 3: number phone*/}
        <>
          <fieldset
            className={
              'border-2 border-emerald-600 rounded-lg w-[80%] p-1 my-3'
            }
          >
            <input
              type={'text'}
              name={'numberphone'}
              placeholder={'Số điện thoại liên hệ (bắt buộc)'}
              onChange={formData.handleChange}
              onBlur={formData.handleBlur}
              className={'w-full outline-none px-2 py-1'}
            />
          </fieldset>
          {formData.errors.numberphone && formData.touched.numberphone && (
            <p className={' w-full text-center'}>
              <small className={'italic text-red-600'}>
                {formData.errors.numberphone}
              </small>
            </p>
          )}
        </>
        {/*group 5: email*/}
        <>
          <fieldset
            className={
              'border-2 border-emerald-600 rounded-lg w-[80%] p-1 my-3'
            }
          >
            <input
              type={'text'}
              name={'email'}
              placeholder={'Địa chỉ email'}
              onChange={formData.handleChange}
              onBlur={formData.handleBlur}
              className={'w-full outline-none px-2 py-1'}
            />
          </fieldset>
          {formData.errors.email && formData.touched.email && (
            <p className={' w-full text-center'}>
              <small className={'italic text-red-600'}>
                {formData.errors.email}
              </small>
            </p>
          )}
        </>
        {/*group 6: address*/}
        <>
          <div className={'w-[80%] grid grid-rows-2 grid-cols-2 gap-4 my-3'}>
            <fieldset className={'border-2 border-emerald-600 rounded-lg p-1'}>
              <select
                name={'city'}
                className={'w-full outline-none px-2 py-1'}
                onChange={formData.handleChange}
                onBlur={formData.handleBlur}
              >
                <option key={-1}>-- Chọn Tỉnh/Thành --</option>
                {data &&
                  data.map((value, index) => (
                    <option key={index} value={value.id}>
                      {value.name}
                    </option>
                  ))}
              </select>
            </fieldset>
            <fieldset className={'border-2 border-emerald-600 rounded-lg p-1'}>
              <select
                name={'street'}
                className={'w-full outline-none px-2 py-1'}
                onChange={formData.handleChange}
                onBlur={formData.handleBlur}
              >
                <option key={-1}>-- Chọn Quận/Huyện --</option>
                {city.data2 &&
                  city.data2.map((value, index) => (
                    <option key={index} value={value.id}>
                      {value.name}
                    </option>
                  ))}
              </select>
            </fieldset>
            <fieldset className={'border-2 border-emerald-600 rounded-lg p-1'}>
              <select className={'w-full outline-none px-2 py-1'}>
                <option key={-1}>-- Chọn Xã/Thị trấn --</option>
                {street.data3 &&
                  street.data3.map((value, index) => (
                    <option key={index} value={value.id}>
                      {value.name}
                    </option>
                  ))}
              </select>
            </fieldset>
            <fieldset className={'border-2 border-emerald-600 rounded-lg p-1'}>
              <input
                name={'numberHouse'}
                type={'text'}
                className={'w-full outline-none px-2 py-1'}
                placeholder={'Sô nhà, đường'}
                onChange={formData.handleChange}
                onBlur={formData.handleBlur}
              />
            </fieldset>
          </div>
          {formData.errors.city && formData.touched.city && (
            <p className={' w-full text-center'}>
              <small className={'italic text-red-600'}>
                {formData.errors.city}
              </small>
            </p>
          )}
          {formData.errors.street && formData.touched.street && (
            <p className={' w-full text-center'}>
              <small className={'italic text-red-600'}>
                {formData.errors.street}
              </small>
            </p>
          )}
          {formData.errors.commune && formData.touched.commune && (
            <p className={' w-full text-center'}>
              <small className={'italic text-red-600'}>
                {formData.errors.commune}
              </small>
            </p>
          )}
          {formData.errors.email && formData.touched.email && (
            <p className={' w-full text-center'}>
              <small className={'italic text-red-600'}>
                {formData.errors.email}
              </small>
            </p>
          )}
        </>
        {/*group 7: services*/}
        <>
          <div className={'w-[80%] grid grid-cols-2 grid-rows-1 gap-4 my-3'}>
            <fieldset className={'border-2 border-emerald-600 rounded-lg p-1'}>
              <select
                name="serviceID"
                className={'w-full outline-none px-2 py-1'}
                onChange={formData.handleChange}
                onBlur={formData.handleBlur}
              >
                <option value={'-1'}>-- Chọn loại dịch vụ ---</option>
              </select>
            </fieldset>
            <fieldset className={'border-2 border-emerald-600 rounded-lg p-1'}>
              <select
                name="subServiceID"
                className={'w-full outline-none px-2 py-1'}
              >
                <option value={'-1'}>-- Chọn chuyên khoa ---</option>
              </select>
            </fieldset>
          </div>
          {formData.errors.serviceID && formData.touched.serviceID && (
            <p className={' w-full text-center'}>
              <small className={'italic text-red-600'}>
                {formData.errors.serviceID}
              </small>
            </p>
          )}
          {formData.errors.subServiceID && formData.touched.subServiceID && (
            <p className={' w-full text-center'}>
              <small className={'italic text-red-600'}>
                {formData.errors.subServiceID}
              </small>
            </p>
          )}
        </>
        {/*group 8: time and date booking*/}
        <>
          <div className={'w-[80%] grid grid-cols-2 grid-rows-1 gap-4 my-3'}>
            <fieldset className={'border-2 border-emerald-600 rounded-lg p-1'}>
              <legend>Giờ hẹn</legend>
              <select name={'time'} className={'w-full outline-none px-2 py-1'}>
                <option>08h30</option>
              </select>
            </fieldset>
            <fieldset className={'border-2 border-emerald-600 rounded-lg p-1'}>
              <legend>Ngày hẹn</legend>
              <input
                name={'date'}
                type={'date'}
                className={'w-full outline-none px-2 py-1'}
              />
            </fieldset>
          </div>
          {formData.errors.time && formData.touched.time && (
            <p className={' w-full text-center'}>
              <small className={'italic text-red-600'}>
                {formData.errors.time}
              </small>
            </p>
          )}
          {formData.errors.date && formData.touched.date && (
            <p className={' w-full text-center'}>
              <small className={'italic text-red-600'}>
                {formData.errors.date}
              </small>
            </p>
          )}
        </>
        {/*group 9: reason*/}
        <>
          <fieldset
            className={' w-[80%] border-2 border-emerald-600 rounded-lg p-1'}
          >
            <textarea
              name={'reason'}
              className={'w-full outline-none px-2 py-1'}
              placeholder={'Lí do khám'}
            ></textarea>
          </fieldset>
        </>
        {/*group 10: cost and payment method*/}
        <button
          type={'submit'}
          className={
            'w-fit h-fit px-2 py-1 bg-emerald-600 rounded-full text-white my-3'
          }
        >
          Xác nhận
        </button>
      </form>
    </div>
  );
};
export default NewOrder;
