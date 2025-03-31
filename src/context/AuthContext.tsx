import { useContext, createContext, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type User = {
  id: string;
  username?: string;
  email: string;
  role: string;
};
type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (token: string, userData: User) => void;
  logout: () => void;
  hasRole: (role: string) => boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const isAuthenticated = !!user;

  const login = (token: string, userData: User) => {
    localStorage.setItem('authToken', token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
    navigate('/signup');
  };

  const hasRole = (role: string) => {
    return user?.role === role;
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, hasRole }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
