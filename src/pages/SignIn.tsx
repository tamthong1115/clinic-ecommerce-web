import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Alert, Snackbar } from '@mui/material';
import { Login as LoginService } from '../components/Services/Api/auth_api';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertOpen, setAlertOpen] = useState(false);
  const [info, setInfo] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!email || !password) {
      setInfo('Vui lòng nhập đầy đủ email và mật khẩu!');
      setAlertOpen(true);
      return;
    }

    try {
      const response = await LoginService(email, password);
      console.log('Response từ API:', response);
      if (response) {
        sessionStorage.setItem('token', response); // Lưu token
        window.dispatchEvent(new Event('authChanged'));
        console.log('Token đã lưu:', sessionStorage.getItem('token'));
        navigate('/');
      } else {
        throw new Error('Token không hợp lệ');
      }
    } catch (error) {
      console.error('Lỗi đăng nhập:', error);
      setInfo('Tài khoản hoặc mật khẩu không chính xác');
      setAlertOpen(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl h-auto bg-white max-[700px]:p-[50px] max-[500px]:p-[30px] py-[70px] px-[50px] rounded-2xl shadow-lg"
      >
        <h2 className="text-[32px] font-semibold text-center mb-4">
          Đăng nhập
        </h2>
        <p className="text-center text-gray-600 mb-[40px] text-[18px]">
          Vui lòng nhập email và mật khẩu để tiếp tục
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-[30px]">
            <label
              className="block text-gray-700 text-[18px] font-medium mb-[15px]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              className="w-full h-[56px] p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Nhập email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-[30px]">
            <label
              className="block text-gray-700 text-[18px] font-medium mb-[15px]"
              htmlFor="password"
            >
              Mật khẩu
            </label>
            <input
              type="password"
              className="w-full h-[56px] p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Nhập mật khẩu"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between mb-[30px]">
            <label className="flex items-center max-[400px]:text-[16px] text-[18px] text-gray-600">
              <input type="checkbox" className="mr-2 w-[24px] h-[24px]" /> Nhớ
              mật khẩu
            </label>
            <Link
              to="#"
              className="max-[400px]:text-[16px] text-[18px] text-gray-500 hover:text-green-700"
            >
              Quên mật khẩu?
            </Link>
          </div>
          <motion.button
            type="submit"
            className="w-full h-[56px] bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Đăng Nhập
          </motion.button>
        </form>
        <p className="text-center max-[400px]:text-[16px] text-[20px] text-gray-600 mt-4">
          Bạn chưa có tài khoản?{' '}
          <Link to={'/sign-up'} className="text-blue-500 hover:underline">
            Tạo tài khoản
          </Link>
        </p>
      </motion.div>

      {/* Snackbar Alert */}
      <Snackbar
        open={alertOpen}
        autoHideDuration={3000}
        onClose={() => setAlertOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setAlertOpen(false)}
          severity="error"
          sx={{ width: '100%' }}
        >
          {info}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Login;
