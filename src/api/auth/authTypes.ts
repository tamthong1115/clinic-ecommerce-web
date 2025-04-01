import { UUID } from 'crypto';

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  message: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface User {
  id: UUID;
  email: string;
  username?: string;
  role: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}
