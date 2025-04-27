import React from 'react';

const data = [
  {
    doctor: 'Đỗ Tất Cường',
    value: 12,
    speciality: 'Nội khoa',
  },

  {
    doctor: 'Nguyễn Thanh Liêm',
    value: 20,
    speciality: 'Tai Mũi Họng',
  },

  {
    doctor: 'Phạm Nhật An',
    value: 8,
    speciality: 'Nha khoa',
  },
];

const DoctorUp: React.FC = () => {
  return (
    <div
      className={'w-full h-full bg-white flex flex-col rounded-xl shadow-2xl'}
    >
      <h2 className={'text-black text-[1rem] font-bold p-6'}>
        Upcoming Doctor
      </h2>
      <table>
        <thead>
          <tr className="text-sm text-gray-500 text-left bg-gray-100 ">
            <th className={'px-3 py-4'}>Doctor</th>
            <th className={'px-3 py-4'}>Number of examinations</th>
            <th className={'px-3 py-4'}>Specialty</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={` bg-gray-200 hover:bg-gray-400 transition duration-200 items-center border-b-black`}
            >
              <td className="p-3 ">
                <div className={'flex gap-2 items-center'}>
                  <img
                    className={'w-8 h-8'}
                    src="/icon/icon-doctor-inactive.png"
                    alt=""
                  />
                  <span className={'font-bold '}>{item.doctor}</span>
                </div>
              </td>
              <td className="p-3 ">
                <div className={'flex gap-2 items-center'}>
                  <img
                    className={'w-8 h-8'}
                    src="/icon/icon-doctor-inactive.png"
                    alt=""
                  />
                  <span className={'font-bold'}>{item.value}</span>
                </div>
              </td>
              <td className="p-3 font-bold">{item.speciality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorUp;
