import { UUID } from 'crypto';

export interface ServiceDTO {
  serviceId: UUID;
  serviceName: string;
  specialityId: UUID;
  specialityName: string;
  description?: string;
  price: number;
  duration: string;
  requiresPrescription: boolean;
  active: boolean;
}
