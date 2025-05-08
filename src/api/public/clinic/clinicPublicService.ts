import apiClient from '../../client.ts';
import endpoints from '../../endpoints.ts';
import { UUID } from 'crypto';
import { ApiResponse, Page } from '../../commonTypes.ts';
import { ClinicDTO } from '@/api/clinic/clinicTypes.ts';

export interface GetAllClinicsParams {
  page?: number;
  size?: number;
  sortBy?: string;
  direction?: 'asc' | 'desc';
}

export const getAllClinics = async ({
  page = 0,
  size = 10,
  sortBy = 'clinicName',
  direction = 'asc',
}: GetAllClinicsParams): Promise<ApiResponse<Page<ClinicDTO>>> => {
  try {
    const response = await apiClient.get<ApiResponse<Page<ClinicDTO>>>(
      endpoints.public.getAllClinic,
      {
        params: {
          page,
          size,
          sortBy,
          direction,
        },
      }
    );
    return response.data;
  } catch (e) {
    throw new Error(
      `Failed to fetch clinics. Page: ${page}, Size: ${size}, SortBy: ${sortBy}, Direction: ${direction}. Error: ${e}`
    );
  }
};

export const getClinicById = async (id: UUID): Promise<ClinicDTO> => {
  try {
    const response = await apiClient.get<ApiResponse<ClinicDTO>>(
      endpoints.public.getClinicById(id)
    );
    return response.data.data;
  } catch (e) {
    throw new Error('Failed to fetch clinic with id:' + id + e);
  }
};
