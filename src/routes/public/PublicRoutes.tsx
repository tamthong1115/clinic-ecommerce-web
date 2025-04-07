import { lazy } from 'react';
import { Route } from 'react-router-dom';
import PublicPaths from './pathPublic';
import ProfileLayout from '../../layout/profile/ProfileLayout.tsx';
import Calendar from '../../pages/user/Calendar.tsx';
import Support from '../../pages/user/Support.tsx';
import Profile from '../../pages/user/Profile.tsx';

const Home = lazy(() => import('../../pages/Home'));
const Login = lazy(() => import('../../pages/SignIn'));
const SignUp = lazy(() => import('../../pages/SignUp'));
const BookingCart = lazy(() => import('../../pages/BookingCart'));
const Service = lazy(() => import('../../pages/Service'));
const Booking = lazy(() => import('../../pages/Booking'));
const Medicine = lazy(() => import('../../pages/Medicine'));
const Cooperate = lazy(() => import('../../pages/Cooperate'));
const ForgotPassword = lazy(() => import('../../pages/ForgotPassword'));
const PublicRoutesComponent = () => {
  return (
    <>
      <Route path={PublicPaths.HOME} element={<Home />} />
      <Route path={PublicPaths.LOGIN} element={<Login />} />
      <Route path={PublicPaths.SIGN_UP} element={<SignUp />} />
      <Route path={PublicPaths.FORGOTPASSWORD} element={<ForgotPassword />} />
      <Route path={PublicPaths.BOOKING_CART} element={<BookingCart />} />
      <Route path={PublicPaths.SERVICE} element={<Service />} />
      <Route path={PublicPaths.BOOKING} element={<Booking />} />
      <Route path={PublicPaths.MEDICINE} element={<Medicine />} />
      <Route path={PublicPaths.COOPERATE} element={<Cooperate />} />
      <Route
        path={PublicPaths.PROFILE}
        element={
          <ProfileLayout>
            <Profile />
          </ProfileLayout>
        }
      />
      <Route
        path={PublicPaths.CALENDAR}
        element={
          <ProfileLayout>
            <Calendar />
          </ProfileLayout>
        }
      />
      <Route
        path={PublicPaths.SUPPORT}
        element={
          <ProfileLayout>
            <Support />
          </ProfileLayout>
        }
      />
    </>
  );
};

export default PublicRoutesComponent;
