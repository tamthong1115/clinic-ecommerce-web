import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useToast } from '../context/ToastContext';
import { registerService } from '../api/auth/authService';
import PublicPaths from '../routes/public/pathPublic';

const SignUpSchema = Yup.object().shape({
  username: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

const SignUp = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: registerService,
    onSuccess: () => {
      showToast('Registration successful!', { type: 'success' });
      navigate('/');
    },
    onError: (error: { response?: { data?: { message?: string } } }) => {
      const errorMessage =
        error?.response?.data?.message || 'Registration failed!';
      showToast(errorMessage, { type: 'error' });
    },
  });

  const handleSubmit = async (values: {
    username: string;
    email: string;
    password: string;
  }) => {
    mutate(values);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl h-auto bg-white max-[700px]:p-[50px] max-[500px]:p-[30px] py-[70px] px-[50px] rounded-2xl shadow-lg"
      >
        <h2 className="text-[32px] font-semibold text-center mb-4">Đăng Ký</h2>
        <p className="text-center text-gray-600 mb-[40px] text-[18px]">
          Vui lòng nhập thông tin để tạo tài khoản
        </p>
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
          }}
          validationSchema={SignUpSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
            setSubmitting(false);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="mb-[30px]">
                <label
                  className="block text-gray-700 text-[18px] font-medium mb-[15px]"
                  htmlFor="username"
                >
                  Full Name
                </label>
                <Field
                  name="username"
                  type="text"
                  className={`w-full h-[56px] p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.username && touched.username
                      ? 'border-red-500 focus:ring-red-400'
                      : 'border-gray-300 focus:ring-green-400'
                  }`}
                  id="username"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-[30px]">
                <label
                  className="block text-gray-700 text-[18px] font-medium mb-[15px]"
                  htmlFor="email"
                >
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  className={`w-full h-[56px] p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.email && touched.email
                      ? 'border-red-500 focus:ring-red-400'
                      : 'border-gray-300 focus:ring-green-400'
                  }`}
                  id="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-[30px]">
                <label
                  className="block text-gray-700 text-[18px] font-medium mb-[15px]"
                  htmlFor="password"
                >
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  className={`w-full h-[56px] p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.password && touched.password
                      ? 'border-red-500 focus:ring-red-400'
                      : 'border-gray-300 focus:ring-green-400'
                  }`}
                  id="password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full h-[56px] bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Đăng Ký
              </motion.button>
            </Form>
          )}
        </Formik>
        <p className="text-center max-[400px]:text-[16px] text-[20px] text-gray-600 mt-4">
          Bạn đã có tài khoản?{' '}
          <Link
            to={PublicPaths.LOGIN}
            className="text-blue-500 hover:underline"
          >
            Đăng nhập
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUp;
