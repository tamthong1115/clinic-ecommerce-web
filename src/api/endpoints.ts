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
};

export default endpoints;
