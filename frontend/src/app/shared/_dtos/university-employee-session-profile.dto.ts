import { SessionProfileDTO } from './account/session-profile.dto';
import { UniversityDTO as University} from './university.dto';
export class UniversityEmployeeSessionProfileDTO  extends SessionProfileDTO {
    id: number;

    type: string;

    university: University;
}