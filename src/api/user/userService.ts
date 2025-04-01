import apiClient from '../client';
import endpoints from '../endpoints';
import { UserProfile } from './userTypes';

export const userProfile = async (): Promise<UserProfile> => {
  try {
    const response = await apiClient.get(endpoints.user.profile);
    return response.data;
  } catch (error) {
    throw new Error('Error when fetching profile' + error);
  }
};
