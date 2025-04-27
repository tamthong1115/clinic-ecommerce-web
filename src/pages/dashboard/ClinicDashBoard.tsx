import React from 'react';
import CardDashboardItem from '../clinic/components/CardDashboard.tsx';
import ChartFinance from '../clinic/components/ChartFinance.tsx';
import BarChar from '../clinic/components/BarChart.tsx';
import ScheduleDashboard from '../clinic/components/ScheduleDashboard.tsx';
import DoctorUp from '../clinic/components/DoctorUp.tsx';

const ClinicDashBoard: React.FC = () => {
  return (
    <div className={'flex-col flex-1 mr-10'}>
      <CardDashboardItem />
      <div className={'mt-6 gap-6 flex flex-row justify-between h-full'}>
        <div className={'w-[40%]'}>
          <BarChar />
        </div>
        <div className={'w-[60%]'}>
          <ChartFinance />
        </div>
      </div>
      <div className={'mt-6 gap-6 flex flex-col justify-between h-full'}>
        <ScheduleDashboard />
        <DoctorUp />
      </div>
    </div>
  );
};

export default ClinicDashBoard;

// 📊 Số lượt đặt lịch hôm nay / tuần này / tháng này
//
// 👨‍⚕️ Số bác sĩ đang làm việc
//
// 🧑‍🤝‍🧑 Số bệnh nhân đang được khám
//
// 💵 Doanh thu tổng (theo ngày / tháng)
//
// ⏳ Lịch khám sắp diễn ra
