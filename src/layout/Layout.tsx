import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="w-screen h-max">
      <Header />
      <main className={`flex-1 flex container`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
