import Alert from '@mui/material/Alert';
import { useEffect, useState } from 'react';
import MainPresent from '../../components/Home/MainPresent.tsx';
import WhatWeDo from '../../components/Home/WhatWeDo.tsx';
import WhoWeAre from '../../components/Home/WhoWeAre.tsx';

const Home = () => {
  const tokenLogin = localStorage.getItem('token');
  const hasShownAlert = localStorage.getItem('hasShownAlert');

  const [alert, setAlert] = useState({
    type: 'success' as 'error' | 'warning' | 'info' | 'success',
    content: 'Đăng nhập thành công',
  });

  const [token, setToken] = useState(
    tokenLogin && !hasShownAlert ? true : false
  );

  const [activeBg, setActiveBg] = useState<string>('/image/background1.jpg');

  useEffect(() => {
    if (token) {
      localStorage.setItem('hasShownAlert', 'true');
      setTimeout(() => {
        setToken(false);
        setAlert({ type: 'error', content: '' });
      }, 5000);
    }
  }, [token]);

  useEffect(() => {
    const sections = document.querySelectorAll('section[data-bg]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bg = entry.target.getAttribute('data-bg');
            if (bg) {
              setActiveBg(bg);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      {token && (
        <Alert
          severity={alert.type}
          style={{
            position: 'fixed',
            top: '10px',
            right: '5px',
            zIndex: 50,
          }}
        >
          {alert.content}
        </Alert>
      )}

      <div className="relative w-full h-full">
        <div
          className=" fixed top-0 left-0 w-full h-full bg-no-repeat bg-center transition-all duration-700 -z-50"
          style={{
            backgroundImage: `url(${activeBg})`,
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="relative">
          <section
            className="h-screen flex items-center justify-center"
            data-bg="/image/background1.jpg"
          >
            <MainPresent />
          </section>

          <div className="flex items-center justify-center bg-white">
            <WhatWeDo />
          </div>

          <section
            className="flex items- center justify-center"
            data-bg="/image/background2.jpg"
          >
            <WhoWeAre />
          </section>

          <div className="h-screen flex items-center justify-center bg-white">
            <h2 className="text-4xl font-bold text-gray-800">
              Khoảng trắng - Hiển thị nội dung tiếp
            </h2>
          </div>

          <section
            className="h-screen flex items-center justify-center"
            data-bg="/image/background3.jpg"
          >
            <h1 className="text-5xl font-bold text-white">
              Section 3 - Có nền
            </h1>
          </section>

          <div className="h-screen flex items-center justify-center bg-white">
            <h2 className="text-4xl font-bold text-gray-800">
              Khoảng trắng - Nội dung cuối
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
