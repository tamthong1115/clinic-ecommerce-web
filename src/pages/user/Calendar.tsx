import * as Bs from 'react-icons/bs';

/**
 * @param {String} date -  using format: mmm/dd/yyyy as string
 * @param {String} time - using format: hh:mm and HH:mm as string
 * **/
const renderBookingCalendarItem = (date: string, time: string) => {
  return (
    <div
      className={
        'h-full w-[95%] flex flex-row justify-start items-center rounded-lg bg-[#00CC9B] overflow-hidden shadow-md'
      }
    >
      {/*Date here*/}
      <div
        className={
          'h-40 w-[20%] py-auto bg-[#024D50] text-white font-bold flex justify-center items-center text-center rounded-l-lg'
        }
      >
        {date}
      </div>
      {/*Content here*/}
      <div
        className={
          'h-40 w-[80%] ml-2 py-2 flex flex-col justify-between items-start'
        }
      >
        <div className="min-h[78%]">
          <ul className={'font-bold'}>
            <li>Galaxy</li>
            <li>4ChillyGuys Company&#39;s event</li>
            <li>Truong Tam Thong - B</li>
          </ul>
        </div>
        {/*Booking time here*/}
        <div
          className={
            'h-[20%] w-fit py-1 px-3 font-bold flex flex-row justify-start items-center bg-[#024D50] rounded-full'
          }
        >
          <Bs.BsClock color={'white'} />
          <div className={'text-white ml-2'}>{time}</div>
        </div>
      </div>
    </div>
  );
};
const Calendar = () => {
  return (
    <div className={'w-full h-full flex flex-col justify-center items-center'}>
      {renderBookingCalendarItem('10/3', '7:03')}
    </div>
  );
};

export default Calendar;
