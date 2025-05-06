import { SpecialityDTO } from './specialityTypes.ts';
import apiClient from '../../client.ts';
import endpoints from '../../endpoints.ts';
import { ApiResponse, Page } from '../../commonTypes.ts';

export const getAllSpeciality = async (
  page?: number,
  size?: number
): Promise<Page<SpecialityDTO>> => {
  try {
    const response = await apiClient.get<ApiResponse<Page<SpecialityDTO>>>(
      endpoints.public.getAllSpeciality(page?.toString(), size?.toString())
    );
    return response.data.data;
  } catch (e) {
    throw new Error('Failed to fetch speciality' + e);
  }
};
