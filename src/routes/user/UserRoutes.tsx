import { lazy } from 'react';
import { Route } from 'react-router-dom';
import UserPaths from './pathUser';
import ProfileLayout from '../../layout/profile/ProfileLayout.tsx';

const Profile = lazy(() => import('../../pages/user/Profile'));

const UserRoutesComponent = () => {
  return (
    <>
      <Route
        path={UserPaths.PROFILE}
        element={
          <ProfileLayout>
            <Profile />
          </ProfileLayout>
        }
      />
    </>
  );
};

export default UserRoutesComponent;
