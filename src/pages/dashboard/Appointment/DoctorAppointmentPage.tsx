import { useAuth } from '@/context/AuthContext.tsx';
import DoctorAppointmentCalendar from './DoctorAppointmentCalendar';

const DoctorAppointmentPage = () => {
  const { user } = useAuth();

  return (
    <div className="w-full h-full bg-white rounded-xl shadow-2xl p-6">
      <h2 className="text-xl font-bold mb-4">Lịch hẹn của tôi</h2>
      {user?.id ? (
        <DoctorAppointmentCalendar doctorId={user.id} />
      ) : (
        <div className="text-red-500">Không tìm thấy thông tin bác sĩ.</div>
      )}
    </div>
  );
};

export default DoctorAppointmentPage;
