import { SpecialityDTO } from './specialityTypes.ts';
import apiClient from '../../client.ts';
import endpoints from '../../endpoints.ts';

export const getAllSpeciality = async (): Promise<SpecialityDTO[]> => {
  try {
    const response = await apiClient.get(endpoints.public.getAllSpeciality);
    return response.data;
  } catch (e) {
    throw new Error('Failed to fetch speciality' + e);
  }
};
