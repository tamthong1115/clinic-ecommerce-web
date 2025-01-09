import { lazy } from 'react';
import { Route } from 'react-router-dom';
import PublicPaths from './pathPublic';

const Home = lazy(() => import('../../pages/Home'));
const Login = lazy(() => import('../../pages/SignIn'));
const SignUp = lazy(() => import('../../pages/SignUp'));
const Ex = lazy(() => import('../../pages/Ex'));

const PublicRoutesComponent = () => {
  return (
    <>
      <Route path={PublicPaths.HOME} element={<Home />} />
      <Route path={PublicPaths.LOGIN} element={<Login />} />
      <Route path={PublicPaths.SIGN_UP} element={<SignUp />} />
      <Route path={PublicPaths.EX} element={<Ex />} />
    </>
  );
};

export default PublicRoutesComponent;
