export type CreateClinicOwnerRequest = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  dateOfBirth?: string;
  address?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  licenseNumber?: string;
  profileImageUrl?: string;
};

export type ClinicOwnerDTO = {
  ownerId: string;
  userId: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  licenseNumber: string;
  profileImageUrl: string;
};

export type CreateClinicRequest = {
  clinicName: string;
  clinicAddress: string;
  clinicPhone: string;
  description?: string;
  image?: string;
};

export type ClinicDTO = {
  clinicId: string;
  ownerId: string;
  ownerName: string;
  clinicName: string;
  email: string;
  clinicPhone: string;
  clinicAddress: string;
  description: string;
  image: string;
  status: string;
};
