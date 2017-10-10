import { Headers, Http, RequestOptions, Response, RequestOptionsArgs } from '@angular/http';
import { HypermediaConsumeService, Service, ResourceResponse } from '../../../core/_services/hypermedia-consume.service';
import {AbstractService} from '../../../core/_abstracts/abstract-service';
import { AuthService } from '../../../core/_services/auth.service';

export class AbstractAdminService extends AbstractService{
  
  private _admin_service:Service; 
  
  getMainService(): Promise<Service>{
    if(this._admin_service){
      return Promise.resolve(this._admin_service);
    }
    return super.getMainService().then(
      superService => {
        return this.getService('admin', superService.response.getURL('admin'))
          .then(
            childService =>{
              this._admin_service = childService;
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

  all(options?: RequestOptions | Headers): Promise<ResourceResponse>{
    return this.getMainService()
      .then(service => {
        console.log(service);
        return service.response;
      });
  }

  create(resource: ResourceResponse, options?: RequestOptions | Headers): Promise<ResourceResponse>{
      return this.getMainService()
        .then(service => {
          return this.http.post(service.response.getURL()
              , resource._data
              , this.setDefaultOptions(options))
              .toPromise()
              .then(response => {
					let resourceResponse: ResourceResponse =  new ResourceResponse(response.json());
					return resourceResponse;
              });
          });
  }

  update(resource: ResourceResponse, options?: RequestOptions | Headers): Promise<ResourceResponse>{
		  return this.http.put(resource.getURL()
            , resource._data
            , this.setDefaultOptions(options))
            .toPromise()
            .then(response => {
              return new ResourceResponse(response.json());
             });
      }
 
  
      find(resource: ResourceResponse, link?: String, options?: RequestOptions | Headers): Promise<ResourceResponse>{
      return this.hypermediaConsumeService.getResource(
		resource,
		link,
		this.setDefaultOptions(options));
  }

  delete(resource: ResourceResponse, removible: boolean = true, options?: RequestOptions | Headers): Promise<ResourceResponse>{
		if(!removible){
			return Promise.resolve(resource);
		}
		return this.http.delete(
			  resource.getURL(),
			  this.setDefaultOptions(options))
			.toPromise()
			.then(response => {
				return resource;
			});

  }
}
