import React from 'react';

const data = [
  {
    name: 'Trương Tam Thông',
    doctor: 'Đỗ Tất Cường',
    date: '25/4/2025',
    status: 'Pending',
  },
  {
    name: 'Lê Vũ Hoàng',
    doctor: 'Nguyễn Thanh Liêm',
    date: '2/5/2025',
    status: 'Pending',
  },

  {
    name: 'Cao Nhật Hào',
    doctor: 'Trần Trung Dũng',
    date: '20/4/2025',
    status: 'Completed',
  },

  {
    name: 'Lâm Thành Duy',
    doctor: 'Phạm Nhật An',
    date: '22/4/2025',
    status: 'Completed',
  },
];

const ScheduleDashboard: React.FC = () => {
  return (
    <div
      className={'w-full h-full bg-white flex flex-col rounded-xl shadow-2xl'}
    >
      <h2 className={'text-black text-[1rem] font-bold p-6'}>
        Upcoming Appointments
      </h2>
      <table>
        <thead>
          <tr className="text-sm text-gray-500 text-left">
            <th className={'px-3 pb-4'}>Patient</th>
            <th className={'px-3 pb-4'}>Doctor</th>
            <th className={'px-3 pb-4'}>Date</th>
            <th className={'px-3 pb-4'}>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={`${item.status === 'Completed' ? 'bg-green-100 hover:bg-green-300' : 'bg-yellow-100 hover:bg-yellow-300'} transition duration-200 items-center border-b`}
            >
              <td className="p-3 ">
                <div className={'flex gap-2 items-center'}>
                  <img
                    className={'w-8 h-8'}
                    src="/icon/icon-doctor-inactive.png"
                    alt=""
                  />
                  <span className={'font-bold '}>{item.name}</span>
                </div>
              </td>
              <td className="p-3 ">
                <div className={'flex gap-2 items-center'}>
                  <img
                    className={'w-8 h-8'}
                    src="/icon/icon-doctor-inactive.png"
                    alt=""
                  />
                  <span className={'font-bold'}>{item.doctor}</span>
                </div>
              </td>
              <td className="p-3 font-bold">{item.date}</td>
              <td className="p-3 font-bold">
                <span
                  className={`py-1 text-xs font-semibold ${
                    item.status === 'Completed'
                      ? 'text-green-700'
                      : 'text-yellow-700'
                  }`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleDashboard;
