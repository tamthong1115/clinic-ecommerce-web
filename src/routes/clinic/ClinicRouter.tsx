import { lazy } from 'react';
import { Route } from 'react-router-dom';
import ClinicPaths from './pathClinic.ts';
import DashboardLayout from '../../layout/dashboard/DashboardLayout.tsx';

const DashBoard = lazy(() => import('../../pages/clinic/ClinicDashBoard'));
const DoctorManage = lazy(() => import('../../pages/clinic/DoctorManagement'));
const InvoiceManage = lazy(
  () => import('../../pages/clinic/InvoiceManagement')
);
const PatientManage = lazy(
  () => import('../../pages/clinic/PatientManagement')
);
const ScheduleManege = lazy(
  () => import('../../pages/clinic/ScheduleManagement')
);
const ServiceManage = lazy(
  () => import('../../pages/clinic/ServiceManagement')
);
const SystemSetting = lazy(() => import('../../pages/clinic/SystemSettings'));

const ClinicRoutesComponent = () => {
  return (
    <>
      <Route
        path={ClinicPaths.DASHBOARD}
        element={
          <DashboardLayout>
            <DashBoard />
          </DashboardLayout>
        }
      />
      <Route
        path={ClinicPaths.DOCTOR_MANAGE}
        element={
          <DashboardLayout>
            <DoctorManage />
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
      <Route
        path={ClinicPaths.SYSTEM_SETTING}
        element={
          <DashboardLayout>
            <SystemSetting />
          </DashboardLayout>
        }
      />
    </>
  );
};

export default ClinicRoutesComponent;
