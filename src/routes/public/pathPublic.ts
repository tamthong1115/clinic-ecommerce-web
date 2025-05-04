const PublicPaths = {
  HOME: '/',
  LOGIN: '/sign-in',
  SIGN_UP: '/sign-up',
  EX: '/ex',
  BOOKING_CART: '/bookingCart',
  SERVICE: '/service',
  SERVICE_BY_ID: (id: string) => `/service/${id}`,
  SERVICE_BY_SPECIALITY: (specId: string) => `/service?specialityId=${specId}`,
  MEDICINE: '/Medicine',
  COOPERATE: '/Cooperate',
  PROFILE: '/profile',
  CALENDAR: '/calendar-booking',
  SUPPORT: '/support',
  FORGOTPASSWORD: '/forgot-password',
  SPECIALITY: `/speciality`,
  BOOKING: `/booking`,
  ABOUT_US: '/about-us',
  ABOUT_FOR_PATIENT: '/about-for-patient',
};

export default PublicPaths;
