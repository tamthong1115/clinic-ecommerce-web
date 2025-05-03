const endpoints = {
  auth: {
    register: '/auth/api/v1/register',
    login: '/auth/api/v1/login',
  },
  user: {
    profile: '/auth/api/v1/me',
  },
  clinic: {
    createClinicOwner: '/clinic/api/v1/admin/clinic-owners',
  },

  public: {
    getAllService: '/public/api/v1/public/get-all-service',
    getServiceById: (id: string) => `/public/api/v1/public/service/${id}`,
    getAllClinic: '/public/api/v1/public/get-all-clinic',
    getClinicById: (id: string) => `/public/api/v1/public/clinic/${id}`,
    getAllSpeciality: '/public/api/v1/public/speciality/get-all',
    getServiceBySpecialityId: (id: string) =>
      `/public/api/v1/public/service-by-specid/${id}`,
  },
};

export default endpoints;
