import { ServiceDTO } from './serviceTypes.ts';
import apiClient from '../../client.ts';
import endpoints from '../../endpoints.ts';
import { ApiResponse, Page } from '../../commonTypes.ts';

export const getAllService = async (
  page?: number,
  size?: number
): Promise<Page<ServiceDTO>> => {
  try {
    const response = await apiClient.get<ApiResponse<Page<ServiceDTO>>>(
      endpoints.public.getAllService(page?.toString(), size?.toString())
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

export const getServiceBySpecId = async (
  id: string,
  page?: number,
  size?: number
): Promise<Page<ServiceDTO>> => {
  try {
    const response = await apiClient.get<ApiResponse<Page<ServiceDTO>>>(
      endpoints.public.getServiceBySpecialityId(
        id,
        page?.toString(),
        size?.toString()
      )
    );
    return response.data.data;
  } catch (e) {
    throw new Error('Failed to fetch service with speciality: ' + id + e);
  }
};
