import Alert from '@mui/material/Alert';
import { useState } from 'react';
const Home = () => {
  const tokenLogin = localStorage.getItem('token');
  const [alert, setAlert] = useState<{
    type: 'error' | 'warning' | 'info' | 'success';
    content: string;
  }>({
    type: 'success',
    content: 'Đăng nhập thành công',
  });

  const [token, setToken] = useState(tokenLogin ? true : false);

  setTimeout(() => {
    setToken(false);
    setAlert({
      type: 'error',
      content: '',
    });
  }, 5000);
  return (
    <>
      {token !== false && (
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
