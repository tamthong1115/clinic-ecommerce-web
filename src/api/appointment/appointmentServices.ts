import apiClient from '../client.ts';
import endpoints from '../endpoints.ts';
import { AppointmentCreateDTO, AppointmentDTO } from './appointmentTypes.ts';

export const createAppointment = async (
  appointmentData: AppointmentCreateDTO
): Promise<AppointmentDTO> => {
  try {
    const response = await apiClient.post<AppointmentDTO>(
      endpoints.appointment.create,
      appointmentData
    );

    return response.data;
  } catch (error) {
    throw new Error('Error creating appointment: ' + error);
  }
};

export const getCalendarAppointments = async (
  userId: string,
  referenceDate?: string
): Promise<Record<string, AppointmentDTO[]>> => {
  try {
    const response = await apiClient.get<Record<string, AppointmentDTO[]>>(
      endpoints.appointment.calendarAppointments,
      {
        params: {
          userId,
          ...(referenceDate ? { referenceDate } : {}),
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Error fetching calendar appointments: ' + error);
  }
};
