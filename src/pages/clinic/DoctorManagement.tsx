// Danh sách bác sĩ trong phòng khám
//
// Thông tin chi tiết:
//
//   Tên, chuyên môn, lịch làm việc, trạng thái (đang làm / nghỉ)
//
// Phân công lịch trực
//
// Gán bác sĩ cho buổi khám
//

//Name Email Phone status action
import React from 'react';
import DoctorList from './components/DoctorList.tsx';

const DoctorManagement: React.FC = () => {
  return (
    <div className={'p-0 m-0'}>
      <DoctorList />
    </div>
  );
};

export default DoctorManagement;
