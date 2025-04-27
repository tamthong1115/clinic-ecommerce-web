import React from 'react';
import * as Bs from 'react-icons/bs';
import { Badge, Calendar, HStack, List } from 'rsuite';
import 'rsuite/Calendar/styles/index.css';

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

const ShowCalendar = () => {
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleSelect = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <HStack spacing={10} style={{ height: 320 }} alignItems="flex-start" wrap>
        <Calendar
          compact
          renderCell={renderCell}
          onSelect={handleSelect}
          style={{ width: 320 }}
        />
        <TodoList date={selectedDate} />
      </HStack>
    </div>
  );
};

const TodoList = ({ date }) => {
  const list = getTodoList(date);

  if (!list.length) {
    return null;
  }

  return (
    <List style={{ flex: 1 }}>
      {list.map((item) => (
        <List.Item key={item.time} index={item.time}>
          <div className="border-1 border-gray-600 shadow-md shadow-gray-600">
            <div className="text-emerald-600">{item.time}</div>
            <div>{item.title}</div>
          </div>
        </List.Item>
      ))}
    </List>
  );
};

function getTodoList(date) {
  if (!date) {
    return [];
  }
  const day = date.getDate();

  switch (day) {
    case 10:
      return [
        { time: '10:30 am', title: 'Meeting' },
        { time: '12:00 pm', title: 'Lunch' },
      ];
    case 15:
      return [
        { time: '09:30 pm', title: 'Products Introduction Meeting' },
        { time: '12:30 pm', title: 'Client entertaining' },
        { time: '02:00 pm', title: 'Product design discussion' },
        { time: '05:00 pm', title: 'Product test and acceptance' },
        { time: '06:30 pm', title: 'Reporting' },
      ];
    default:
      return [];
  }
}

function renderCell(date) {
  const list = getTodoList(date);

  if (list.length) {
    return <Badge className="bg-emerald-600 rounded-full h-2 w-2">.</Badge>;
  }

  return null;
}

const CalendarBooking = () => {
  return (
    <div className={'w-full h-full flex flex-col justify-center items-center'}>
      {ShowCalendar()}
    </div>
  );
};

export default CalendarBooking;
