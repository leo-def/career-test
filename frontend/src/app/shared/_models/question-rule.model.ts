import {Entity} from '../_abstracts/entity';
import {Question} from './question.model';
import {Personality} from './personality.model';

export class QuestionRule extends Entity{
  /*
	Entity
		id: number;
*/
  question: Question;
  Personality: Personality;
  value: string;
  percentage: number;
  type: string;
}
