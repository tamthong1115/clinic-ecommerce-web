import apiClient from '../client.ts';
import { Page } from '../commonTypes.ts';
import endpoints from '../endpoints.ts';

import {
  DoctorBasicResponse,
  DoctorScheduleDTO,
  DoctorSearchCriteria,
  DoctorSearchResponse,
  DoctorScheduleDTO,
  DoctorScheduleRequest,
} from '@/api/doctor/doctorTypes.ts';

export const getDoctorsBasic = async (): Promise<Page<DoctorBasicResponse>> => {
  try {
    const response = await apiClient.get(endpoints.doctor.getDotorsBasic);

    return response.data;
  } catch (error) {
    throw new Error('Error when fetching doctors basic' + error);
  }
};

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

export const searchDoctors = async (
  criteria: DoctorSearchCriteria
): Promise<Page<DoctorSearchResponse>> => {
  try {
    const response = await apiClient.get(endpoints.doctor.searchDoctors, {
      params: criteria,
    });

    // If your backend wraps data inside `ResponseData`, extract `.data` field
    return response.data.data;
  } catch (error) {
    throw new Error('Error when searching doctors: ' + error);
  }
};

export const createSchedule = async (
  userId: string,
  request: DoctorScheduleRequest
): Promise<DoctorScheduleDTO> => {
  try {
    const response = await apiClient.post<DoctorScheduleDTO>(
      endpoints.doctor.createSchedule(userId),
      request
    );
    return response.data;
  } catch (error) {
    throw new Error('Error creating docotr schedule' + error);
  }
};
