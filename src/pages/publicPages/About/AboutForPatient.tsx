import logo from '../../../assets/logo.png';
import {
  BsCheck2Square,
  BsClockFill,
  BsHeadphones,
  BsPersonFill,
  BsPiggyBankFill,
  BsSendFill,
  BsSuitHeart,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import bg from '../../../assets/img/3D_Light.jpg';

const AboutForPatient = () => {
  return (
    <div
      className={`w-screen h-full flex flex-col justify-center items-center mt-10 `}
    >
      {/*section 1:introduce*/}
      <div
        className={
          'w-full flex flex-col justify-center items-center my-5 sm:my-2'
        }
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/*logo*/}
        <div className={'w-full flex flex-col justify-center items-center'}>
          <img src={logo} alt={'logo'} className={'w-[50%] sm:w-[40%]'} />
        </div>
        {/*main content*/}
        <div
          className={
            'w-full sm:w-[80%] h-full flex flex-col sm:flex-row justify-center items-center'
          }
        >
          <div
            className={
              'w-[80%] sm:w-[50%] font-bold p-2 text-xl text-center text-white'
            }
          >
            4ChillyGuys
            <br />
            NỀN TẢNG KẾT NỐI MẠNG LƯỚI BÁC SĨ CHUYÊN KHOA GIỎI, BỆNH VIỆN, PHÒNG
            KHÁM UY TÍN
            <br />
            <br />
            <span className={'text-sm'}>
              GIúp bệnh nhân dễ dàng lựa chọn bác sĩ phù hợp, thăm khám đứng bác
              sĩ, đúng bệnh và đặt lịch khám nhanh chóng, được khám ưu tiên
            </span>
          </div>
          <div className={'w-[50%]'}>
            <img src={''} alt={'something'} />
          </div>
        </div>
      </div>
      {/*section 2:show the common issues*/}
      <div
        className={
          'w-full flex flex-col justify-center items-center my-5 bg-white'
        }
      >
        {/*title*/}
        <div
          className={
            'w-[90%] text-[#1695a0] font-bold text-2xl text-left border-b-2 border-[#1695a0] p-2'
          }
        >
          Có phải bạn hoặc người thân đang...
        </div>
        {/*main content*/}
        <ul
          className={
            'w-[90%] flex flex-col sm:flex-row justify-center items-center sm:items-start px-2 sm:px-0 py-4'
          }
        >
          <li className={'border-l-2 border-[#1695a0] p-2 my-3 sm:w-1/6'}>
            Gặp vấn đề về sức khỏe nhưng không biết đi khám ở đâu, bác sĩ nào
            thì phù hợp
          </li>
          <li className={'border-l-2 border-[#1695a0] p-2 my-3 sm:w-1/6'}>
            Đã đi khám nhiều nơi, nhiều bác sĩ mà bệnh không khỏi
          </li>
          <li className={'border-l-2 border-[#1695a0] p-2 my-3 sm:w-1/6'}>
            Băn khoăn không biết bác sĩ có giỏi không, kinh nghiệm khám chữa
            bệnh như thế nào?
          </li>
          <li className={'border-l-2 border-[#1695a0] p-2 my-3 sm:w-1/6'}>
            Thông tin về quá trình đào tạo, kinh nghiệm công tác của bác sĩ có
            chính xác không?
          </li>
          <li className={'border-l-2 border-[#1695a0] p-2 my-3 sm:w-1/6'}>
            Liệu lịch khám, nơi khám của bác sĩ có phừ hợp với thời gian, kế
            hoạch của mình không?
          </li>
          <li className={'border-l-2 border-[#1695a0] p-2 my-3 sm:w-1/6'}>
            Liệu nơi khám bệnh có đầy đủ trang thiết bị hay không? Giá khám và
            chiếu xét nghiệm cụ thể như thế nào?
          </li>
        </ul>
      </div>
      {/*section 3: why can our solve help you?*/}
      <div
        className={
          'w-full flex flex-col justify-center items-center my-5 bg-white'
        }
      >
        {/*title*/}
        <div
          className={
            'w-[90%] text-[#1695a0] font-bold text-2xl text-left border-b-2 border-[#1695a0] p-2'
          }
        >
          <p className={'w-full sm:w-[60%]'}>
            Tại sao 4ChillyGuys lại giải quyết được vấn đề của bạn?
          </p>
        </div>
        {/*main content*/}
        <ul
          className={
            'w-[90%] grid grid-flow-col grid-rows-6 sm:grid-rows-2 grid-cols-1 sm:grid-cols-3 gap-4 px-2 sm:px-0 py-4'
          }
        >
          <li
            className={'w-full border-2 border-gray-300 p-4 my-3 text-center'}
          >
            <span className={'w-full flex justify-center items-center'}>
              <BsPersonFill color={'#059669'} size={50} />
            </span>
            <span className={'text-[#1695a0] font-bold'}>BÁC SĨ UY TÍN</span>
            <br />
            <span>
              Mạng lưới bác sĩ chuyên khoa giỏi đã/đang công tác tại các biện
              lớn hàng đầu, với thông tin đã xác thực.
            </span>
          </li>
          <li
            className={'w-full border-2 border-gray-300 p-4 my-3 text-center'}
          >
            <span className={'w-full flex justify-center items-center'}>
              <BsCheck2Square color={'#059669'} size={50} />
            </span>
            <span className={'text-[#1695a0] font-bold'}>
              ĐÚNG NGƯỜI ĐÚNG BỆNH
            </span>
            <br />
            <span>
              Dầy đủ các chuyên khoa, thông tin bác sĩ chi tiết, các bài hướng
              dẫn dễ hiểu, người bệnh dễ dàng lựa chọn bác sĩ phù hợp
            </span>
          </li>
          <li
            className={'w-full border-2 border-gray-300 p-4 my-3 text-center'}
          >
            <span className={'w-full flex justify-center items-center'}>
              <BsHeadphones color={'#059669'} size={50} />
            </span>
            <span className={'text-[#1695a0] font-bold'}>HỖ TRỢ CHU ĐÁO</span>
            <br />
            <span>
              Chúng tôi hỗ trợ bệnh nhân trong suốt quá trình trước khám, trong
              khi đi khám và sau khi đi khám một cách hiệu quả.
            </span>
          </li>
          <li
            className={'w-full border-2 border-gray-300 p-4 my-3 text-center'}
          >
            <span className={'w-full flex justify-center items-center'}>
              <BsClockFill color={'#059669'} size={50} />
            </span>
            <span className={'text-[#1695a0] font-bold'}>ĐẶT LỊCH 24/7</span>
            <br />
            <span>
              Lịch khám của bác sĩ hiển thị 24/7 giúp bạn chủ động lựa chọn lịch
              khám phù hợp
            </span>
          </li>
          <li
            className={'w-full border-2 border-gray-300 p-4 my-3 text-center'}
          >
            <span className={'w-full flex justify-center items-center'}>
              <BsPiggyBankFill color={'#059669'} size={50} />
            </span>
            <span className={'text-[#1695a0] font-bold'}>
              MIỄN PHÍ ĐẶT LỊCH
            </span>
            <br />
            <span>
              Đặt khám qua 4ChillyGuys là miễn phí đặt lịch. Chi phí khám chữa
              bệnh, bạn thanh toán trực tiếp tại nơi khám.
            </span>
          </li>
          <li
            className={'w-full border-2 border-gray-300 p-4 my-3 text-center'}
          >
            <span className={'w-full flex justify-center items-center'}>
              <BsSuitHeart color={'#059669'} size={50} />
            </span>
            <span className={'text-[#1695a0] font-bold'}>
              KHÁM LẠI MIỄN PHÍ
            </span>
            <br />
            <span>
              Nếu người bệnh không hài lòng với qui trình khám, tư vấn và phương
              án điều trị của bác sĩ.
            </span>
          </li>
        </ul>
      </div>
      {/*section 4: How do our system work?*/}
      <div
        className={
          'w-full flex flex-col sm:flex-row justify-center items-center sm:items-start px-3 py-5 my-5 bg-gray-600 text-white'
        }
      >
        {/*video here*/}
        <span
          className={'w-full sm:w-[50%] flex justify-center items-center my-2'}
        >
          <iframe
            width="w-fit"
            height="h-fit"
            src="https://www.youtube.com/embed/fHs7Mx9h4FM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </span>
        <div className={'sm:p-2 sm:w-[50%]'}>
          {/*title*/}
          <div className={'w-full text-xl font-bold my-1'}>
            4ChillyGuys hoạt động như thế nào?
          </div>
          {/*main content*/}
          <div className={'w-full'}>
            <p className={'my-1 whitespace-pre-line'}>
              BookingCare là nền tảng đặt lịch khám giúp bệnh nhân dễ dàng lựa
              chọn đúng bác sĩ từ mạng lưới bác sĩ chuyên khoa giỏi, với thông
              tin đã xác thực và đặt lịch nhanh chóng.
            </p>
            <ul>
              <li className={'my-1 whitespace-pre-line'}>
                1. Đội ngũ của BookingCare làm việc trực tiếp với các bác sĩ để
                xác thực các thông tin một cách chính xác, rõ ràng, cập nhật về
                chuyên khoa, quá trình huấn luyện - đào tạo, kinh nghiệm công
                tác.
              </li>
              <li className={'my-1 whitespace-pre-line'}>
                2. Cung cấp nội dung hướng dẫn giúp bệnh nhân dễ dàng lựa chọn
                bác sĩ phù hợp với vấn đề của mình để đi khám đạt hiệu quả cao.
              </li>
              <li className={'my-1 whitespace-pre-line'}>
                3. Hệ thống gợi ý danh sách bác sĩ phù hợp để bệnh nhân lựa chọn
                dựa trên dấu hiệu, triệu chứng hoặc lý do đi khám.
              </li>
              <li className={'my-1 whitespace-pre-line'}>
                4. Hệ thống sẽ cập nhật những ý kiến phản hồi của bệnh nhân đã
                đi khám với từng bác sĩ để bệnh nhân có thêm thông tin tham
                khảo, lựa chọn bác sĩ phù hợp.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*section 5: The benefits when choose our services*/}
      <div
        className={
          'w-full flex flex-col justify-center items-center p-2 my-5  '
        }
      >
        {/*title*/}
        <div className={'w-full text-xl font-bold my-1 px-2 py-1'}>
          Lợi ích đặt lịch khám thông qua 4ChillyGuys
        </div>
        {/*main content*/}
        <table className="w-full border-t border-gray-300">
          <thead>
            <tr className={'bg-gray-100'}>
              <th>Đặt lịch thông qua 4ChillyGuys</th>
              <th>Đặt trực tiếp tại bệnh viện</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-t border-gray-300 py-2">
              <td>
                <p className={'text-gray-600'}>Bác sĩ</p>
                <p className={'text-emerald-600'}>Nhiều bác sĩ để lựa chọn</p>
              </td>
              <td>
                <p className={'text-gray-600'}>*</p>
                <p className={'text-emerald-600'}>Lượng bác sĩ giới hạn</p>
              </td>
            </tr>
            <tr className=" border-t border-gray-300 py-2">
              <td>
                <p className={'text-gray-600'}>Đi khám</p>
                <p className={'text-emerald-600'}>
                  Khám đúng với bác sĩ đã chọn
                </p>
              </td>
              <td>
                <p className={'text-gray-600'}>*</p>
                <p className={'text-emerald-600'}>Không chọn được bác sĩ</p>
              </td>
            </tr>

            <tr className=" border-t border-gray-300 py-2">
              <td>
                <p className={'text-gray-600'}>Quyền lợi của người bệnh</p>
                <p className={'text-emerald-600'}>
                  4ChillyGUys hỡ trợ trước-trong và sau khám
                </p>
              </td>
              <td>
                <p className={'text-gray-600'}>*</p>
                <p className={'text-emerald-600'}>Tùy chọn theo từng đơn vị</p>
              </td>
            </tr>
            <tr className=" border-t border-gray-300 py-2">
              <td>
                <p className={'text-gray-600'}>Đặt lịch</p>
                <p className={'text-emerald-600'}>Mọi lúc mọi nơi</p>
              </td>
              <td>
                <p className={'text-gray-600'}>*</p>
                <p className={'text-emerald-600'}>Trong giờ hành chính</p>
              </td>
            </tr>
            <tr className=" border-t border-gray-300 py-2">
              <td>
                <p className={'text-gray-600'}>Giá khám & dịch vụ</p>
                <p className={'text-emerald-600'}>
                  Cập nhật rõ ràng, chi tiết, dễ hiểu
                </p>
              </td>
              <td>
                <p className={'text-gray-600'}>*</p>
                <p className={'text-emerald-600'}>Khó hiểu</p>
              </td>
            </tr>
            <tr className=" border-t border-gray-300 py-2">
              <td>
                <p className={'text-gray-600'}>Thời gian chờ</p>
                <p className={'text-emerald-600'}>Giảm thiểu</p>
              </td>
              <td>
                <p className={'text-gray-600'}>*</p>
                <p className={'text-emerald-600'}>Theo số thứ tự</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/*section 6: Famous doctor in our services*/}
      <div
        className={
          'w-full flex flex-col justify-center items-center p-2 my-5 bg-[#1695a0]'
        }
      >
        {/*title*/}
        <div
          className={
            'w-full text-xl font-bold my-1 px-2 py-1 flex justify-center item-center text-white'
          }
        >
          Một số bác sĩ trên 4ChillyGuys
        </div>
        {/*main content*/}
        <div></div>
      </div>
      {/*section 7:difficulty in operation*/}
      <div
        className={'w-full flex flex-col justify-center items-center p-2 my-5 '}
      >
        {/*title*/}
        <div className={'w-full my-1 px-3 py-1 text-left '}>
          <span>
            <p className={'font-bold text-xl p-2'}>Một số khó khăn hiện tại</p>
          </span>
          <div className={'sm:grid sm:grid-rows-2 sm:grid-cols-2'}>
            <span>
              <p className={'font-bold p-2'}>
                1. Trong một số trường hợp bệnh nhân vẫn phải chờ lâu
              </p>
              <p className={'p-1'}>
                Do đặc thù của khám chữa bệnh, người bệnh chưa được khám đúng
                giờ hẹn đã đặt lịch khám. Một số trường hợp có thể hẹn đúng giờ
                nhưng nhìn chung là thường có sai số so với giờ đã hẹn. Nhất là
                đối với một số bác sĩ quá đông bệnh nhân.
              </p>
              <p className={'p-1'}>
                Do đặc thù của khám chữa bệnh, người bệnh chưa được khám đúng
                giờ hẹn đã đặt lịch khám. Một số trường hợp có thể hẹn đúng giờ
                nhưng nhìn chung là thường có sai số so với giờ đã hẹn. Nhất là
                đối với một số bác sĩ quá đông bệnh nhân.
              </p>
            </span>
            <span>
              <p className={'font-bold p-2'}>
                2. Mạng lưới bác sĩ/cơ sở y tế tại Hà Nội và TP.HCM
              </p>
              <p className={'p-1'}>
                BookingCare sẵn sàng cung cấp dịch vụ không giới hạn trong lãnh
                thổ Việt Nam. Tuy nhiên, hiện tại các bác sĩ và mạng lưới cơ sở
                y tế tập trung tại Hà Nội và TP.HCM
              </p>
              <p className={'p-1'}>
                Vì vậy bệnh nhân ở xa Hà Nội hoặc TP.HCM gặp khó khăn trong việc
                tiếp cận dịch vụ chăm sóc sức khoẻ chất lượng cao. Chúng tôi
                luôn nỗ lực hết mình để hỗ trợ các bệnh nhân, nhất là các bệnh
                nhân ở tỉnh xa Hà Nội, TP.HCM sắp xếp được kế hoạch đi khám phù
                hợp, hiệu quả nhất.
              </p>
              <p className={'p-1'}>
                Đội ngũ BookingCare đang nỗ lực để mở rộng địa bàn phục vụ trên
                toàn quốc. Qua đó giúp người bệnh dễ dàng hơn trong việc lựa
                chọn bác sĩ và đi khám.
              </p>
            </span>
            <span>
              <p className={'font-bold p-2'}>
                Ngoài ra trong quá trình hoạt động, BookingCare gặp một số khó
                khăn và tồn tại khác như là:
              </p>
              <p className={'p-1'}>
                Thông tin về bác sĩ, phòng khám, bệnh viện trên BookingCare được
                xác thực chính xác, nhưng các trang mạng khác đã sao chép làm
                sai lệch nội dung và thiếu cập nhật. Từ đó gây khó khăn cho
                người bệnh trong việc tiếp cận và lựa chọn những thông tin chính
                xác.
              </p>
              <p className={'p-1'}>
                Các nội dung hướng dẫn người bệnh trên trang Cẩm nang của
                BookingCare cũng bị sao chép làm sai lệch nội dung có thể gây ra
                sự khó hiểu và nhầm lẫn cho người bệnh. Dù rằng chúng tôi đã cố
                gắng trong việc xây dựng, tổ chức, sắp xếp nội dung khoa học và
                có nguyên tắc.
              </p>
              <p className={'p-1'}>
                Bên cạnh đó, việc hỗ trợ bệnh nhân đặt lịch khám tại các cơ sở y
                tế công lập vẫn còn nhiều khó khăn. Chúng tôi đang nỗ lực để
                từng bước giúp người bệnh có nhiều sự lựa chọn dịch vụ chăm sóc
                sức khoẻ với chất lượng tốt hơn.
              </p>
            </span>
          </div>
        </div>
      </div>
      {/*section 8: booking support*/}
      <div
        className={
          'w-full flex flex-col justify-center items-center p-10 my-5 bg-gray-600'
        }
      >
        <BsSendFill color={'white'} size={40} />
        <p className={'text-xl text-emerald-300 font-bold mt-4'}>
          Hỗ trợ đặt lịch
        </p>
        <br />
        <p className={'text-white text-center'}>
          Xin vui lòng liên hệ với đội ngũ 4ChillyGuys để được hỗ trợ
        </p>
        <br />
        <p className={'text-emerald-300'}>
          <Link to={'/'}>support@4chillyguys.vn</Link>
        </p>
      </div>
    </div>
  );
};

export default AboutForPatient;
