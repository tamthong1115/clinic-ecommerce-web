import { ServiceDTO } from './serviceTypes.ts';
import apiClient from '../../client.ts';
import endpoints from '../../endpoints.ts';
import { ApiResponse } from '../commonTypes.ts';

export const getAllService = async (): Promise<ServiceDTO[]> => {
  try {
    const response = await apiClient.get<ApiResponse<ServiceDTO[]>>(
      endpoints.public.getAllService
    );
    return response.data.data;
  } catch (e) {
    throw new Error('Failed to fetch service' + e);
  }
};

export const getServiceById = async (id: string): Promise<ServiceDTO> => {
  try {
    const response = await apiClient.get<ApiResponse<ServiceDTO>>(
      endpoints.public.getServiceById(id)
    );
    return response.data.data;
  } catch (e) {
    throw new Error('Failed to fetch service' + e);
  }
};

export const getServiceBySpecId = async (id: string): Promise<ServiceDTO[]> => {
  try {
    const response = await apiClient.get<ApiResponse<ServiceDTO[]>>(
      endpoints.public.getServiceBySpecialityId(id)
    );
    return response.data.data;
  } catch (e) {
    throw new Error('Failed to fetch service with speciality: ' + id + e);
  }
};
