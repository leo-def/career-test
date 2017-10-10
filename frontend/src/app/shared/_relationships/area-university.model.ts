import {Area} from '../_models/area.model';
import {University} from '../_models/university.model';
import {Entity} from '../_abstracts/entity';

export class AreaUniversity extends Entity{
  area: Area;
  university: University;
}
