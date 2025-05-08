import { AiOutlineStock } from "react-icons/ai";
import { FaMedal } from "react-icons/fa";
import { BsPersonFillUp } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo1 from '../../../assets/aboutDoctor/093307logo-pk-da-lieu-bs-thai-ha.jpg';
import logo2 from '../../../assets/aboutDoctor/101707-logo-sg.png';
import logo3 from '../../../assets/aboutDoctor/104922-logo-med-tai-ha-noi--01.png';
import logo4 from '../../../assets/aboutDoctor/115911-12-logo-hn.png';
import logo5 from '../../../assets/aboutDoctor/141014-mat-viet-nga-logo.png';
import logo6 from '../../../assets/aboutDoctor/155206-logo-y-duoc-1.jpg';
import logo7 from '../../../assets/aboutDoctor/165210-logo-nha-khoa-lac-viet.jpg';
import logo8 from '../../../assets/aboutDoctor/180039-logo-trong-rang-sg-1.png';
const AboutForDoctor = () => {
  return (
    <>
      <div className="p-[20px] w-[1180px] mx-auto">
        <div className="text-[42px] text-center text-[#1695a0] border-b-2 border-[#1695a0] pb-[20px] font-[700]">
          Dành cho bác sĩ
        </div>

        <div className="grid grid-cols-3 gap-[20px] mt-[40px]">
          <div className="border-2 border-[#1695a0] text-[20px] p-[20px] rounded-md ">
            <div className="flex justify-center items-center text-[#1695a0] font-[700]">
              <AiOutlineStock className="text-[30px]" />
              <div className="ml-[5px]">
                Tăng số lượng bệnh nhân
              </div>
            </div>

            <div className="text-center mt-[10px]">
              Giúp cho phòng khám của các bác sĩ tăng thêm số lượng bệnh nhân và thu nhập.
            </div>
          </div>

          <div className="border-2 border-[#1695a0] text-[20px] p-[20px] rounded-md ">
            <div className="flex justify-center items-center text-[#1695a0] font-[700]">
              <FaMedal className="text-[30px]" />
              <div className="ml-[5px]">
                Xây dựng thương hiệu
              </div>
            </div>

            <div className="text-center mt-[10px]">
              Giúp tạo dựng thương hiệu phòng khám của các bác sĩ.
            </div>
          </div>

          <div className="border-2 border-[#1695a0] text-[20px] p-[20px] rounded-md ">
            <div className="flex justify-center items-center text-[#1695a0] font-[700]">
              <BsPersonFillUp className="text-[30px]" />
              <div className="ml-[5px]">
                Nâng cao trải nghiệm
              </div>
            </div>

            <div className="text-center mt-[10px]">
              Làm cho khách hàng cảm thấy hài lòng, được thấu hiểu, và có mối quan hệ tích cực với thương hiệu.
            </div>
          </div>
        </div>

        <div className="text-[42px] text-center text-[#1695a0] border-b-2 border-[#1695a0] pb-[20px] mt-[30px]">
          Hơn 300 đơn vị  đã hợp tác với 4ChillyGuys
        </div>

        <div className="grid grid-cols-4 gap-[20px] mt-[40px] mx-auto ml-[50px]">
          {[logo1, logo2, logo3, logo4, logo8, logo5, logo6, logo7].map((logo, index) => (
            <div
              key={index}
              className="w-[200px] h-[100px] flex justify-center items-center bg-white rounded-lg shadow hover:scale-105 transition duration-300"
            >
              <img src={logo} alt={`logo-${index}`} className="object-contain w-full h-full p-2" />
            </div>
          ))}
        </div>


        <div className="text-[42px] text-center text-[#1695a0] border-b-2 border-[#1695a0] pb-[20px] mt-[30px]">
          Lượng truy cập đều
        </div>

        <div className="grid grid-cols-2 gap-[40px] mt-[40px]">
          <div className="border-2 border-[#1695a0] text-[20px] p-[20px] rounded-md">
            <div className="flex justify-center items-center text-[#1695a0] font-[700]">
              <div className="ml-[5px] text-[24px]">
                1.500.000 +
              </div>
            </div>

            <div className="text-center mt-[10px]">
              LƯỢT TRUY CẬP/ THÁNG
            </div>
          </div>

          <div className="border-2 border-[#1695a0] text-[20px] p-[20px] rounded-md ">
            <div className="flex justify-center items-center text-[#1695a0] font-[700]">
              <div className="ml-[5px] text-[24px]">
                2.000 +
              </div>
            </div>

            <div className="text-center mt-[10px]">
              BÁC SĨ ĐÃ HỢP TÁC
            </div>
          </div>

          <div className="border-2 border-[#1695a0] text-[20px] p-[20px] rounded-md ">
            <div className="flex justify-center items-center text-[#1695a0] font-[700]">
              <div className="ml-[5px] text-[24px]">
                300.000 +
              </div>
            </div>

            <div className="text-center mt-[10px]">
              NGƯỜI ĐÃ SỬ DỤNG DỊCH VỤ
            </div>
          </div>

          <div className="border-2 border-[#1695a0] text-[20px] p-[20px] rounded-md ">
            <div className="flex justify-center items-center text-[#1695a0] font-[700]">
              <div className="ml-[5px] text-[24px]">
                300 +
              </div>
            </div>

            <div className="text-center mt-[10px]">
              CƠ SỞ Y TẾ
            </div>
          </div>
        </div>

        <div className="w-[50%] mx-auto">
          <div className="text-center text-white text-[24px] mt-[60px] rounded-xl bg-[#1695a0] p-[20px]">
            <Link to={"/about-contact"} className="">
              Liên Hệ Hợp Tác Ngay
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutForDoctor