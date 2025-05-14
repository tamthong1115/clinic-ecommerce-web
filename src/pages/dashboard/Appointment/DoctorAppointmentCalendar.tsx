import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useQuery } from '@tanstack/react-query';
import { getCalendarAppointments } from '@/api/appointment/appointmentServices';
import { AppointmentDTO } from '@/api/appointment/appointmentTypes.ts';
import Spinner from '@/components/Spinner/Spinner';

const transformAppointmentsToEvents = (
  data: Record<string, AppointmentDTO[]>
) => {
  const events = [];

  for (const date in data) {
    const appointments = data[date];

    for (const appointment of appointments) {
      const startDateTime = new Date(`${date}T${appointment.startTime}`);
      const endDateTime = new Date(`${date}T${appointment.endTime}`);

      events.push({
        id: appointment.appointmentId,
        title: `${appointment.status}`,
        start: startDateTime,
        end: endDateTime,
        backgroundColor: getStatusColor(appointment.status),
        borderColor: getStatusColor(appointment.status),
      });
    }
  }

  return events;
};

function getStatusColor(status: string): string {
  switch (status) {
    case 'PENDING':
      return '#facc15'; // yellow
    case 'CONFIRMED':
      return '#4ade80'; // green
    case 'COMPLETED':
      return '#60a5fa'; // blue
    case 'CANCELLED':
      return '#f87171'; // red
    default:
      return '#a3a3a3'; // gray
  }
}

const DoctorAppointmentCalendar = ({ doctorId }: { doctorId: string }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['calendarAppointments', doctorId],
    queryFn: () => getCalendarAppointments(doctorId),
    enabled: !!doctorId,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <Spinner type="PacmanLoader" color="#4fd1c5" size={50} />
      </div>
    );
  }
  if (error) return <div>Error loading appointments</div>;

  const events = transformAppointmentsToEvents(data ?? {});

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="timeGridWeek"
      events={events}
      height="auto"
    />
  );
};

export default DoctorAppointmentCalendar;
