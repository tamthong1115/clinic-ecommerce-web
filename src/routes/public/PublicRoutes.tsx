import { lazy } from 'react';
import { Route } from 'react-router-dom';
import PublicPaths from './pathPublic';
import ProfileLayout from '../../layout/profile/ProfileLayout';
import Profile from '../../pages/user/Profile';
import Settings from '../../pages/user/Settings';
import UserPaths from '../user/pathUser';
import CalendarBooking from '../../pages/user/CalendarBooking';
import AboutUs from '../../pages/publicPages/About/AboutUs.tsx';
import AboutForPatient from '../../pages/publicPages/About/AboutForPatient.tsx';
import AboutForDoctor from '@/pages/publicPages/About/AboutForDoctor.tsx';
import AboutForContact from '@/pages/publicPages/About/AboutForContact.tsx';

const Home = lazy(() => import('../../pages/publicPages/Home.tsx'));
const Login = lazy(() => import('../../pages/publicPages/SignIn.tsx'));
const SignUp = lazy(() => import('../../pages/publicPages/SignUp.tsx'));
const BookingCart = lazy(
  () => import('../../pages/publicPages/CartAndPayment/ProductCart.tsx')
);
const Service = lazy(() => import('../../pages/publicPages/Service.tsx'));
const Booking = lazy(() => import('../../pages/publicPages/Booking.tsx'));
const BookingDetail = lazy(
  () => import('../../pages/publicPages/BookingOrder.tsx')
);
const Medicine = lazy(() => import('../../pages/publicPages/Medicine.tsx'));
const Cooperate = lazy(() => import('../../pages/publicPages/Cooperate.tsx'));
const ForgotPassword = lazy(
  () => import('../../pages/publicPages/ForgotPassword.tsx')
);
const Speciality = lazy(() => import('../../pages/publicPages/Speciality.tsx'));
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
      <Route path={PublicPaths.BOOKING_DETAIL} element={<BookingDetail />} />
      <Route path={PublicPaths.MEDICINE} element={<Medicine />} />
      <Route path={PublicPaths.COOPERATE} element={<Cooperate />} />
      <Route path={PublicPaths.SPECIALITY} element={<Speciality />} />
      <Route path={PublicPaths.ABOUT_US} element={<AboutUs />} />
      <Route path= {PublicPaths.ABOUT_F0R_DOCTOR} element = {<AboutForDoctor/>}/>
      <Route path={PublicPaths.ABOUT_FOR_CONTACT} element= {<AboutForContact/>}/>
      <Route
        path={PublicPaths.ABOUT_FOR_PATIENT}
        element={<AboutForPatient />}
      />
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
