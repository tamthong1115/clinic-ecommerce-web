import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useQuery } from '@tanstack/react-query';
import { DoctorScheduleDTO } from '@/api/doctor/doctorTypes.ts';
import { getDoctorSchedulesByDoctorId } from '@/api/doctor/doctorServices.ts';

function getDateOfWeek(dayOfWeek: string): Date {
  const dayMap: { [key: string]: number } = {
    SUNDAY: 0,
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
    FRIDAY: 5,
    SATURDAY: 6,
  };
  const today = new Date();
  const currentDay = today.getDay();
  const targetDay = dayMap[dayOfWeek.toUpperCase()];
  const diff = targetDay - currentDay;
  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + diff);
  return targetDate;
}

function transformSchedulesToEvents(schedules: DoctorScheduleDTO[]) {
  return schedules.map((schedule) => {
    const date = getDateOfWeek(schedule.dayOfWeek);
    const [startHour, startMinute] = schedule.startTime.split(':').map(Number);
    const [endHour, endMinute] = schedule.endTime.split(':').map(Number);

    const start = new Date(date);
    start.setHours(startHour, startMinute, 0);

    const end = new Date(date);
    end.setHours(endHour, endMinute, 0);

    return {
      id: schedule.scheduleId,
      title: 'Doctor Available',
      start,
      end,
    };
  });
}

const DoctorScheduleCalendar = ({ doctorId }: { doctorId?: string }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['doctorSchedules', doctorId],
    queryFn: () =>
      doctorId ? getDoctorSchedulesByDoctorId(doctorId) : Promise.resolve([]),
    enabled: !!doctorId, // Only fetch if doctorId is provided
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading schedules</div>;

  const events = doctorId ? transformSchedulesToEvents(data ?? []) : [];
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="timeGridWeek"
      events={events}
    />
  );
};

export default DoctorScheduleCalendar;
