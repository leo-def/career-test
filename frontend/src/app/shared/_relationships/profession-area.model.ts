import {Profession} from '../_models/profession.model';
import {Area} from '../_models/area.model';
import {Entity} from '../_abstracts/entity';

export class ProfessionArea extends Entity{
  profession: Profession;
  area: Area;
}
