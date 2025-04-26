import {
  ClinicPaths,
  DoctorPathsSubMenu,
} from '../../routes/dashboard/pathClinic.ts';

interface DashboardSideBarItem {
  title: string;
  path: string;
  iconActive: string;
  iconInactive: string;
  requiredRoles?: string[];
  submenu?: {
    title: string;
    path: string;
    iconActive: string;
    iconInactive: string;
    requiredRoles?: string[];
  }[];
}

const sidebarItems: DashboardSideBarItem[] = [
  {
    title: 'Dashboard',
    path: ClinicPaths.DASHBOARD,
    iconActive: '/icon/icon-home-active.png',
    iconInactive: '/icon/icon-home-inactive.png',
  },

  {
    title: 'Doctor Manage',
    path: ClinicPaths.DOCTOR_MANAGE,
    iconActive: '/icon/icon-doctor-active.png',
    iconInactive: '/icon/icon-doctor-inactive.png',
    requiredRoles: ['ADMIN', 'CLINIC_OWNER', 'DOCTOR'],
    submenu: [
      {
        title: 'Add Doctor',
        path: DoctorPathsSubMenu.ADD_DOCTOR,
        iconActive: '/icon/icon-doctor-active.png',
        iconInactive: '/icon/icon-doctor-inactive.png',
        requiredRoles: ['ADMIN', 'CLINIC_OWNER'],
      },
    ],
  },

  {
    title: 'Service Manage',
    path: ClinicPaths.SERVICE_MANAGE,
    iconActive: '/icon/icon-health-bag-active.png',
    iconInactive: '/icon/icon-health-bag-inactive.png',
  },

  {
    title: 'Schedule Manage',
    path: ClinicPaths.SCHEDULE_MANAGE,
    iconActive: '/icon/icon-schedule-active.png',
    iconInactive: '/icon/icon-schedule-inactive.png',
  },

  {
    title: 'Patient Manage',
    path: ClinicPaths.PATIENT_MANAGE,
    iconActive: '/icon/icon-patient-active.png',
    iconInactive: '/icon/icon-patient-inactive.png',
  },

  {
    title: 'Invoice',
    path: ClinicPaths.INVOICE_MANAGE,
    iconActive: '/icon/icon-invoice-active.png',
    iconInactive: '/icon/icon-invoice-inactive.png',
  },

  {
    title: 'Clinic setting',
    path: ClinicPaths.SYSTEM_SETTING,
    iconActive: '/icon/icon-setting-active.png',
    iconInactive: '/icon/icon-setting-inactive.png',
  },
];

export default sidebarItems;
