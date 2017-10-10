import {Appraisal} from './appraisal.model';
import {Question} from './question.model';

export class Response {
  appraisal: Appraisal;
  question: Question;
  value: string;
}
