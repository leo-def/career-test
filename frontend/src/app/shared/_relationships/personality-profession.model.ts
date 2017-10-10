import {Personality} from '../_models/personality.model';
import {University} from '../_models/university.model';
import {Entity} from '../_abstracts/entity';

export class PersonalityProfession extends Entity{
  personality: Personality;
  university: University;
}
