import { lazy } from 'react';
import { Route } from 'react-router-dom';
import UserPaths from './pathUser';
import ProfileLayout from '../../layout/profile/ProfileLayout.tsx';
import ProtectedRoute from '../ProtectedRoute.tsx';
import Roles from '../../constants/roles.ts';

const Profile = lazy(() => import('../../pages/user/Profile'));

const UserRoutesComponent = () => {
  return (
    <Route element={<ProtectedRoute requiredRole={Roles.USER} />}>
      <Route
        path={UserPaths.PROFILE}
        element={
          <ProfileLayout current={0}>
            <Profile />
          </ProfileLayout>
        }
      />
    </Route>
  );
};

export default UserRoutesComponent;
