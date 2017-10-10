import { Injectable} from '@angular/core';
import { AppraisalType } from '../../../shared/_models/appraisal-type.model';
import { Entity } from '../../../shared/_abstracts/entity';
import { HypermediaConsumeService, Service, ResourceResponse } from '../../../core/_services/hypermedia-consume.service';
import { SuperHttpConsumerService } from '../../../core/_abstracts/super-http-consumer-service';
import { Headers, Http, RequestOptions, Response, RequestOptionsArgs } from '@angular/http';
import { AbstractAdminService } from '../_abstracts/abstract-admin-service';
import { AuthService } from '../../../core/_services/auth.service';

@Injectable()
export class AppraisalTypeService extends AbstractAdminService{
  
  get collection_name():string{
     return 'appraisalType';
  }
  
  constructor(
    protected hypermediaConsumeService: HypermediaConsumeService,
    protected http: Http,
	  protected authService: AuthService
  ) { super(hypermediaConsumeService, http, authService); }

  private _admin_appraisal_type:Service; 
  
  getMainService(): Promise<Service>{
    if(this._admin_appraisal_type){
      return Promise.resolve(this._admin_appraisal_type);
    }
    return super.getMainService().then(
      superService => {
        return this.getService('admin-appraisalType', superService.response.getURL('appraisalType'))
          .then(
            childService =>{
              this._admin_appraisal_type = childService;
              return childService;
            });
      }
    );
  }
  
}
