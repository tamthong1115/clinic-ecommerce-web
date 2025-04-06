import { UUID } from 'crypto';

export interface UserProfile {
  id: UUID;
  username?: string;
  email: string;
  role: string;
  avatarUrl?: string;
  phone?: string;
  address?: string;
}
