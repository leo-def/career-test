
import {Entity} from '../_abstracts/entity';
import {Account} from './account/account.model';
import {University}from './university.model';

export class UniversityEmployee extends Entity{
/*
	Entity
		id: number;
*/
  university: University;
  account: Account;
  type: String;
}