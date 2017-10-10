import { Injectable } from '@angular/core';
import {University} from '../../../shared/_models/university.model';
import {Entity} from '../../../shared/_abstracts/entity';
import {HypermediaConsumeService, Service, Link} from '../../../core/_services/hypermedia-consume.service';
import {SuperHttpConsumerService} from '../../../core/_abstracts/super-http-consumer-service';
import { Headers, Http, RequestOptions, Response, RequestOptionsArgs } from '@angular/http';
import { AbstractAdminService } from '../_abstracts/abstract-admin-service';
import { AuthService } from '../../../core/_services/auth.service';

@Injectable()
export class UniversityService extends AbstractAdminService {

  get collection_name():string{
     return 'university';
  }
   
  constructor(
    protected hypermediaConsumeService: HypermediaConsumeService,
    protected http: Http,
	protected authService: AuthService
  ) { super(hypermediaConsumeService, http, authService); }

  private _admin_university:Service; 
  
    getMainService(): Promise<Service>{
      if(this._admin_university){
        return Promise.resolve(this._admin_university);
      }
      return super.getMainService().then(
        superService => {
          return this.getService('admin-university', superService.response.getURL('university'))
            .then(
              childService =>{
                this._admin_university = childService;
                return childService;
              });
        }
      );
    }

}