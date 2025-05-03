import { UUID } from 'crypto';

export interface ClinicDTO {
  clinicId: UUID;
  ownerId: UUID;
  ownerName: string;
  clinicName: string;
  email: string;
  clinicPhone: string;
  clinicAddress: string;
  description?: string;
  image?: string;
  status: string;
}
