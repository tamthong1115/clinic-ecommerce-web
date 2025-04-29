const WhoWeAre = () => {
  return (
    <>
      <section className="w-full py-16 px-6 bg-[#1695a0]/70 text-white h-full items-center">
        <div className={'w-full items-center text-center mb-10 flex'}>
          <h2 className="text-3xl font-semibold w-full  ">
            <span className={'pb-2 bg-[#015259] px-6 py-1 rounded-xl'}>
              Who We Are
            </span>
          </h2>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
          <div className="md:w-1/2 space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className=" p-3 border-double border-8 border-white group hover:bg-white duration-800 transition-colors ease-out ">
                  <div className="relative w-10 h-10">
                    <img
                      src="/icon/icon-doctor-rmbg.png"
                      alt="default"
                      className="absolute inset-0 w-full h-full transition-opacity duration-800 opacity-100 group-hover:opacity-0"
                    />
                    <img
                      src="/icon/icon-doctor-hover-removebg.png"
                      alt="hover"
                      className="absolute inset-0 w-full h-full transition-opacity duration-800 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-3xl font-bold">54</p>
                  <p className="text-sm">Doctor(s)</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className=" p-3 border-double border-8 border-white group hover:bg-white duration-800 transition-colors ease-out ">
                  <div className="relative w-10 h-10">
                    <img
                      src="/icon/icon-ambulance-default.png"
                      alt="default"
                      className="absolute inset-0 w-full h-full transition-opacity duration-800 opacity-100 group-hover:opacity-0"
                    />
                    <img
                      src="/icon/icon-ambulance-hover.png"
                      alt="hover"
                      className="absolute inset-0 w-full h-full transition-opacity duration-800 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-3xl font-bold">130</p>
                  <p className="text-sm">Room(s)</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className=" p-3 border-double border-8 border-white group hover:bg-white duration-800 transition-colors ease-out ">
                  <div className="relative w-10 h-10">
                    <img
                      src="/icon/icon-calendar-default.png"
                      alt="default"
                      className="absolute inset-0 w-full h-full transition-opacity duration-800 opacity-100 group-hover:opacity-0"
                    />
                    <img
                      src="/icon/icon-calendar-hover.png"
                      alt="hover"
                      className="absolute inset-0 w-full h-full transition-opacity duration-800 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-3xl font-bold">51</p>
                  <p className="text-sm">Year of Experience(s)</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className=" p-3 border-double border-8 border-white group hover:bg-white duration-800 transition-colors ease-out ">
                  <div className="relative w-10 h-10">
                    <img
                      src="/icon/icon-clock-default.png"
                      alt="default"
                      className="absolute inset-0 w-full h-full transition-opacity duration-800 opacity-100 group-hover:opacity-0"
                    />
                    <img
                      src="/icon/icon-clock-hover.png"
                      alt="hover"
                      className="absolute inset-0 w-full h-full transition-opacity duration-800 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-3xl font-bold">168</p>
                  <p className="text-sm">Opening Hours per Week</p>
                </div>
              </div>
            </div>
            <p className="text-base leading-relaxed mt-4">
              Chúng tôi là đơn vị tiên phong trong việc cung cấp dịch vụ y tế
              chất lượng cao với đội ngũ bác sĩ tận tâm, giàu kinh nghiệm. Với
              hơn 50 năm kinh nghiệm và hệ thống phòng khám hiện đại, chúng tôi
              cam kết đồng hành cùng bạn trong việc chăm sóc sức khỏe một cách
              toàn diện và bền vững.
            </p>
          </div>

          <div className="md:w-1/2 flex items-center justify-center">
            <img
              src="/image/wwa.jpg"
              alt="Operation Room"
              className="w-2/3 h-auto object-cover border-4 border-white"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
