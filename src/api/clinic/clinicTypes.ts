export type clinicStatus = 'OPEN' | 'CLOSED';
export type clinicServiceStatus = 'ACTIVE' | 'INACTIVE';

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
  images: string[];
  status: string;
};

export type UpdateClinicRequest = {
  clinicName?: string;
  clinicAddress?: string;
  clinicPhone?: string;
  description?: string;
  image?: string[];
  status: clinicStatus;
};

export type clinicServiceDTO = {
  clinicId: string;
  serviceId: string;
  status?: clinicServiceStatus;
};

export type clinicServiceRequest = {
  clinicId: string;
  serviceId: string;
  status?: clinicServiceStatus;
};

export interface serviceInClinic {
  serviceId: string;
  clinicId: string;
  clinicName: string;
  serviceName: string;
  specialityId: string;
  specialityName: string;
  status?: string;
}

export interface DoctorRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  profilePicture?: File;
  experienceYears: number;
  education: string;
}

export interface DoctorBasicResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  profilePicture?: string;
}

export interface DoctorCertificationDTO {
  certificationId: string;
  certificationName: string;
  issuedBy: string;
  issuedDate: string;
}

export interface DoctorScheduleDTO {
  scheduleId: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
}

export interface DoctorDetailResponse extends DoctorBasicResponse {
  experienceYears: number;
  education: string;
  certifications: DoctorCertificationDTO[];
  schedules: DoctorScheduleDTO[];
  clinicId: string;
}
