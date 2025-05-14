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
