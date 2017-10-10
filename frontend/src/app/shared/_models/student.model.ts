import {Entity} from '../_abstracts/entity';
import {Account} from './account/account.model';

export class Student extends Entity{
/*
	Entity
		id: number;
*/
  nickname: string;
  imageURL: string;
  account: Account;
  reachable: boolean;
}
