import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastProvider } from './context/ToastContext.tsx';
import { AuthProvider } from './context/AuthContext.tsx';

const queryClient = new QueryClient();

function App() {
  console.log(import.meta.env.VITE_API_BASE_URL);
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <Router>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </Router>
      </ToastProvider>
    </QueryClientProvider>
  );
}

export default App;
