export type AppointmentStatus = 'PENDING' | 'CONFIRMED' | 'CANCELLED'; // Adjust according to your enum

export interface AppointmentCreateDTO {
  doctorId: string;
  patientId: string;
  clinicId: string;
  appointmentDate: string; // ISO format: "2025-05-13"
  startTime: string; // "09:00"
  endTime: string; // "09:30"
  status: AppointmentStatus;
}

export interface AppointmentDTO extends AppointmentCreateDTO {
  appointmentId: string;
}
