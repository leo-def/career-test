import { Headers, Http, RequestOptions, Response, RequestOptionsArgs } from '@angular/http';
import { HypermediaConsumeService, Service, ResourceResponse } from '../../../core/_services/hypermedia-consume.service';
import {AbstractService} from '../../../core/_abstracts/abstract-service';
import { AuthService } from '../../../core/_services/auth.service';

export class AbstractStudentService extends AbstractService{

  private _student_service:Service; 

  getMainService(){
    if(this._student_service){
      return Promise.resolve(this._student_service);
    }
    return super.getMainService().then(
      superService => {
        return this.getService('student', superService.response.getURL('student'))
          .then(
            childService =>{
              this._student_service = childService;
              return childService;
            });
      }
    );
  }
  
  constructor(
    protected hypermediaConsumeService: HypermediaConsumeService,
    protected http: Http,
	  protected authService: AuthService
  ) { super(hypermediaConsumeService, http, authService); }

}
