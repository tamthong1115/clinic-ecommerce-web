import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '../../../context/ToastContext'
const schemaValidate = Yup.object({
  fullName: Yup.string().min(8, "Tên phải có ít nhất 8 ký tự").required("Tên phải bắt buộc"),
  email: Yup.string().email('Email sai định dạng'),
  phone: Yup.string().required('Số điện thoại phải bắt buộc')
})
const AboutForCooperation = () => {
  const { showToast } = useToast();
  const { mutate } = useMutation({
    mutationFn: async (data: any) => {
      // Replace with your API call logic
      return await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then((res) => res.json());
    },
    onSuccess: () => {
      showToast('Nộp đơn thành công');
    },
    onError: (error) => {
      showToast('Nộp đơn thất bại', { type: 'error' });
      console.error('Booking failed:', error);
    },
  });

  const handleSubmit = async (values: {
    fullName: string,
    phone: string,
    email: string,
    clinicName: string,
    address: string,
  }) => {
    mutate(values);
  };

  return (
    <>
      <div className="p-[20px] w-[1180px] mx-auto">
        <div className="text-[42px] text-center text-[#1695a0] border-b-2 border-[#1695a0] pb-[20px] font-[700]">
          Hợp tác cùng 4ChillyGuys
        </div>

        <Formik
          initialValues={
            {
              fullName: '',
              phone: '',
              email: '',
              clinicName: '',
              address: '',
            }}
          validationSchema={schemaValidate}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values)
            setSubmitting(false);
          }}
        >
          {({ errors, touched }) => (
            <Form className='mt-[20px] w-[50%] mx-auto'>

              <label htmlFor="fullName" className='mb-[5px] block text-[#606060] font-[600] text-[20px]'>Họ và tên:</label>
              <Field name="fullName" type="text" placeholder="Ví Dụ: Nguyễn Văn A" className={`border border-gray-200 w-full h-[52px] px-[22px] rounded-md bg-[#f5f6fa] outline-none ${errors.fullName && touched.fullName
                ? 'border-red-500 focus:ring-red-400'
                : 'border-gray-300 focus:ring-green-400'
                }`} />
              {errors.fullName && touched.fullName && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.fullName}
                </div>
              )}

              <label htmlFor="phone" className='mb-[5px] block text-[#606060] font-[600] text-[20px] mt-[20px]'>Số điện thoại:</label>
              <Field name="phone" type="text" placeholder="Ví Dụ: 0831234567" className={`border border-gray-200 w-full h-[52px] px-[22px] rounded-md bg-[#f5f6fa] outline-none ${errors.phone && touched.phone
                ? 'border-red-500 focus:ring-red-400'
                : 'border-gray-300 focus:ring-green-400'
                }`} />
              {errors.phone && touched.phone && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.phone}
                </div>
              )}

              <label htmlFor="email" className='mb-[5px] block text-[#606060] font-[600] text-[20px] mt-[20px]'>Địa chỉ email:</label>
              <Field name="email" type="email" placeholder="Ví Dụ: nguyenvana@gmail.com" className={`border border-gray-200 w-full h-[52px] px-[22px] rounded-md bg-[#f5f6fa] outline-none`} />

              <label htmlFor="address" className='mb-[5px] block text-[#606060] font-[600] text-[20px] mt-[20px]'>Địa chỉ:</label>
              <Field name="address" type="text" placeholder="Ví Dụ: Đồng Nai" className={`border border-gray-200 w-full h-[52px] px-[22px] rounded-md bg-[#f5f6fa] outline-none `} />

              <label htmlFor="clinic" className='mb-[5px] block text-[#606060] font-[600] text-[20px] mt-[20px]'>Tên cơ sở y tế:</label>
              <Field name="clinic" type="text" placeholder="Ví Dụ: Phòng Khám Bạch Mai" className={`border border-gray-200 w-full h-[52px] px-[22px] rounded-md bg-[#f5f6fa] outline-none `} />

              <button
                type="submit"
                className="w-full mt-[20px] font-[700] bg-blue-500 hover:bg-blue-800 text-white p-[15px] rounded-xl"
              >
                Nộp hồ sơ
              </button>
            </Form>
          )}


        </Formik>

      </div>
    </>
  )
}

export default AboutForCooperation;