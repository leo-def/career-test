import { Injectable } from '@angular/core';
import {QuestionRule} from '../../../shared/_models/question-rule.model';
import {Entity} from '../../../shared/_abstracts/entity';
import {HypermediaConsumeService, Service, Link} from '../../../core/_services/hypermedia-consume.service';
import {SuperHttpConsumerService} from '../../../core/_abstracts/super-http-consumer-service';
import { Headers, Http, RequestOptions, Response, RequestOptionsArgs } from '@angular/http';
import { AbstractAdminService } from '../_abstracts/abstract-admin-service';
import { AuthService } from '../../../core/_services/auth.service';

@Injectable()
export class QuestionRuleService extends AbstractAdminService {

  get collection_name():string{
     return 'questionRule';
  }
   
  constructor(
    protected hypermediaConsumeService: HypermediaConsumeService,
    protected http: Http,
	protected authService: AuthService
  ) { super(hypermediaConsumeService, http, authService); }

  private _admin_question_rule:Service; 
  
    getMainService(): Promise<Service>{
      if(this._admin_question_rule){
        return Promise.resolve(this._admin_question_rule);
      }
      return super.getMainService().then(
        superService => {
          return this.getService('admin-questionRule', superService.response.getURL('questionRule'))
            .then(
              childService =>{
                this._admin_question_rule = childService;
                return childService;
              });
        }
      );
    }

}