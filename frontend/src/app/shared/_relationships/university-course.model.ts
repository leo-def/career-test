import {University} from '../_models/university.model';
import {Course} from '../_models/course.model';
import {Entity} from '../_abstracts/entity';

export class UniversityCourse extends Entity{
  university: University;
  course: Course;
}
