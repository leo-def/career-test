import { Headers, Http, RequestOptions, Response, RequestOptionsArgs } from '@angular/http';
import { HypermediaConsumeService, Service, ResourceResponse } from '../_services/hypermedia-consume.service';
import { AuthService } from '../_services/auth.service';
export class AbstractService{

  static url: string = 'http://localhost:8080/';//'http://careertest-env.ppuveccbfp.us-east-1.elasticbeanstalk.com/';
  
  private _service:Service; 
  
  get service_url(): string{
    return AbstractService.url;
  }
  get service_name(): string{
    return 'career-test';
  }
  

  getMainService(): Promise<Service>{
	  if(this._service){
      return Promise.resolve(this._service);
    }
    return this.loadService()
      .then(service => {
        this._service = service;
        return this._service;
      });

  }



  constructor(
    protected hypermediaConsumeService: HypermediaConsumeService,
    protected http: Http,
	  protected authService: AuthService
  ) {  }

  protected setDefaultOptions(options: RequestOptions | Headers = new RequestOptions()):RequestOptions{
    let returnOptions = null;
    if(options instanceof RequestOptions){
      options.headers = this.setDefaultHeaders(options.headers);
      returnOptions = options;
    }else{
      options = this.setDefaultHeaders(options);
      returnOptions = new RequestOptions({headers: options});
    }
    return returnOptions;
  }
  
  protected setDefaultHeaders(headers:Headers = new Headers()): Headers{
    headers = this.authService.setHeaders(headers);
    return headers;
  }

  loadService(options?: RequestOptions | Headers): Promise<Service>{
    return this.hypermediaConsumeService.getService(
      this.service_name,
      this.service_url,
	    this.setDefaultOptions(options));
  }

  getChildService(service_name: String, options?: RequestOptions | Headers): Promise<Service>{
    return this.getMainService()
      .then(mainService => {
        return this.hypermediaConsumeService.getService(
          this.service_name+"-"+service_name,
          mainService.response._links.get(service_name)._url,
          this.setDefaultOptions(options));
      });

  }

  getService(service_name: String, url: String = null, options?: RequestOptions | Headers): Promise<Service>{
    return this.hypermediaConsumeService.getService(
      service_name,
      url,
      this.setDefaultOptions(options));
  }

  getResource(obj :any, link: String ="self", options?: RequestOptions | Headers): Promise<ResourceResponse>{
    return this.hypermediaConsumeService.getResource(
		  obj,
		  link,
		  this.setDefaultOptions(options));
  }

  putUriList(parent: ResourceResponse, childs: ResourceResponse[], relationshipLink:String, options?: RequestOptions | Headers): Promise<ResourceResponse>{
    return this.hypermediaConsumeService.putUriList(
      parent,
      childs,
      relationshipLink,
		  this.setDefaultOptions(options));
  }
  
  deleteUriList(parent: ResourceResponse, id: any, relationshipLink?:String, options?: RequestOptions | Headers): Promise<ResourceResponse>{
    return this.hypermediaConsumeService.deleteUriList(
      parent,
      id,
      relationshipLink,
		  this.setDefaultOptions(options));
  }
}
