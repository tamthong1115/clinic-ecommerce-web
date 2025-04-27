import React from 'react';

const DoctorList: React.FC = () => {
  return (
    <div className={'w-full h-full bg-white rounded-xl shadow-2xl'}>
      <h2>Doctor List</h2>
      <div className={'p-6 items-center flex justify-center'}>
        <table className={'w-[90%] h-[90%] rounded-xl'}>
          <thead
            className={
              'w-full h-full text-sm text-black text-left border-b-gray-300 '
            }
          >
            <tr>
              <th className={'p-3'}>Name</th>
              <th className={'p-3'}>Email</th>
              <th className={'p-3'}>Phone</th>
              <th className={'p-3'}>Status</th>
              <th className={'p-3'}></th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((item, index) => (
              <tr key={index} className={'items-center border-b-black'}>
                <td className="p-3 ">
                  <div className={'flex gap-2 items-center'}>
                    <span className={'font-bold'}>{item.name}</span>
                  </div>
                </td>
                <td className="p-3 ">
                  <div className={'flex gap-2 items-center'}>
                    <span className={'font-bold '}>{item.email}</span>
                  </div>
                </td>
                <td className="p-3 ">
                  <div className={'flex gap-2 items-center'}>
                    <span className={'font-bold '}>{item.phone}</span>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex gap-2 items-center">
                    <div
                      className={`px-2 py-1 rounded-2xl ${item.status === 'active' ? 'bg-green-100' : 'bg-red-100'}`}
                    >
                      <span
                        className={`px-1 py-1 rounded-xl text-xs text-white ${item.status === 'active' ? 'bg-green-600' : 'bg-red-500'}`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                </td>

                <td className="p-3 ">
                  <div
                    className={'flex gap-2 items-center hover:cursor-pointer'}
                  >
                    <img
                      className={'w-12 h-12 '}
                      src="/icon/icon-edit-colorful.png"
                      alt=""
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorList;

const doctors = [
  {
    name: 'Dr. Nguyễn Văn A',
    email: 'a.nguyen@example.com',
    phone: '0912345678',
    status: 'active',
  },
  {
    name: 'Dr. Trần Thị B',
    email: 'b.tran@example.com',
    phone: '0934567890',
    status: 'inactive',
  },
  {
    name: 'Dr. Lê Văn C',
    email: 'c.le@example.com',
    phone: '0901122334',
    status: 'active',
  },
  {
    name: 'Dr. Phạm Thị D',
    email: 'd.pham@example.com',
    phone: '0987654321',
    status: 'active',
  },
  {
    name: 'Dr. Hoàng Văn E',
    email: 'e.hoang@example.com',
    phone: '0977123456',
    status: 'inactive',
  },
  {
    name: 'Dr. Đỗ Thị F',
    email: 'f.do@example.com',
    phone: '0966543210',
    status: 'active',
  },
  {
    name: 'Dr. Võ Văn G',
    email: 'g.vo@example.com',
    phone: '0944332211',
    status: 'inactive',
  },
  {
    name: 'Dr. Bùi Thị H',
    email: 'h.bui@example.com',
    phone: '0933221100',
    status: 'active',
  },
  {
    name: 'Dr. Dương Văn I',
    email: 'i.duong@example.com',
    phone: '0922110033',
    status: 'active',
  },
  {
    name: 'Dr. Hà Thị J',
    email: 'j.ha@example.com',
    phone: '0911002233',
    status: 'inactive',
  },
  {
    name: 'Dr. Lý Văn K',
    email: 'k.ly@example.com',
    phone: '0900099887',
    status: 'active',
  },
  {
    name: 'Dr. Nguyễn Thị L',
    email: 'l.nguyen@example.com',
    phone: '0988997766',
    status: 'active',
  },
];
