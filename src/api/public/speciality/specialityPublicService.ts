import { SpecialityDTO } from './specialityTypes.ts';
import apiClient from '../../client.ts';
import endpoints from '../../endpoints.ts';
import { ApiResponse } from '../commonTypes.ts';

export const getAllSpeciality = async (): Promise<SpecialityDTO[]> => {
  try {
    const response = await apiClient.get<ApiResponse<SpecialityDTO[]>>(
      endpoints.public.getAllSpeciality
    );
    return response.data.data;
  } catch (e) {
    throw new Error('Failed to fetch speciality' + e);
  }
};
