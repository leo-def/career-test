import {Area} from '../_models/area.model';
import {Course} from '../_models/course.model';
import {Entity} from '../_abstracts/entity';

export class AreaCourse extends Entity{
  area: Area;
  course: Course;
}
