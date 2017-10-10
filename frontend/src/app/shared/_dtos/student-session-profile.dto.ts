import {SessionProfileDTO} from './account/session-profile.dto';

export  class StudentSessionProfileDTO extends SessionProfileDTO{
	
	id: number;
	
    nickname: string;
    
	imageURL: string;
	
    reachable: boolean;
}