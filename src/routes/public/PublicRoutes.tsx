import { lazy } from 'react';
import { Route } from 'react-router-dom';
import PublicPaths from './pathPublic';

const Home = lazy(() => import('../../pages/Home'));
const Login = lazy(() => import('../../pages/SignIn'));
const SignUp = lazy(() => import('../../pages/SignUp'));
const Ex = lazy(() => import('../../pages/Ex'));
const BookingCart = lazy(() => import('../../pages/BookingCart'));
const Service = lazy(() => import('../../pages/Service'));
const Booking = lazy(() => import('../../pages/Booking'));
const Medicine = lazy(() => import('../../pages/Medicine'));
const Cooperate = lazy(() => import('../../pages/Cooperate'));
const PublicRoutesComponent = () => {
  return (
    <>
      <Route path={PublicPaths.HOME} element={<Home />} />
      <Route path={PublicPaths.LOGIN} element={<Login />} />
      <Route path={PublicPaths.SIGN_UP} element={<SignUp />} />
      <Route path={PublicPaths.BOOKING_CART} element={<BookingCart />} />
      <Route path={PublicPaths.SERVICE} element={<Service />} />
      <Route path={PublicPaths.BOOKING} element={<Booking />} />
      <Route path={PublicPaths.MEDICINE} element={<Medicine />} />
      <Route path={PublicPaths.COOPERATE} element={<Cooperate />} />
      <Route path={PublicPaths.EX} element={<Ex />} />
    </>
  );
};

export default PublicRoutesComponent;
