import apiClient from '../client';
import endpoints from '../endpoints';
import {
  RegisterRequest,
  RegisterResponse,
  LoginRequest,
  LoginResponse,
} from './authTypes';

export const registerService = async (
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
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};
