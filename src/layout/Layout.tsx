import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="">
      <Header />
      <main className={`flex-1 flex container p-10 mx-auto shadow-2xl justify-center`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
