import { Injectable } from '@angular/core';
import {Student} from '../../../shared/_models/student.model';
import {Entity} from '../../../shared/_abstracts/entity';
import {HypermediaConsumeService, Service, Link} from '../../../core/_services/hypermedia-consume.service';
import {SuperHttpConsumerService} from '../../../core/_abstracts/super-http-consumer-service';
import { Headers, Http, RequestOptions, Response, RequestOptionsArgs } from '@angular/http';
import { AbstractAdminService } from '../_abstracts/abstract-admin-service';
import { AuthService } from '../../../core/_services/auth.service';

@Injectable()
export class StudentService extends AbstractAdminService {
  
  get collection_name():string{
     return 'student';
  }
   
  constructor(
    protected hypermediaConsumeService: HypermediaConsumeService,
    protected http: Http,
	protected authService: AuthService
  ) { super(hypermediaConsumeService, http, authService); }

  private _admin_student:Service; 
  
    getMainService(): Promise<Service>{
      if(this._admin_student){
        return Promise.resolve(this._admin_student);
      }
      return super.getMainService().then(
        superService => {
          return this.getService('admin-student', superService.response.getURL('student'))
            .then(
              childService =>{
                this._admin_student = childService;
                return childService;
              });
        }
      );
    }

}