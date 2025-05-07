import apiClient from '../client.ts';
import endpoints from '../endpoints.ts';
import {
  ClinicDTO,
  ClinicOwnerDTO,
  clinicServiceDTO,
  clinicServiceRequest,
  CreateClinicOwnerRequest,
  serviceInClinic,
  UpdateClinicRequest,
} from './clinicTypes.ts';
import { ApiResponse } from '../commonTypes.ts';

export const createClinicOwner = async (
  data: CreateClinicOwnerRequest
): Promise<ClinicOwnerDTO> => {
  try {
    const response = await apiClient.post(
      endpoints.admin.createClinicOwner,
      data
    );
    return response.data;
  } catch (error) {
    throw new Error('Error when creating clinic owner' + error);
  }
};

//Fetching data with token
export const findClinicByOwner = async (): Promise<ClinicDTO[]> => {
  try {
    const response = await apiClient.get<ApiResponse<ClinicDTO[]>>(
      endpoints.clinic.getClinicByOwner
    );
    return response.data.data;
  } catch (e) {
    throw new Error('Error when fetching clinic ' + e);
  }
};

//Update information for clinic
export const updateClinicInfor = async (
  id: string,
  data: FormData
): Promise<ClinicDTO> => {
  try {
    const response = await apiClient.put(
      endpoints.clinic.updateClinic(id),
      data,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );
    return response.data.data;
  } catch (e) {
    throw new Error('Error when update information ' + e);
  }
};

//Update Status for clinic
export const updateStatusClinic = async (
  id: string,
  data: UpdateClinicRequest
): Promise<string> => {
  try {
    const response = await apiClient.patch(
      endpoints.clinic.updateClinicStatus(id),
      data
    );
    return response.data.data;
  } catch (e) {
    throw new Error('Error when update status ' + e);
  }
};

//Add new service to clinic
export const addNewService = async (
  data: clinicServiceRequest
): Promise<serviceInClinic> => {
  try {
    const response = await apiClient.post<ApiResponse<serviceInClinic>>(
      endpoints.clinic.addNewServiceToClinic,
      data
    );
    return response.data.data;
  } catch (e) {
    throw new Error('Error when add new service to clinic' + e);
  }
};

//Update status of service
export const setStatusForService = async (
  data: clinicServiceRequest
): Promise<string> => {
  try {
    const response = await apiClient.put<ApiResponse<clinicServiceDTO>>(
      endpoints.clinic.updateServiceStatus,
      data
    );
    return response.data.message;
  } catch (e) {
    throw new Error('Error when update status of service ' + e);
  }
};

//Get service in clinic
export const getServiceInClinic = async (
  id: string
): Promise<serviceInClinic[]> => {
  try {
    const response = await apiClient.get<ApiResponse<serviceInClinic[]>>(
      endpoints.clinic.getServiceByOwner(id)
    );
    return response.data.data;
  } catch (e) {
    throw new Error('\n ' + e);
  }
};
