import { lazy } from 'react';
import { Route } from 'react-router-dom';
import { ClinicPaths, DoctorPathsSubMenu } from './pathClinic.ts';
import DashboardLayout from '../../layout/dashboard/DashboardLayout.tsx';
import AddDoctor from '../../pages/dashboard/Doctor/AddDoctor.tsx';
import ProtectedRoute from '../ProtectedRoute.tsx';

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
  () => import('../../pages/dashboard/ScheduleManagement')
);
const ServiceManage = lazy(
  () => import('../../pages/dashboard/ServiceManagement')
);
const SystemSetting = lazy(
  () => import('../../pages/dashboard/SystemSettings')
);

const DashboardRoutesComponent = () => {
  return (
    <>
      <Route element={<ProtectedRoute requiredRoles={['ADMIN']} />}>
        <Route
          path={ClinicPaths.SYSTEM_SETTING}
          element={
            <DashboardLayout>
              <SystemSetting />
            </DashboardLayout>
          }
        />
      </Route>

      <Route
        element={<ProtectedRoute requiredRoles={['ADMIN', 'CLINIC_OWNER']} />}
      >
        <Route
          path={ClinicPaths.DOCTOR_MANAGE}
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
          path={ClinicPaths.DASHBOARD}
          element={
            <DashboardLayout>
              <DashBoard />
            </DashboardLayout>
          }
        />

        <Route
          path={ClinicPaths.INVOICE_MANAGE}
          element={
            <DashboardLayout>
              <InvoiceManage />
            </DashboardLayout>
          }
        />
        <Route
          path={ClinicPaths.PATIENT_MANAGE}
          element={
            <DashboardLayout>
              <PatientManage />
            </DashboardLayout>
          }
        />
        <Route
          path={ClinicPaths.SCHEDULE_MANAGE}
          element={
            <DashboardLayout>
              <ScheduleManege />
            </DashboardLayout>
          }
        />
        <Route
          path={ClinicPaths.SERVICE_MANAGE}
          element={
            <DashboardLayout>
              <ServiceManage />
            </DashboardLayout>
          }
        />
      </Route>
    </>
  );
};

export default DashboardRoutesComponent;
