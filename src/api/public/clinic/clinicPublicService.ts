import { ClinicDTO } from './clinicTypes.ts';
import apiClient from '../../client.ts';
import endpoints from '../../endpoints.ts';
import { UUID } from 'crypto';

export const getAllClinic = async (): Promise<ClinicDTO[]> => {
  try {
    const response = await apiClient.get(endpoints.public.getAllClinic);
    return response.data;
  } catch (e) {
    throw new Error('Failed to fetch clinic' + e);
  }
};

export const getClinicById = async (id: UUID): Promise<ClinicDTO> => {
  try {
    const response = await apiClient.get(endpoints.public.getClinicById(id));
    return response.data;
  } catch (e) {
    throw new Error('Failed to fetch clinic with id:' + id + e);
  }
};
