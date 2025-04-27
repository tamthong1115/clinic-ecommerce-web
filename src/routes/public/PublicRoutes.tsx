import { lazy } from 'react';
import { Route } from 'react-router-dom';
import PublicPaths from './pathPublic';
import ProfileLayout from '../../layout/profile/ProfileLayout';
import Profile from '../../pages/user/Profile';
import Settings from '../../pages/user/Settings';
import UserPaths from '../user/pathUser';
import CalendarBooking from '../../pages/user/CalendarBooking';

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
            <CalendarBooking />
          </ProfileLayout>
        }
      />
    </>
  );
};

export default PublicRoutesComponent;
