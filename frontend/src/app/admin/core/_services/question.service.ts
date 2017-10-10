import { Injectable } from '@angular/core';
import {Question} from '../../../shared/_models/question.model';
import {Entity} from '../../../shared/_abstracts/entity';
import {HypermediaConsumeService, Service, Link} from '../../../core/_services/hypermedia-consume.service';
import {SuperHttpConsumerService} from '../../../core/_abstracts/super-http-consumer-service';
import { Headers, Http, RequestOptions, Response, RequestOptionsArgs } from '@angular/http';
import { AbstractAdminService } from '../_abstracts/abstract-admin-service';
import { AuthService } from '../../../core/_services/auth.service';

@Injectable()
export class QuestionService extends AbstractAdminService {
  
  get collection_name():string{
     return 'question';
  }
   
  constructor(
    protected hypermediaConsumeService: HypermediaConsumeService,
    protected http: Http,
	protected authService: AuthService
  ) { super(hypermediaConsumeService, http, authService); }

  private _admin_question:Service; 
  
    getMainService(): Promise<Service>{
      if(this._admin_question){
        return Promise.resolve(this._admin_question);
      }
      return super.getMainService().then(
        superService => {
          return this.getService('admin-question', superService.response.getURL('question'))
            .then(
              childService =>{
                this._admin_question = childService;
                return childService;
              });
        }
      );
    }

}