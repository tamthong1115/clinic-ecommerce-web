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
import { ApiResponse, Page } from '../commonTypes.ts';
import { DoctorDetailResponse } from '@/api/doctor/doctorTypes.ts';
import { GetAllClinicsParams } from '@/api/public/clinic/clinicPublicService.ts';

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

export const createNewClinic = async (
  formData: FormData
): Promise<ClinicDTO> => {
  try {
    const response = await apiClient.post(
      endpoints.admin.createNewClinic,
      formData
    );
    return response.data;
  } catch (e) {
    throw new Error('Error when creating new clinic: ' + e);
  }
};

//Fetching data with token
export const findClinicByOwner = async (
  page: number,
  size: number
): Promise<Page<ClinicDTO>> => {
  try {
    const response = await apiClient.get<ApiResponse<Page<ClinicDTO>>>(
      endpoints.clinic.getClinicByOwner,
      {
        params: {
          page,
          size,
        },
      }
    );
    return response.data.data;
  } catch (e) {
    throw new Error('Error when fetching clinics by owner: ' + e);
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
): Promise<clinicServiceDTO> => {
  try {
    const response = await apiClient.put<ApiResponse<clinicServiceDTO>>(
      endpoints.clinic.updateServiceStatus,
      data
    );
    return response.data.data;
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

export const createDoctor = async (
  clinicId: string,
  doctorRequest: FormData
): Promise<DoctorDetailResponse> => {
  try {
    const response = await apiClient.post<ApiResponse<DoctorDetailResponse>>(
      endpoints.clinic.createDoctor(clinicId),
      doctorRequest,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );
    return response.data.data;
  } catch (e) {
    throw new Error('Error when creating doctor: ' + e);
  }
};

export const getOwner = async (clinicId: string): Promise<ClinicOwnerDTO> => {
  try {
    const response = await apiClient.get<ApiResponse<ClinicOwnerDTO>>(
      endpoints.admin.fetchClinicOwner(clinicId)
    );
    return response.data.data;
  } catch (e) {
    throw new Error('Error when fetch owner information' + e);
  }
};

export const getAllOwner = async ({
  page = 0,
  size = 10,
  sortBy = 'lastName',
  direction = 'asc',
}: GetAllClinicsParams): Promise<ApiResponse<Page<ClinicOwnerDTO>>> => {
  try {
    const response = await apiClient.get<ApiResponse<Page<ClinicOwnerDTO>>>(
      endpoints.admin.fetchOwner(
        page?.toString(),
        size?.toString(),
        sortBy,
        direction
      )
    );
    return response.data;
  } catch (e) {
    throw new Error(
      `Failed to fetch owner. Page: ${page}, Size: ${size}, SortBy: ${sortBy}, Direction:${direction}. Error: ${e}`
    );
  }
};
