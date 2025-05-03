import React from 'react';
import { Badge, Calendar, HStack, List } from 'rsuite';
import 'rsuite/Calendar/styles/index.css';

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
          <div className="w-full border-2 border-emerald-600 shadow-md shadow-gray-300 p-2 rounded-lg flex flex-row justify-center items-center my-2">
            <div className="text-emerald-600 w-[20%] text-center border-r-2 border-r-emerald-600">
              {item.time}
            </div>
            <div className={'w-[80%]'}>
              <div
                className={'font-bold w-full text-white bg-emerald-600 px-2'}
              >
                {item.title}
              </div>
              <div className={'w-full px-2'}>{item.content}</div>
            </div>
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
        { time: '10:30 am', title: 'Meeting', content: 'Something' },
        { time: '12:00 pm', title: 'Lunch', content: 'Something' },
      ];
    case 15:
      return [
        {
          time: '09:30 pm',
          title: 'Products Introduction Meeting',
          content: 'Something',
        },
        {
          time: '12:30 pm',
          title: 'Client entertaining',
          content: 'Something',
        },
        {
          time: '02:00 pm',
          title: 'Product design discussion',
          content: 'Something',
        },
        {
          time: '05:00 pm',
          title: 'Product test and acceptance',
          content: 'Something',
        },
        { time: '06:30 pm', title: 'Reporting', content: 'Something' },
      ];
    case 16:
      return [
        {
          time: '09:30 pm',
          title: 'Products Introduction Meeting',
          content: 'Something',
        },
        {
          time: '12:30 pm',
          title: 'Client entertaining',
          content: 'Something',
        },
        { time: '06:30 pm', title: 'Reporting', content: 'Something' },
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
