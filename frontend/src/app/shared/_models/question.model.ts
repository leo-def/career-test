import {Item} from '../_abstracts/item';
import {AppraisalType} from './appraisal-type.model';

export class Question extends Item{

  /*
	Entity
		id: number;
	Item
		title: string;
		description: string;
	*/
  appraisalType: AppraisalType;
}
