export default function MainPresent() {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#1695a0]/70 px-4 text-white text-center space-y-6">
        <h2 className="text-2xl md:text-4xl font-semibold leading-tight">
          Đặt Lịch Khám Nhanh Chóng – Chăm Sóc Sức Khỏe Toàn Diện
        </h2>
        <p className="max-w-3xl text-lg md:text-xl leading-relaxed">
          &#34; Hãy chủ động bảo vệ sức khỏe của bạn và gia đình bằng cách đặt
          lịch khám nhanh chóng và tiện lợi ngay hôm nay tại phòng khám của
          chúng tôi. Chỉ mất 1 phút để đặt lịch – hãy để chúng tôi đồng hành
          cùng sức khỏe của bạn!&#34;
        </p>

        <button className="bg-white text-gray-800 px-6 py-3 rounded-full flex items-center gap-2 shadow-lg hover:bg-gray-100 transition-all">
          <p className="font-semibold text-base md:text-lg">Đặt lịch ngay</p>
          <img src="/icon/icon-flag.png" alt="flag" className="w-6 h-6" />
        </button>
      </div>
    </>
  );
}
