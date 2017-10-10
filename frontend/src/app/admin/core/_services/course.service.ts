import { Injectable } from '@angular/core';
import {Course} from '../../../shared/_models/course.model';
import {Entity} from '../../../shared/_abstracts/entity';
import {HypermediaConsumeService, Service, Link} from '../../../core/_services/hypermedia-consume.service';
import {SuperHttpConsumerService} from '../../../core/_abstracts/super-http-consumer-service';
import { Headers, Http, RequestOptions, Response, RequestOptionsArgs } from '@angular/http';
import { AbstractAdminService } from '../_abstracts/abstract-admin-service';
import { AuthService } from '../../../core/_services/auth.service';

@Injectable()
export class CourseService extends AbstractAdminService {
  
  get collection_name():string{
     return 'course';
  }
   
  constructor(
    protected hypermediaConsumeService: HypermediaConsumeService,
    protected http: Http,
	  protected authService: AuthService
  ) { super(hypermediaConsumeService, http, authService); }


  private _admin_course:Service; 
  
    getMainService(): Promise<Service>{
      if(this._admin_course){
        return Promise.resolve(this._admin_course);
      }
      return super.getMainService().then(
        superService => {
          return this.getService('admin-course', superService.response.getURL('course'))
            .then(
              childService =>{
                this._admin_course = childService;
                return childService;
              });
        }
      );
    }

}