import { lazy } from 'react';
import { Route } from 'react-router-dom';
import UserPaths from './pathUser';
import ProfileLayout from '../../layout/profile/ProfileLayout.tsx';
import Calendar from '../../pages/user/CalendarBooking.tsx';
import ProtectedRoute from '../ProtectedRoute.tsx';
import Settings from '../../pages/user/Settings.tsx';

const Profile = lazy(() => import('../../pages/user/Profile'));

const UserRoutesComponent = () => {
  return (
    <Route element={<ProtectedRoute requiredRoles={['ADMIN']} />}>
      <Route
        path={UserPaths.SETTINGS}
        element={
          <ProfileLayout>
            <Settings />
          </ProfileLayout>
        }
      />
      <Route
        path={UserPaths.PROFILE}
        element={
          <ProfileLayout>
            <Profile />
          </ProfileLayout>
        }
      />
      <Route
        path={UserPaths.CALENDAR}
        element={
          <ProfileLayout>
            <Calendar />
          </ProfileLayout>
        }
      />
    </Route>
  );
};

export default UserRoutesComponent;
