import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicRoutes from './public/PublicRoutes';
import UserRoutes from './user/UserRoutes';
import Spinner from '../components/Spinner/Spinner';
import ClinicRoutes from './dashboard/DashboardRouter.tsx';
import Layout from '../layout/Layout.tsx';

const AppRoutes = () => {
  return (
    <Suspense
      fallback={<Spinner color="#000000" size={25} type="PacmanLoader" />}
    >
      <Routes>
        <Route element={<Layout />}>
          {PublicRoutes()}
          {UserRoutes()}
        </Route>
        {ClinicRoutes()}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
