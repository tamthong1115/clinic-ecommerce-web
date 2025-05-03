import { UUID } from 'crypto';

export interface SpecialityDTO {
  specialityId: UUID;
  specialityName: string;
  specialityDescription?: string;
  specialityImageUrl?: string;
}
