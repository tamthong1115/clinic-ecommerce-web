const WhatWeDo = () => {
  return (
    <section className="w-full h-full py-12 px-6 bg-white text-gray-800">
      <h2 className="text-4xl font-semibold text-center mb-4 relative inline-block w-full">
        <span className="px-4 py-1 rounded shadow-sm">What We Do</span>
      </h2>

      <div className="mt-8 flex flex-col md:flex-row items-center md:items-start gap-10 max-w-6xl mx-auto">
        <div className="w-full md:w-1/2">
          <img
            src="/image/wwd.jpg"
            alt="Doctor in surgery"
            className="w-full h-auto object-cover border-4 border-cyan-300"
          />
        </div>

        <div className="w-full md:w-1/2">
          <p className="text-lg leading-relaxed mb-8">
            Chúng tôi cung cấp giải pháp chăm sóc sức khỏe toàn diện cho cộng
            đồng, từ chẩn đoán ban đầu đến điều trị chuyên sâu. Với đội ngũ bác
            sĩ giàu kinh nghiệm và trang thiết bị hiện đại, phòng khám của chúng
            tôi mang đến các dịch vụ như khám nội tổng quát, nhi khoa, da liễu,
            sản khoa, tim mạch, chẩn đoán hình ảnh và tầm soát ung thư. Chúng
            tôi cam kết không chỉ điều trị bệnh lý mà còn đồng hành cùng bạn
            trong hành trình chăm sóc sức khỏe lâu dài, bền vững.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {[
              { label: 'Nội tổng quát', icon: '/icon/icon-ong-nghe-1.png' },
              {
                label: 'Ngoại tổng quát',
                icon: '/icon/icon-ngoai-tong-quat.png',
              },
              { label: 'Nhi khoa', icon: '/icon/icon-nhi-khoa.png' },
              { label: 'Da liễu', icon: '/icon/icon-da-lieu.png' },
              { label: 'Tai mũi họng', icon: '/icon/icon-ear.png' },
              { label: 'Chuẩn đoán', icon: '/icon/icon-chuan-doan.png' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center ">
                <div
                  className={
                    'border border-cyan-400 p-2 bg-white hover:bg-[#4fd1c5] duration-750 transition ease-in-out'
                  }
                >
                  <img src={item.icon} alt={item.label} className="w-12 h-12" />
                </div>
                <p className="text-sm text-center font-medium mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center md:justify-center">
            <button className="flex items-center text-white rounded hover:bg-cyan-600">
              <span className={'bg-cyan-500 w-full h-full p-3'}>
                VIEW ALL SERVICES
              </span>
              <img
                src="/icon/icon-eye.png"
                alt="view icon"
                className="w-12 h-12 border border-teal-500"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
