import apiClient from '../client';
import endpoints from '../endpoints';
import {
  RegisterRequest,
  RegisterResponse,
  LoginRequest,
  LoginResponse,
} from './authTypes';

export const register = async (
  userData: RegisterRequest
): Promise<RegisterResponse> => {
  try {
    const response = await apiClient.post(endpoints.auth.register, userData);
    return response.data;
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
};

export const loginService = async (
  credentials: LoginRequest
): Promise<LoginResponse> => {
  try {
    const response = await apiClient.post(endpoints.auth.login, credentials);
    const { token } = response.data;
    localStorage.setItem('authToken', token);

    console.log(`RESPONSE DATA ${response.data}`);
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};
