const OnEmergency = () => {
  return (
    <>
      <div
        className={
          'w-full h-full flex flex-col justify-center items-center m-10'
        }
      >
        <div
          className={
            'text-3xl text-[#015259] bg-[#EBFCFD] p-3 rounded-lg mb-10 mt-5 border-b-2 border-[#015259] text-center'
          }
        >
          On Emergency
        </div>
        <div className={'flex flex-col justify-center items-center'}>
          <p className={'p-2 m-4 text-center'}>
            Luôn bên bạn trong mọi tình huống khẩn cấp. <br />
            Khi bạn cần hỗ trợ y tế ngay lập tức, hãy tin tưởng chúng tôi.
            <br /> Đội ngũ bác sĩ và nhân viên y tế của chúng tôi luôn sẵn sàng
            24/7 để phản ứng nhanh, đưa ra hướng xử lý kịp thời và đưa bạn đến
            cơ sở y tế an toàn nhất.
            <br /> Chúng tôi hiểu rằng trong những thời điểm cấp bách, mỗi giây
            đều quý giá.
            <ul className={'list-item list-inside text-center p-2 m-3'}>
              <strong>Phạm vi hỗ trợ:</strong>
              <li>Cấp cứu tại nhà</li>
              <li> Hỗ trợ vận chuyển y tế</li>
              <li> Hướng dẫn sơ cứu từ xa qua điện thoại</li>
            </ul>
          </p>
          <p className={'p-2 m-4'}>
            {' '}
            Gọi ngay số khẩn cấp: <strong>012-345-6789</strong>
            <br />
            (Chúng tôi luôn có mặt chỉ sau vài phút)
          </p>
        </div>
      </div>
    </>
  );
};

export default OnEmergency;
