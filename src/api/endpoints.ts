import { buildUrlWithParams } from '../app/utils/urlBuilder.ts';

const endpoints = {
  auth: {
    register: '/auth/api/v1/register',
    login: '/auth/api/v1/login',
  },

  admin: {
    createClinicOwner: '/clinic/api/v1/admin/clinic-owners',
    createNewClinic: '/clinic/api/v1/clinic/create-clinic',
    fetchClinicOwner: (id: string) => `/clinic/api/v1/admin/get-owner/${id}`,
    fetchOwner: (
      page?: string,
      size?: string,
      sortBy?: string,
      direction?: string
    ) =>
      buildUrlWithParams('/clinic/api/v1/admin/get-owner', {
        page,
        size,
        sortBy,
        direction,
      }),
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
    createDoctor: (clinic_id: string) => `${clinic_id}/create-doctor`,
  },
  doctor: {
    getDotorsBasic: '/clinic/api/v1/clinic/doctors',
    getDoctorSchedulesByDoctorId: '/clinic/api/v1/doctor/get-schedules',
    searchDoctors: '/clinic/api/v1/public/search-doctors',
    createSchedule: (userId: string) =>
      `/clinic/api/v1/doctor/${userId}/create-schedule`,
  },

  user: {
    profile: '/auth/api/v1/me',
  },
  appointment: {
    create: '/appointment/api/v1/patient',
    calendarAppointments: '/appointment/api/v1/doctor/calendar-appointments',
  },
  public: {
    getAllService: (page?: string, size?: string) =>
      buildUrlWithParams('/clinic/api/v1/public/get-all-service', {
        page,
        size,
      }),
    getServiceById: (id: string) => `/clinic/api/v1/public/service/${id}`,
    getAllClinic: '/clinic/api/v1/public/get-all-clinic',
    getClinicById: (id: string) => `/clinic/api/v1/public/clinic/${id}`,
    getAllSpeciality: (page?: string, size?: string) =>
      buildUrlWithParams('/clinic/api/v1/public/speciality/get-all', {
        page,
        size,
      }),
    getServiceBySpecialityId: (specId: string, page?: string, size?: string) =>
      buildUrlWithParams(`/clinic/api/v1/public/service-by-specid/${specId}`, {
        page,
        size,
      }),
  },
};

export default endpoints;
