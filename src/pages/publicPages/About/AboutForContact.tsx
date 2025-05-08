import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaRegNoteSticky } from "react-icons/fa6";
const AboutForContact = () => {
  return (
    <>
      <div className="p-[20px] w-[1180px] mx-auto">
        <div className="text-[42px] text-center text-[#1695a0] border-b-2 border-[#1695a0] pb-[20px] font-[700]">
          Liên hệ nền tảng Đặt khám 4ChillyGuys
        </div>

        <div className="grid grid-cols-3 gap-[20px] mt-[40px]">
          <div className="border-2 border-[#1695a0] text-[20px] p-[20px] rounded-md ">
            <div className="flex justify-center items-center text-[#1695a0] font-[700]">
              <FaPhoneAlt className="text-[30px]" />
              <div className="ml-[5px]">
                Số điện thoại
              </div>
            </div>

            <div className="text-center mt-[10px]">
              02473.012.468
            </div>
          </div>

          <div className="border-2 border-[#1695a0] text-[20px] p-[20px] rounded-md ">
            <div className="flex justify-center items-center text-[#1695a0] font-[700]">
              <MdOutlineMail className="text-[30px]" />
              <div className="ml-[5px]">
                Email
              </div>
            </div>

            <div className="text-center mt-[10px]">
              support@4childguys.com
            </div>
          </div>

          <div className="border-2 border-[#1695a0] text-[20px] p-[20px] rounded-md ">
            <div className="flex justify-center items-center text-[#1695a0] font-[700]">
              <FaRegBuilding className="text-[30px]" />
              <div className="ml-[5px]">
                Trực thuộc
              </div>
            </div>

            <div className="text-center mt-[10px]">
              Công ty CP Công nghệ 4ChillyGuys
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[20px] mt-[40px]">
          <div className="border-2 border-[#1695a0] text-[20px] p-[20px] rounded-md ">
            <div className="flex justify-center items-center text-[#1695a0] font-[700]">
              <FaRegNoteSticky className="text-[30px]" />
              <div className="ml-[5px]">
                ĐKKD số
              </div>
            </div>

            <div className="text-center mt-[10px]">
              0106790291, Sở  KH-ĐT Hà Nội cấp ngày: 16/03/2015
            </div>
          </div>

          <div className="border-2 border-[#1695a0] text-[20px] p-[20px] rounded-md ">
            <div className="flex justify-center items-center text-[#1695a0] font-[700]">
              <FaMapMarkedAlt className="text-[30px]" />
              <div className="ml-[5px]">
                Địa chỉ
              </div>
            </div>

            <div className="text-center mt-[10px]">
              Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutForContact;