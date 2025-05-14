import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getDoctorsBasic } from '@/api/doctor/doctorServices.ts';
import Spinner from '@/components/Spinner/Spinner.tsx';

const DoctorList: React.FC = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['doctorsBasic'],
    queryFn: getDoctorsBasic,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <Spinner type="PacmanLoader" color="#4fd1c5" size={50} />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-full text-red-500">
        Error: {(error as Error).message}
      </div>
    );
  }

  const doctors = data?.content || [];

  return (
    <div className={'w-full h-full bg-white rounded-xl shadow-2xl'}>
      <h2 className="text-center text-xl font-bold my-4">Doctor List</h2>
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
            {doctors.map((doctor) => (
              <tr key={doctor.id} className={'items-center border-b-black'}>
                <td className="p-3 ">
                  <div className={'flex gap-2 items-center'}>
                    <span className={'font-bold'}>
                      {doctor.firstName} {doctor.lastName}
                    </span>
                  </div>
                </td>
                <td className="p-3 ">
                  <div className={'flex gap-2 items-center'}>
                    <span className={'font-bold '}>{doctor.email}</span>
                  </div>
                </td>
                <td className="p-3 ">
                  <div className={'flex gap-2 items-center'}>
                    <span className={'font-bold '}>{doctor.phone}</span>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex gap-2 items-center">
                    <div
                      className={`px-2 py-1 rounded-2xl ${
                        doctor.status === 'active'
                          ? 'bg-green-100'
                          : 'bg-red-100'
                      }`}
                    >
                      <span
                        className={`px-1 py-1 rounded-xl text-xs text-white ${
                          doctor.status === 'active'
                            ? 'bg-green-600'
                            : 'bg-red-500'
                        }`}
                      >
                        {doctor.status}
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
                      alt="Edit"
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
