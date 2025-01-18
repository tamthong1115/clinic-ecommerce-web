import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PublicRoutes from './public/PublicRoutes';
import UserRoutes from './user/UserRoutes';
import Layout from '../layout/Layout';
import Spinner from '../components/Spinner/Spinner';

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
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
