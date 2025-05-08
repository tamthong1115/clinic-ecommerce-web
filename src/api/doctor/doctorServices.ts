import apiClient from '../client.ts';
import endpoints from '../endpoints.ts';

import { DoctorScheduleDTO } from '@/api/doctor/doctorTypes.ts';

export const getDoctorSchedulesByDoctorId = async (): Promise<
  DoctorScheduleDTO[]
> => {
  try {
    const response = await apiClient.get(
      endpoints.doctor.getDoctorSchedulesByDoctorId
    );

    return response.data;
  } catch (error) {
    throw new Error('Error when fetching doctor schedules by doctorId' + error);
  }
};
