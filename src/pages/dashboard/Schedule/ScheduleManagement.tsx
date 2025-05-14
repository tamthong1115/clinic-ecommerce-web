// Danh sách các cuộc hẹn (lịch sử + sắp tới)
//
// Bộ lọc theo:
//
//   Thời gian
//
// Bệnh nhân
//
// Bác sĩ
//
// Trạng thái: Đã xác nhận, đang chờ, đã hủy...
//
// Chức năng:
//
//   Xác nhận / hủy lịch hẹn
//
// Cập nhật thông tin
//
// Xem chi tiết lịch sử

import { useAuth } from '@/context/AuthContext';
import DoctorScheduleCalendar from '@/pages/dashboard/Schedule/DoctorScheduleCalendar.tsx';

const ScheduleManagement: React.FC = () => {
  const { user } = useAuth();
  return (
    <div>
      <DoctorScheduleCalendar doctorId={user?.id} role={user?.role || ''} />
    </div>
  );
};

export default ScheduleManagement;
