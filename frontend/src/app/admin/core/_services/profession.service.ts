import { Injectable } from '@angular/core';
import {Profession} from '../../../shared/_models/profession.model';
import {Entity} from '../../../shared/_abstracts/entity';
import {HypermediaConsumeService, Service, Link} from '../../../core/_services/hypermedia-consume.service';
import {SuperHttpConsumerService} from '../../../core/_abstracts/super-http-consumer-service';
import { Headers, Http, RequestOptions, Response, RequestOptionsArgs } from '@angular/http';
import { AbstractAdminService } from '../_abstracts/abstract-admin-service';
import { AuthService } from '../../../core/_services/auth.service';

@Injectable()
export class ProfessionService extends AbstractAdminService {
  
  get collection_name():string{
     return 'profession';
  }

  constructor(
    protected hypermediaConsumeService: HypermediaConsumeService,
    protected http: Http,
	protected authService: AuthService
  ) { super(hypermediaConsumeService, http, authService); }

  private _admin_profession:Service; 
  
    getMainService(): Promise<Service>{
      if(this._admin_profession){
        return Promise.resolve(this._admin_profession);
      }
      return super.getMainService().then(
        superService => {
          return this.getService('admin-profession', superService.response.getURL('profession'))
            .then(
              childService =>{
                this._admin_profession = childService;
                return childService;
              });
        }
      );
    }

}