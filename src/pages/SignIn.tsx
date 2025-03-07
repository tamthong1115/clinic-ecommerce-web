import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PublicPaths from '../routes/public/pathPublic';
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="flex justify-center">
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-[100%] p-6 shadow-lg bg-white rounded-2xl h-[350px]">
            <h2 className="text-center text-[35px] font-bold mb-4">
              Đăng nhập
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 h-[50px]"
              />
              <input
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 h-[50px]"
              />
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
              >
                Đăng nhập
              </button>
            </form>
            <div className="mt-[20px] flex justify-between items-center">
              <Link to={PublicPaths.SIGN_UP}>
                <div className="hover:text-green-700">
                  Bạn chưa có tài khoản ?
                </div>
              </Link>

              <Link to={PublicPaths.SIGN_UP}>
                <div className="hover:text-green-700 font-[700]">
                  - Đăng ký tài khoản
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignIn;
