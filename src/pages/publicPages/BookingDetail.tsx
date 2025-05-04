import { useParams } from "react-router-dom";
import avatar from '../../assets/logo.png';
import { AiOutlineSchedule } from "react-icons/ai";
import { BiClinic } from "react-icons/bi";
import { FaRegBuilding } from "react-icons/fa";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useMutation } from "@tanstack/react-query";
import { useToast } from "../../context/ToastContext";

const today = new Date();
today.setHours(0, 0, 0, 0);

const detailValidate = Yup.object().shape({
  fullName: Yup.string().min(8).required("Tên không được bỏ trống"),
  email: Yup.string().email("Email không đúng định dạng").required("Email không được bỏ trống"),
  gender: Yup.string().required("Giới tính không được bỏ trống"),
  phone: Yup.string().min(10, "Số điện thoại phải có ít nhất 10 chữ số").required("Số điện thoại không được bỏ trống"),
  birth: Yup.string().required("Năm sinh không được bỏ trống").min(4, "Năm sinh phải có ít nhất 4 ký tự"),
  country: Yup.string().required("Quê quán không được bỏ trống"),
  address: Yup.string().required("Địa chỉ không được bỏ trống"),
  reason: Yup.string().max(100).required("Lý do không được bỏ trống"),
  date: Yup.date().min(today, "Ngày phải lớn hơn hoặc bằng ngày hiện tại").required("Vui lòng chọn ngày"),
  price: Yup.string().required("Giá không được bỏ trống")
})

const BookingDetail = () => {
  const { id } = useParams();

  const sampleData = {
    id: "1234",
    fullName: "PGS. TS. BSCKII. TTUT Vũ Văn Hòe",
    clinic: "Phòng khám Spinetech Clinic",
    address: "Tòa nhà GP, 257 Giải Phóng, Phương Mai, Đống Đa, Hà Nội",
    price: "500.000"
  }
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
      showToast("Đặt lịch thành công");
    },
    onError: (error) => {
      showToast("Đặt lịch thất bại", {type: 'error',});
      console.error('Booking failed:', error);
    },
  });

  const handleSubmit = (values: {
    fullName: string
    gender: string
    phone: string
    email: string;
    birth: string;
    country: string;
    address: string;
    reason: string;
    date: Date;
    price: string
  }) => {
    mutate(values)
  }

  if (sampleData.id !== id) {
    return (
      <div className="text-center text-[24px]">Không tìm thấy thông tin</div>
    )
  }
  return (
    <div className="bg-gray-200">
      <div className="w-[1180px] mx-auto container">
        <div className="w-full bg-white p-[10px] mb-[10px] rounded-[10px] pt-[30px] px-[20px]">
          <div className="flex items-center justify-center w-[100%] mx-auto  border-b-2 border-gray-200 pb-[20px] px-[20px]">

            <div className="pr-[15px]">
              <img src={avatar} alt="" className="w-[100px] h-[100px] object-cover" />
            </div>

            <div className="mb-[5px]">
              <div className="text-[25px] text-[#555555] font-[700] flex items-center">
                <AiOutlineSchedule className="text-[30px]" />
                <div className="ml-[5px]">
                  Đặt lịch khám
                </div>
              </div>

              <div className="text-[#3473f3] text-[20px] font-[700] mb-[5px]">
                {sampleData.fullName}
              </div>

              <div className="">
                <div className="text-[#555555] font-[600] text-[18px] flex items-center mb-[5px]">
                  <BiClinic className="text-[20px]" />
                  <div className="ml-[5px]">
                    {sampleData.clinic}
                  </div>
                </div>
                <div className="flex items-center">
                  <FaRegBuilding />
                  <div className="ml-[5px]">
                    {sampleData.address}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-[60%] mx-auto mt-[20px]">
            <Formik
              initialValues={
                {
                  fullName: '',
                  gender: '',
                  phone: '',
                  email: '',
                  birth: '',
                  date: '',
                  country: '',
                  address: '',
                  reason: '',
                  price: `${sampleData.price}VND`,
                }
              }
              validationSchema={detailValidate}
              onSubmit={(values, { setSubmitting }) => {
                handleSubmit({
                  ...values, date: new Date(values.date),
                })
                setSubmitting(false)
              }}
            >
              {({ errors, touched }) => (
                <Form className="w-full">
                  <label htmlFor="fullName" className="mb-[5px] block text-[#606060] font-[600]">Họ và tên:</label>
                  <Field type="text" name="fullName" id="fullName" placeholder="VD: Nguyễn Văn A" className={`border border-gray-200 w-full h-[52px] px-[22px] rounded-md bg-[#f5f6fa] outline-none ${errors.fullName && touched.fullName
                      ? 'border-red-500 focus:ring-red-400'
                      : 'border-gray-300 focus:ring-green-400'}`} />
                  {errors.fullName && touched.fullName && <div className="text-red-500 text-sm mt-1">{errors.fullName}</div>}

                  <label htmlFor="email" className="mb-[5px] mt-[10px] block text-[#606060] font-[600]">Email:</label>
                  <Field type="email" name="email" id="email" placeholder="VD: nguyenvana@gmail.com" className={`border border-gray-200 w-full h-[52px] px-[22px] rounded-md bg-[#f5f6fa] outline-none ${errors.email && touched.email
                      ? 'border-red-500 focus:ring-red-400'
                      : 'border-gray-300 focus:ring-green-400'}`} />
                  {errors.email && touched.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}


                  <label htmlFor="gender" className="mb-[5px] mt-[10px] block text-[#606060] font-[600]">Chọn giới tính:</label>
                  <Field as="select" name="gender" id="gender"  className={`border border-gray-200 w-full h-[52px] px-[22px] rounded-md bg-[#f5f6fa] outline-none ${errors.gender && touched.gender
                      ? 'border-red-500 focus:ring-red-400'
                      : 'border-gray-300 focus:ring-green-400'}`}>
                    <option value="">-- Chọn giới tính --</option>
                    <option value="male">--Nam</option>
                    <option value="female">--Nữ</option>
                  </Field>
                  {errors.gender && touched.gender && <div className="text-red-500 text-sm mt-1">{errors.gender}</div>}


                  <label htmlFor="phone" className="mb-[5px] mt-[10px] block text-[#606060] font-[600]">Số điện thoại:</label>
                  <Field type="text" name="phone" id="phone" placeholder="VD: 0123456789"  className={`border border-gray-200 w-full h-[52px] px-[22px] rounded-md bg-[#f5f6fa] outline-none ${errors.phone && touched.phone
                      ? 'border-red-500 focus:ring-red-400'
                      : 'border-gray-300 focus:ring-green-400'}`} />
                  {errors.phone && touched.phone && <div className="text-red-500 text-sm mt-1">{errors.phone}</div>}

                  <label htmlFor="birth" className="mb-[5px] mt-[10px] block text-[#606060] font-[600]">Năm sinh:</label>
                  <Field type="text" name="birth" id="birth" placeholder="VD: 1999" className={`border border-gray-200 w-full h-[52px] px-[22px] rounded-md bg-[#f5f6fa] outline-none ${errors.birth && touched.birth
                      ? 'border-red-500 focus:ring-red-400'
                      : 'border-gray-300 focus:ring-green-400'}`} />
                  {errors.birth && touched.birth && <div className="text-red-500 text-sm mt-1">{errors.birth}</div>}

                    
                  <label htmlFor="country" className="mb-[5px] mt-[10px] block text-[#606060] font-[600]">Quê quán:</label>
                  <Field as="select" name="country" id="country" className={`border border-gray-200 w-full h-[52px] px-[22px] rounded-md bg-[#f5f6fa] outline-none ${errors.country && touched.country
                      ? 'border-red-500 focus:ring-red-400'
                      : 'border-gray-300 focus:ring-green-400'}`}>
                    <option value="">-- Chọn tỉnh thành --</option>
                    <option value="DN">Đồng Nai</option>
                    <option value="TPHCM">Thành Phố Hồ Chí Minh</option>
                  </Field>
                  {errors.country && touched.country && <div className="text-red-500 text-sm mt-1">{errors.country}</div>}

                  <label htmlFor="address" className="mb-[5px] mt-[10px] block text-[#606060] font-[600]">Địa chỉ:</label>
                  <Field type="text" name="address" id="address" placeholder="VD: 1/p, Nguyễn Hữu Cầu, Bà Điểm, Hoóc Môn" className={`border border-gray-200 w-full h-[52px] px-[22px] rounded-md bg-[#f5f6fa] outline-none ${errors.address && touched.address
                      ? 'border-red-500 focus:ring-red-400'
                      : 'border-gray-300 focus:ring-green-400'}`} />
                  {errors.address && touched.address && <div className="text-red-500 text-sm mt-1">{errors.address}</div>}

                  <label htmlFor="date" className="mb-[5px] mt-[10px] block text-[#606060] font-[600]">Ngày khám muốn khám:</label>
                  <Field type="date" name="date" id="date" className={`border border-gray-200 w-full h-[52px] px-[22px] rounded-md bg-[#f5f6fa] outline-none ${errors.date && touched.date
                      ? 'border-red-500 focus:ring-red-400'
                      : 'border-gray-300 focus:ring-green-400'}`} format={"MM/DD/YYYY"} />
                  {errors.date && touched.date && <div className="text-red-500 text-sm mt-1">{errors.date}</div>}

                  <label htmlFor="reason" className="mb-[5px] mt-[10px] block text-[#606060] font-[600]">Lý do khám:</label>
                  <Field as="textarea" name="reason" id="reason" placeholder="VD: Đau tay, đau chân, chóng mặt...." className={`border border-gray-200 w-full h-[100px] px-[22px] pt-[20px] rounded-md bg-[#f5f6fa] outline-none ${errors.reason && touched.reason
                      ? 'border-red-500 focus:ring-red-400'
                      : 'border-gray-300 focus:ring-green-400'}`}/>
                  {errors.reason && touched.reason && <div className="text-red-500 text-sm mt-1">{errors.reason}</div>}

                  <label htmlFor="price" className="mb-[5px] mt-[10px] block text-[#606060] font-[600]">Giá khám:</label>
                  <Field type="text" name="price" id="price" className={`border border-gray-200 w-full h-[52px] px-[22px] rounded-md bg-[#f5f6fa] outline-none`} readOnly/>
                  {errors.price && touched.price && <div className="text-red-500 text-sm mt-1">{errors.price}</div>}

                  <button type="submit" className="w-full mt-[20px] font-[700] bg-blue-500 hover:bg-blue-800 text-white p-[15px] rounded-xl">Xác nhận đặt lịch phòng khám</button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingDetail;