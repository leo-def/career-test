import {DisplayItem} from '../_abstracts/display-item';

export class Personality extends DisplayItem{
  /*
	Entity
		id: number;
	Item
		title: string;
		description: string;
	DisplayItem
		image: string;
	MecDisplayItem
		mecId: number;
*/
  type: string;
  code: string;
}
