import { lazy } from 'react';
import { Route } from 'react-router-dom';
import UserPaths from './pathUser';

const Profile = lazy(() => import('../../pages/user/Profile'));

const UserRoutesComponent = () => {
  return (
    <>
      <Route path={UserPaths.PROFILE} element={<Profile />} />
    </>
  );
};

export default UserRoutesComponent;
