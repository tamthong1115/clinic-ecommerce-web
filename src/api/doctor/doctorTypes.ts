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
  status?: string;
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
  clinicId: string;
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

export interface DoctorSearchResponse {
  id: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
  experienceYears: number;
  education: string;
  services: ServiceInfo[];
  schedules: ScheduleInfo[];
  clinic: ClinicInfo;
}

export interface ServiceInfo {
  id: string;
  name: string;
  price: number;
}

export interface ScheduleInfo {
  id: string;
  date: string; // ISO string format like "2025-05-13"
  startTime: string; // "09:00"
  endTime: string; // "10:00"
  booked: boolean;
}

export interface ClinicInfo {
  id: string;
  name: string;
  address: string;
}

export interface DoctorSearchCriteria {
  name?: string;
  specialityId?: string;
  serviceId?: string;
  specializationName?: string;
  serviceName?: string;
  clinicId?: string;
  minExperience?: number;
  maxExperience?: number;
  minPrice?: number;
  maxPrice?: number;
  dayOfWeek?: string;
  date?: string; // ISO format (e.g., "2025-05-13")
  page?: number;
  size?: number;
  sortBy?: string;
  sortDirection?: 'ASC' | 'DESC';
}

export interface DoctorScheduleRequest {
  dayOfWeek: string; // e.g. "MONDAY"
  startTime: string; // e.g. "09:00"
  endTime: stirng; // e.g. "10:00"
}

export interface DoctorScheduleDTO {
  id: string; // UUID
  clinicId: string; // UUID
  dayOfWeek: string; // e.g. "MONDAY"
  startTime: string; // e.g. "09:00"
  endTime: string; // e.g. "10:00"
}
