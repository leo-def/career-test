import {Student} from './student.model';
import {AppraisalType} from './appraisal-type.model';
import {Entity} from '../_abstracts/entity';

export class Appraisal extends Entity{
	/*
		Entity
			id: number;
	*/
	student: Student;
	appraisalType: AppraisalType;
	date: Date;
}
