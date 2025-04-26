import {
  ClinicPathsSubMenu,
  DashboardPaths,
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
    path: DashboardPaths.DASHBOARD,
    iconActive: '/icon/icon-home-active.png',
    iconInactive: '/icon/icon-home-inactive.png',
  },
  {
    title: 'Clinic Manage',
    path: DashboardPaths.CLINIC_MANAGE,
    iconActive: '/icon/icon-clinic-active.png',
    iconInactive: '/icon/icon-clinic-inactive.png',
    requiredRoles: ['ADMIN', 'CLINIC_OWNER'],
    submenu: [
      {
        title: 'Create Clinic Owner',
        path: ClinicPathsSubMenu.ADD_CLINIC_OWNER,
        iconActive: '/icon/icon-clinic-owner-add-active.png',
        iconInactive: '/icon/icon-clinic-owner-add-inactive.png',
        requiredRoles: ['ADMIN'],
      },
      {
        title: 'Create Clinic',
        path: ClinicPathsSubMenu.ADD_CLINIC,
        iconActive: '/icon/icon-clinic-add-active.png',
        iconInactive: '/icon/icon-clinic-add-inactive.png',
        requiredRoles: ['ADMIN'],
      },
    ],
  },

  {
    title: 'Doctor Manage',
    path: DashboardPaths.DOCTOR_MANAGE,
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
    path: DashboardPaths.SERVICE_MANAGE,
    iconActive: '/icon/icon-health-bag-active.png',
    iconInactive: '/icon/icon-health-bag-inactive.png',
  },

  {
    title: 'Schedule Manage',
    path: DashboardPaths.SCHEDULE_MANAGE,
    iconActive: '/icon/icon-schedule-active.png',
    iconInactive: '/icon/icon-schedule-inactive.png',
  },

  {
    title: 'Patient Manage',
    path: DashboardPaths.PATIENT_MANAGE,
    iconActive: '/icon/icon-patient-active.png',
    iconInactive: '/icon/icon-patient-inactive.png',
  },

  {
    title: 'Invoice',
    path: DashboardPaths.INVOICE_MANAGE,
    iconActive: '/icon/icon-invoice-active.png',
    iconInactive: '/icon/icon-invoice-inactive.png',
  },

  {
    title: 'Clinic setting',
    path: DashboardPaths.SYSTEM_SETTING,
    iconActive: '/icon/icon-setting-active.png',
    iconInactive: '/icon/icon-setting-inactive.png',
  },
];

export default sidebarItems;
