import { Injectable } from '@angular/core';
import { Personality } from '../../../shared/_models/personality.model';
import { Entity } from '../../../shared/_abstracts/entity';
import { HypermediaConsumeService, Service,  Link } from '../../../core/_services/hypermedia-consume.service';
import { SuperHttpConsumerService } from '../../../core/_abstracts/super-http-consumer-service';
import { Headers, Http, RequestOptions, Response, RequestOptionsArgs } from '@angular/http';
import { AbstractAdminService } from '../_abstracts/abstract-admin-service';
import { AuthService } from '../../../core/_services/auth.service';

@Injectable()
export class PersonalityService extends AbstractAdminService {
  
  get collection_name():string{
     return 'personality';
  }

  constructor(
    protected hypermediaConsumeService: HypermediaConsumeService,
    protected http: Http,
	protected authService: AuthService
  ) { super(hypermediaConsumeService, http, authService); }

  private _admin_personality:Service; 
  
    getMainService(): Promise<Service>{
      if(this._admin_personality){
        return Promise.resolve(this._admin_personality);
      }
      return super.getMainService().then(
        superService => {
          return this.getService('admin-personality', superService.response.getURL('personality'))
            .then(
              childService =>{
                this._admin_personality = childService;
                return childService;
              });
        }
      );
    }

}