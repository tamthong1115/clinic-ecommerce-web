import Alert from '@mui/material/Alert';
import { useEffect, useState } from 'react';

const Home = () => {
  const tokenLogin = sessionStorage.getItem('token');
  const hasShownAlert = sessionStorage.getItem('hasShownAlert'); // Kiểm tra trạng thái hiển thị

  const [alert, setAlert] = useState({
    type: 'success' as 'error' | 'warning' | 'info' | 'success',
    content: 'Đăng nhập thành công',
  });

  const [token, setToken] = useState(
    tokenLogin && !hasShownAlert ? true : false
  );
  useEffect(() => {
    if (token) {
      // Đánh dấu đã hiển thị thông báo
      sessionStorage.setItem('hasShownAlert', 'true');

      setTimeout(() => {
        setToken(false);
        setAlert({ type: 'error', content: '' });
      }, 5000);
    }
  }, [token]);

  return (
    <>
      {token && (
        <Alert
          severity={alert.type}
          style={{
            position: 'fixed',
            top: '10px',
            right: '5px',
          }}
        >
          {alert.content}
        </Alert>
      )}
    </>
  );
};

export default Home;
