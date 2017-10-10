import {Student} from '../_models/student.model';
import {Personality} from '../_models/personality.model';
import {Entity} from '../_abstracts/entity';

export class StudentPersonality extends Entity{
  student: Student;
  personality: Personality;
}
