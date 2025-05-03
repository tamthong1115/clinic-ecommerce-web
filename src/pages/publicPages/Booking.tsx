import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { GrSchedulePlay } from 'react-icons/gr';

const Booking = () => {
  return (
    <div className="bg-gray-200">
      <div className="w-[1180px] mx-auto container">
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
          <option value="">--Toàn quốc--</option>
          <option value="">Miền Bắc</option>
          <option value="">Miền Trung</option>
          <option value="">Miền Nam</option>
        </select>

        <div
          className="
          w-full 
          bg-white 
          p-[10px]
          mb-[10px]
          flex
          rounded-[10px]
        "
        >
          <div className="left-side w-[50%] px-[15px] py-[8px] flex border-r-2 border-gray-200 ">
            <div className="w-[150px] h-[100px] pr-[15px]">
              <img
                src={logo}
                className="object-cover w-full h-full rounded-[10px]"
              />
            </div>
            <div className="">
              <div className="text-[#41d6e7] font-[700] text-[18px] mb-[2px] hover:text-[#1c919e]">
                <Link to={'/detail/doctor/${id}'}>Đỗ Nguyễn Diệu Anh</Link>
              </div>
              <div className="mb-[5px]">
                <div className="font-[700]">Kinh nghiệm:</div>
                <div className="text-[14px] opacity-70">
                  - Bác sĩ có 35 năm kinh nghiệm về vực Cột sống, thần kinh, cơ
                  xương khớp
                </div>
              </div>

              <div className="mb-[5px]">
                <div className="font-[700]">Danh hiệu:</div>
                <div className="text-[14px] opacity-70">
                  - Phó chủ tịch hội Phẫu thuật cột sống Việt Nam
                </div>
              </div>

              <div className="mb-[5px]">
                <div className="font-[700]">Điều kiện nhận khám:</div>
                <div className="text-[14px] opacity-70">
                  - Bác sĩ nhận khám từ 7 tuổi trở lên
                </div>
              </div>

              <div className="flex items-center">
                <div className="text-[14px] font-[700] mr-[5px]">Nơi ở:</div>
                <div className="text-[14px] opacity-70">Hà Nội</div>
              </div>
            </div>
          </div>

          <div className="right-side w-[50%] px-[15px] py-[8px]">
            <div className="flex items-center">
              <div className="mr-[5px] text-[18px]">
                <GrSchedulePlay />
              </div>
              <div className="text-[18px] font-[500]">
                Lịch Khám: Thứ 2 đến Thứ 6
              </div>
            </div>

            <div className="grid grid-cols-4 gap-[8px] my-[10px] border-b-2 border-gray-200 pb-[10px]">
              <div className="p-[10px] bg-[#eeeeeeee] text-center text-[14px] h-[41px] font-[500] cursor-pointer hover:bg-[#46a2ee] hover:text-white">
                09:00 - 09:30
              </div>
              <div className="p-[10px] bg-[#eeeeeeee] text-center text-[14px] h-[41px] font-[500] cursor-pointer hover:bg-[#46a2ee] hover:text-white">
                09:00 - 09:30
              </div>
              <div className="p-[10px] bg-[#eeeeeeee] text-center text-[14px] h-[41px] font-[500] cursor-pointer hover:bg-[#46a2ee] hover:text-white">
                09:00 - 09:30
              </div>
              <div className="p-[10px] bg-[#eeeeeeee] text-center text-[14px] h-[41px] font-[500] cursor-pointer hover:bg-[#46a2ee] hover:text-white">
                09:00 - 09:30
              </div>
              <div className="p-[10px] bg-[#eeeeeeee] text-center text-[14px] h-[41px] font-[500] cursor-pointer hover:bg-[#46a2ee] hover:text-white">
                09:00 - 09:30
              </div>
              <div className="p-[10px] bg-[#eeeeeeee] text-center text-[14px] h-[41px] font-[500] cursor-pointer hover:bg-[#46a2ee] hover:text-white">
                09:00 - 09:30
              </div>
            </div>

            <div className="pb-[10px] border-b-2 border-gray-200">
              <div className="font-[700] ">Địa chỉ Khám</div>
              <div className="text-[#20a2b0] font-[700]">
                Phòng khám Spinetech Clinic
              </div>
              <div className="">
                Tòa nhà GP, 257 Giải Phóng, Phương Mai, Đống Đa, Hà Nội
              </div>
            </div>

            <div className="mt-[10px]">
              <span className="text-[18px] font-[500]">Giá khám: </span>
              <span className="text-[17px] font-[700]">500.000vnd </span>
              <span className="text-[17px] cursor-pointer text-[#20a2b0]">
                Xem chi tiết...
              </span>
            </div>
          </div>
        </div>

        <div>abs</div>
      </div>
    </div>
  );
};

export default Booking;
