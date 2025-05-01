import { ServiceDTO } from './serviceTypes.ts';
import apiClient from '../../client.ts';
import endpoints from '../../endpoints.ts';

export const getAllService = async (): Promise<ServiceDTO[]> => {
  try {
    const response = await apiClient.get(endpoints.public.getAllService);
    return response.data;
  } catch (e) {
    throw new Error('Failed to fetch service' + e);
  }
};

export const getServiceById = async (id: string): Promise<ServiceDTO> => {
  try {
    const response = await apiClient.get(endpoints.public.getServiceById(id));
    return response.data;
  } catch (e) {
    throw new Error('Failed to fetch service' + e);
  }
};

export const getServiceBySpecId = async (id: string): Promise<ServiceDTO[]> => {
  try {
    const response = await apiClient.get(
      endpoints.public.getServiceBySpecialityId(id)
    );
    return response.data;
  } catch (e) {
    throw new Error('Failed to fetch service with speciality: ' + id + e);
  }
};
