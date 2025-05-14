import { lazy } from 'react';
import { Route } from 'react-router-dom';
import {
  ClinicPathsSubMenu,
  DashboardPaths,
  DoctorPathsSubMenu,
} from './pathClinic.ts';

const DashboardLayout = lazy(
  () => import('../../layout/dashboard/DashboardLayout.tsx')
);
const AddDoctor = lazy(
  () => import('../../pages/dashboard/Doctor/AddDoctor.tsx')
);
const ProtectedRoute = lazy(() => import('../ProtectedRoute.tsx'));
const ClinicManagement = lazy(
  () => import('../../pages/dashboard/Clinic/ClinicManagement.tsx')
);
const CreateClinicOwner = lazy(
  () => import('../../pages/dashboard/Clinic/CreateClinicOwner.tsx')
);

const DashBoard = lazy(() => import('../../pages/dashboard/ClinicDashBoard'));
const DoctorManage = lazy(
  () => import('../../pages/dashboard/Doctor/DoctorManagement.tsx')
);
const InvoiceManage = lazy(
  () => import('../../pages/dashboard/InvoiceManagement')
);
const PatientManage = lazy(
  () => import('../../pages/dashboard/PatientManagement')
);
const ScheduleManege = lazy(
  () => import('../../pages/dashboard/Schedule/ScheduleManagement.tsx')
);
const CreateDoctorSchedule = lazy(
  () => import('@/pages/dashboard/Schedule/CreateDoctorSchedule.tsx')
);
const DoctorAppointmentPage = lazy(
  () => import('@/pages/dashboard/Appointment/DoctorAppointmentPage')
);
const ServiceManage = lazy(
  () => import('../../pages/clinic/components/ServiceList.tsx')
);
const SystemSetting = lazy(
  () => import('../../pages/dashboard/SystemSettings')
);

const DashboardRoutesComponent = () => {
  return (
    <>
      <Route element={<ProtectedRoute requiredRoles={['ADMIN']} />}>
        <Route
          path={DashboardPaths.SYSTEM_SETTING}
          element={
            <DashboardLayout>
              <SystemSetting />
            </DashboardLayout>
          }
        />

        <Route
          path={ClinicPathsSubMenu.ADD_CLINIC_OWNER}
          element={
            <DashboardLayout>
              <CreateClinicOwner />
            </DashboardLayout>
          }
        />
      </Route>

      <Route
        element={<ProtectedRoute requiredRoles={['ADMIN', 'CLINIC_OWNER']} />}
      >
        <Route
          path={DashboardPaths.CLINIC_MANAGE}
          element={
            <DashboardLayout>
              <ClinicManagement />
            </DashboardLayout>
          }
        />

        <Route
          path={DashboardPaths.DOCTOR_MANAGE}
          element={
            <DashboardLayout>
              <DoctorManage />
            </DashboardLayout>
          }
        />

        <Route
          path={DoctorPathsSubMenu.ADD_DOCTOR}
          element={
            <DashboardLayout>
              <AddDoctor />
            </DashboardLayout>
          }
        />
      </Route>

      <Route
        element={
          <ProtectedRoute requiredRoles={['ADMIN', 'CLINIC_OWNER', 'DOCTOR']} />
        }
      >
        <Route
          path={DashboardPaths.DASHBOARD}
          element={
            <DashboardLayout>
              <DashBoard />
            </DashboardLayout>
          }
        />

        <Route
          path={DashboardPaths.INVOICE_MANAGE}
          element={
            <DashboardLayout>
              <InvoiceManage />
            </DashboardLayout>
          }
        />
        <Route
          path={DashboardPaths.PATIENT_MANAGE}
          element={
            <DashboardLayout>
              <PatientManage />
            </DashboardLayout>
          }
        />
        <Route
          path={DashboardPaths.SCHEDULE_MANAGE}
          element={
            <DashboardLayout>
              <ScheduleManege />
            </DashboardLayout>
          }
        />
        <Route
          path={DashboardPaths.SERVICE_MANAGE}
          element={
            <DashboardLayout>
              <ServiceManage />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/doctor/create-schedule"
          element={
            <DashboardLayout>
              <CreateDoctorSchedule />
            </DashboardLayout>
          }
        />
        <Route
          path={DashboardPaths.APPOINTMENT_MANAGE}
          element={
            <DashboardLayout>
              <DoctorAppointmentPage />
            </DashboardLayout>
          }
        />
      </Route>
    </>
  );
};

export default DashboardRoutesComponent;
