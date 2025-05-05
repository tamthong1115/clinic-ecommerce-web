import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { GrSchedulePlay } from 'react-icons/gr';

const sampleData = [
  {
    ID: 11011101,
    title: 'Khám cơ xương khớp',
    doctor: {
      name: 'Đỗ Nguyễn Diệu Anh',
      title: 'Phó Chủ tịch hôi Phẩu thuật cột sống Việt Nam',
    },
    selectedTime: { date: '25/5', time: '08:00 - 09:00' },
    bookTime: [
      '08:00 - 09:00',
      '09:00 - 10:00',
      '10:00 - 11:00',
      '11:00 - 12:00',
      '13:00 - 14:00',
      '14:00 - 15:00',
    ],
    address: {
      name: 'Phòng khám Spinetech CLinic',
      addr: 'Tòa nhà GP, 257 Giải Phóng, Phương Mai, Đống Đa, Hà Nội',
    },
    cost: 500000,
  },
  {
    ID: 11011101,
    title: 'Khám cơ xương khớp',
    doctor: {
      name: 'Đỗ Nguyễn Diệu Anh',
      title: 'Phó Chủ tịch hôi Phẩu thuật cột sống Việt Nam',
    },
    selectedTime: { date: '30/5', time: '11:00 - 12:00' },
    bookTime: [
      '08:00 - 09:00',
      '09:00 - 10:00',
      '10:00 - 11:00',
      '11:00 - 12:00',
      '13:00 - 14:00',
      '14:00 - 15:00',
    ],
    address: {
      name: 'Phòng khám Spinetech CLinic',
      addr: 'Tòa nhà GP, 257 Giải Phóng, Phương Mai, Đống Đa, Hà Nội',
    },
    cost: 650000,
  },
];

const Booking = () => {
  return (
    <div className="bg-gray-200">
      <div className="w-full h-full flex flex-col justify-center items-center mx-auto container">
        <select
          name=""
          id=""
          className="
          my-[20px]
          border-1 border-black-700
          outline-none
          p-[10px]
          bg-white
          rounded-[10px]
        "
        >
          <option value="">--Toàn bộ--</option>
          <option value="">Hôm nay</option>
          <option value="">Ngày mai</option>
          <option value="">Tuần tới</option>
          <option value="">Tháng tới</option>
        </select>
        {sampleData.map((item, index) => (
          <div
            key={index}
            className="w-[80%] h-full flex flex-col justify-center items-center bg-white mb-2 rounded-lg "
          >
            <div
              className={'text-white bg-emerald-600 p-1 w-full text-left mb-2'}
            >
              Dịch vụ đã đặt: {item.title}
            </div>
            <div className={'w-full flex flex-row jus-center item-center p-4'}>
              <div className="w-[150px] h-[100px] pr-[15px]">
                <img
                  src={logo}
                  className="object-cover w-full h-full rounded-[10px]"
                />
              </div>
              <div className="">
                <div className="text-[#41d6e7] font-[700] text-[18px] mb-[2px] hover:text-[#1c919e]">
                  <Link to={'/detail/doctor/${id}'}>{item.doctor.name}</Link>
                </div>
                <div className="mb-[5px]">
                  <div className="font-[700]">Danh hiệu:</div>
                  <div className="text-[14px] opacity-70">
                    - {item.doctor.title}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full p-4">
              <div className="flex items-center">
                <div className="mr-[5px] text-[18px]">
                  <GrSchedulePlay />
                </div>
                <div className="text-[18px] font-[500]">
                  Lịch Khám: Ngày {item.selectedTime.date} (đã chọn)
                </div>
              </div>

              <div className=" w-full grid grid-cols-3 gap-[8px] my-[10px] border-b-2 border-gray-200 pb-[10px]">
                {item.bookTime.map((item1, index1) => (
                  <div
                    key={index1}
                    className={`p-2 ${item1 === item.selectedTime.time ? ` text-white bg-emerald-600` : ` text-gray-600 bg-[#eeeeeeee]`} text-center text-[14px] h-[41px] font-[500] cursor-not-allowed`}
                  >
                    {item1}
                  </div>
                ))}
              </div>

              <div className="pb-[10px] border-b-2 border-gray-200">
                <div className="font-[700] ">Địa chỉ khám:</div>
                <div className="text-[#20a2b0] font-[700]">
                  {item.address.name}
                </div>
                <div className="">{item.address.addr}</div>
              </div>

              <div className="mt-4 flex flex-col justify-center items-center">
                <span className="text-[18px] font-[500]">
                  Phí dịch vụ:{' '}
                  {new Intl.NumberFormat('vi-VN').format(Number(item.cost))} VND
                  (đã thanh toán)
                </span>
                <span className="text-[17px] cursor-pointer text-[#20a2b0]">
                  Xem chi tiết...
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booking;
