import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="">
      <Header />
      <main className={``}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
