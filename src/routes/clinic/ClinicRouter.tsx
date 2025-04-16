import React, { lazy } from 'react';
import { Route } from 'react-router-dom';
import ClinicPaths from './pathClinic.ts';
import ClinicLayout from '../../layout/clinic/ClinicLayout.tsx';

const DashBoard = lazy(() => import('../../pages/clinic/ClinicDashBoard'));
const DoctorManage = lazy(()=> import('../../pages/clinic/DoctorManagement'));
const InvoiceManage = lazy(()=> import('../../pages/clinic/InvoiceManagement'));
const PatientManage = lazy(() => import('../../pages/clinic/PatientManagement'));
const ScheduleManege = lazy(() => import('../../pages/clinic/ScheduleManagement'));
const ServiceManage = lazy(() => import('../../pages/clinic/ServiceManagement'));
const SystemSetting = lazy(() => import('../../pages/clinic/SystemSettings'));

const ClinicRoutes: React.FC = () => {
  return (
    <>
      <Route
        path={ClinicPaths.DASHBOARD}
        element={
          <ClinicLayout>
            <DashBoard />
          </ClinicLayout>
        }
      />
      <Route
        path={ClinicPaths.DOCTOR_MANAGE}
        element={
          <ClinicLayout>
            <DoctorManage />
          </ClinicLayout>
        }
      />
      <Route
        path={ClinicPaths.INVOICE_MANAGE}
        element={
          <ClinicLayout>
            <InvoiceManage />
          </ClinicLayout>
        }
      />
      <Route
        path={ClinicPaths.PATIENT_MANAGE}
        element={
          <ClinicLayout>
            <PatientManage />
          </ClinicLayout>
        }
      />
      <Route
        path={ClinicPaths.SCHEDULE_MANAGE}
        element={
          <ClinicLayout>
            <ScheduleManege />
          </ClinicLayout>
        }
      />
      <Route
        path={ClinicPaths.SERVICE_MANAGE}
        element={
          <ClinicLayout>
            <ServiceManage />
          </ClinicLayout>
        }
      />
      <Route
        path={ClinicPaths.SYSTEM_SETTING}
        element={
          <ClinicLayout>
            <SystemSetting />
          </ClinicLayout>
        }
      />
    </>
  );
};

export default ClinicRoutes;
