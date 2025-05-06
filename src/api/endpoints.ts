import { buildUrlWithParams } from '../app/utils/urlBuilder.ts';

const endpoints = {
  auth: {
    register: '/auth/api/v1/register',
    login: '/auth/api/v1/login',
  },

  admin: {
    createClinicOwner: '/clinic/api/v1/admin/clinic-owners',
    createNewClinic: '/clinic/api/v1/admin/create',
  },

  clinic: {
    updateClinic: (id: string) => `/clinic/api/v1/clinic/update/${id}`,
    updateClinicStatus: (id: string) =>
      `/clinic/api/v1/clinic/set-status/${id}`,
    addNewServiceToClinic: '/clinic/api/v1/clinic/service-for-clinic/add',
    updateServiceStatus: '/clinic/api/v1/clinic/service-for-clinic/status',
    getClinicByOwner: '/clinic/api/v1/clinic/get-by-owner',
    getServiceByOwner: (id: string) =>
      `/clinic/api/v1/clinic/get-service/${id}`,
  },

  user: {
    profile: '/auth/api/v1/me',
  },
  public: {
    getAllService: (page?: string, size?: string) =>
      buildUrlWithParams('/public/api/v1/public/get-all-service', {
        page,
        size,
      }),
    getServiceById: (id: string) => `/public/api/v1/public/service/${id}`,
    getAllClinic: '/public/api/v1/public/get-all-clinic',
    getClinicById: (id: string) => `/public/api/v1/public/clinic/${id}`,
    getAllSpeciality: (page?: string, size?: string) =>
      buildUrlWithParams('/public/api/v1/public/speciality/get-all', {
        page,
        size,
      }),
    getServiceBySpecialityId: (specId: string, page?: string, size?: string) =>
      buildUrlWithParams(`/public/api/v1/public/service-by-specid/${specId}`, {
        page,
        size,
      }),
  },
};

export default endpoints;
