import apiClient from '../../client.ts';
import endpoints from '../../endpoints';
import { ClinicOwnerDTO, CreateClinicOwnerRequest } from './clinicTypes.ts';

export const createClinicOwner = async (
  data: CreateClinicOwnerRequest
): Promise<ClinicOwnerDTO> => {
  try {
    const response = await apiClient.post(
      endpoints.clinic.createClinicOwner,
      data
    );
    return response.data;
  } catch (error) {
    throw new Error('Error when creating clinic owner' + error);
  }
};
