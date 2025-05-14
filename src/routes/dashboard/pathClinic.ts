export const DashboardPaths = {
  DASHBOARD: '/dashboard/',
  CLINIC_MANAGE: '/dashboard/clinic',
  DOCTOR_MANAGE: '/dashboard/doctor',
  INVOICE_MANAGE: '/dashboard/invoice',
  PATIENT_MANAGE: '/dashboard/patient',
  SCHEDULE_MANAGE: '/dashboard/schedule',
  APPOINTMENT_MANAGE: '/dashboard/appointment',
  SERVICE_MANAGE: '/dashboard/service',
  SYSTEM_SETTING: '/dashboard/system',
  LIST_SERVICE_CLINIC_PATH: (clinicId: string) =>
    `/dashboard/service?clinicId=${clinicId}`,
};

export const DoctorPathsSubMenu = {
  ADD_DOCTOR: '/dashboard/doctor/add',
};

export const ClinicPathsSubMenu = {
  ADD_CLINIC_OWNER: '/dashboard/clinic-owner/add',
  ADD_CLINIC: '/dashboard/clinic/add',
  UPDATE_CLINIC: 'dashboard/clinic/update-infor',
};
