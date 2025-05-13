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
          <p className={'p-2 m-4'}>Bla Bla Bla</p>
          <p className={'p-2 m-4'}>Call: 012-345-6789</p>
        </div>
      </div>
    </>
  );
};

export default OnEmergency;
