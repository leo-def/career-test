import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response, RequestOptionsArgs } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


//encapsula metadados de um Link assim como do ponto de acesso que ele referencia
export interface ILinkResponse{
  _links:Map<String, Link>;
  hasLinks():boolean;
  getLink(name?:String): Link;
  getURL(name?:String): string;
  getURLWithPathParams(name: String, params :any[]):string;
}
export class LinkResponseImpl implements ILinkResponse{
  private _prv_links: Map<String, Link>= new Map<String,Link>();
  
  constructor(response ?:any){
    if(response){
      this.setObjectLinks(response);
    }
  }

  public hasLinks():boolean{
    return (this._prv_links != null);
  
  }

  public getLink(name:String = "self"): Link{
    return this._prv_links.get(name);
  }

  public getURL(name:String = "self"): string{
    return this.getLink(name)._url.toString();
  }

  public getURLWithPathParams(name: String, params :any[]):string {
    let url = this.getURL(name);
    if(!url.endsWith('/')){url += '/';}
    params.forEach(item => {
      url += (item + '/');
    });
    return url.toString(); 
  }

  get _links():Map<String, Link> {
    return this._prv_links;
  }

  set _links(_links :Map<String, Link>) {
    if(!_links){
      this._prv_links = new Map<String,Link>();
    }else {
        this._prv_links = _links;
    }
  }

  private setObjectLinks(param: any){
    let obj:any;
    if(param._links){
      obj = param._links;
    }else{
      obj = param;
    }
    this.loadLinksFromObject(obj);
  }

  private loadLinksFromObject(_links: any){
    Object.keys(_links).forEach(key => {
        let value = _links[key];
        if(value){
          this._prv_links.set(key, new Link(key, value.href, value.templated));
        }
    });
  }

  public static getObjectListURL(objectList: any[], link: String= "self"){
    let body: String = "";
    let count:number = 0;
    objectList.forEach(object => {
      if(count > 0){
        body+= '\r\n';
      }
      body += this.getObjectURL(object);
      count++;
    });
    return body;
  }

  public static getObjectURL(obj: any, link:String ="self"): string{
    let url: String = obj.toString();
    for (let key in obj) {
        if(key == "_url"){
          return obj._url;
        }else if (key == "_links" ){
          return (obj._links as Map<String, Link>).get(link)._url.toString();
        }
    }
    return obj.toString();
  }

}
export interface IEmbeddedResponse{
  _embedded: any;
  hasEmbedded() :boolean;
  getEmbeddedResource(name?: String);
  getEmbeddedCollectionResource(name?: String);
  getEmbeddedData(name?: String);
  getEmbeddedCollectionData(name?: String);
}
export class EmbeddedResponseImpl implements IEmbeddedResponse{
    _embedded: any;

    constructor(response: any){
    if(response._embedded){
      this._embedded = response._embedded;
    }
  }

  public hasEmbedded() :boolean{
    return (this._embedded != null);
  }
  public getEmbeddedResource(name?: String){
    let embedded : any =  this._embedded;
    if(name){
      embedded = this._embedded[name.toString()];
    }
    return new ResourceResponse(embedded);
  }
  public getEmbeddedCollectionResource(name?: String){
    let embedded : any =  this._embedded;
    if(name){
      embedded = this._embedded[name.toString()];
    }
    return (( embedded as Array<any> ).map(item => new ResourceResponse(item)) as Array<ResourceResponse>);
  }
  public getEmbeddedData(name?: String){
    let embedded : any =  this._embedded;
    if(name){
      embedded = this._embedded[name.toString()];
    }
    return new ResourceResponse(embedded)._data;
  }
  public getEmbeddedCollectionData(name?: String){
    let embedded : any =  this._embedded;
    if(name){
      embedded = this._embedded[name.toString()];
    }
    return ((embedded as Array<any> ).map(item => new ResourceResponse(item)._data) as Array<any>);
  }
}

export interface IPageResponse{
  _page: Page;
  hasPage(): boolean;

}
export class PageResponseImpl implements IPageResponse {
  _page: Page = null;

  constructor(response: any){
    if(response.page){
      this._page = new Page(response.page);
    }
  }

  public hasPage(): boolean{
    return (this._page != null);
  }
}

export interface IResourceResponse extends ILinkResponse, IEmbeddedResponse, IPageResponse{
}

export class ResourceResponse implements IResourceResponse{
  
  private linkResponseImpl :LinkResponseImpl;
  private embeddedResponseImpl :EmbeddedResponseImpl;
  private pageResponseImpl : PageResponseImpl;
  private _prv_data:any = new Object();
  public _response: any = null;

  constructor(response?:any){
    if(! response){return;}
    
	this._response = response;
    this._data = response;
	
    this.linkResponseImpl = new LinkResponseImpl(this._response);

    this.embeddedResponseImpl = new EmbeddedResponseImpl(this._response);

    this.pageResponseImpl = new PageResponseImpl(this._response);
  }

  get _data(): any{
	return this._prv_data;
  }
  
  set _data(response: any){
	if(!response){return;}
	if(! this._prv_data){ this._prv_data = new Object();}
	for(let key in response){
        if(!key.startsWith("_")){
          this._prv_data[key] = response[key];
			    this[key] = response[key];
        }
	}
  }
	
  
    //ILinkResponse
    get _links():Map<String, Link>{return this.linkResponseImpl._links;}
    set _links(_links: Map<String, Link>){this.linkResponseImpl._links = _links;}
    hasLinks():boolean{ return this.linkResponseImpl.hasLinks();}
    getLink(name?: String): Link{return this.linkResponseImpl.getLink(name);}
    getURL(name?:String): string{ return this.linkResponseImpl.getURL(name);}
    getURLWithPathParams(name: String, params :any[]):string{ return this.linkResponseImpl.getURLWithPathParams(name, params);}
    
    // IEmbeddedResponse
    get _embedded(): any{ return this.embeddedResponseImpl._embedded};
    set _embedded(_embedded:any){ this.embeddedResponseImpl._embedded = _embedded};
    hasEmbedded():boolean{return this.embeddedResponseImpl.hasEmbedded()}
    getEmbeddedResource(name?: String){return this.embeddedResponseImpl.getEmbeddedResource(name);}
    getEmbeddedCollectionResource(name?: String){return this.embeddedResponseImpl.getEmbeddedCollectionResource(name);}
    public getEmbeddedData(name?: String){return this.embeddedResponseImpl.getEmbeddedData(name); }
    public getEmbeddedCollectionData(name?: String){return this.embeddedResponseImpl.getEmbeddedCollectionData(name);}
    
    // IPageResponse
    get _page(): Page{return this.pageResponseImpl._page;}
    set _page(_page: Page){ this.pageResponseImpl._page = _page;}
    hasPage(): boolean{return this.linkResponseImpl.hasLinks();}

  }


  export class Link{
  _name: String;
  _href: String;
  _templated: boolean;

  constructor(_name:String, _href: String, _templated: boolean){
    this._name = _name;
    this._href = _href;
    this._templated = _templated;
  }

  get _params():String[] {
    if(this._href && this._href.includes('{')){
      return this._href.split('{')[1].replace('}','').replace('?','').split(',');
    }
    return new Array<String>();
  }
  get _url():String{
    if(this._href && this._href.includes('{')){
      return this._href.split('{')[0];
    }
    return this._href;
  }

}

//encapsula as informações de paginação no retorno de um endpoint
export class Page{
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
  constructor(response?:any){
    if(response){
      this.size = response.size;
      this.totalElements = response.totalElements;
      this.totalPages = response.totalPages;
      this.number = response.number;
    }
  }
}

export class Service{
  name: String;
  url: String;
  response: ResourceResponse;

  constructor(name: String, url: String, response?: any){
    this.name;
    this.url;
    if(response){
      this.response = new ResourceResponse(response);
    }
  }
  public hasResponse(){
      return (this.response != null);
  }
}

@Injectable()
export class HypermediaConsumeService {

  constructor(private http: Http) { }

  protected setDefaultOptions(options: RequestOptions | Headers = new RequestOptions(), uriList: boolean = false):RequestOptions{
    let returnOptions = null;
    if(options instanceof RequestOptions){
      options.headers = this.setDefaultHeaders(options.headers, uriList);
      returnOptions = options;
    }else{
      options = this.setDefaultHeaders(options, uriList);
      returnOptions = new RequestOptions({headers: options});
    }
    return returnOptions;
  }
  
  protected setDefaultHeaders(headers:Headers, uriList: boolean):Headers{
    if(!headers){
      headers = new Headers();
    }else if(headers.has('Content-Type')){
      return;
    }else{
      if(uriList){
        headers.append('Content-Type', 'text/uri-list'); 
      } else {
        headers.append('Content-Type', 'application/json');
      }
    }
    return headers;
  }

  public getService(service_name: String, url: String, options?: RequestOptions | Headers): Promise<Service>{
    return this.http.get(
      url.toString(),
      this.setDefaultOptions(options))
        .toPromise()
        .then(response => {
          let service: Service = new Service(
            service_name,
            url,
            response.json());
          return service;
      });
  }

  public getResource(obj :any, link: String ="self", options?: RequestOptions | Headers){
    return this.http.get(
      LinkResponseImpl.getObjectURL(obj, link),
      this.setDefaultOptions(options))
        .toPromise()
        .then(response => {
			return new ResourceResponse(response.json());
		});
  }

  public putUriList(parent: ResourceResponse, childs: ResourceResponse[], relationshipLink:String, options?: RequestOptions | Headers): Promise<ResourceResponse>{
	  return this.http.put(
      parent.getURL(relationshipLink),
      LinkResponseImpl.getObjectListURL(childs),
      this.setDefaultOptions(options, true))
	        .toPromise()
          .then(response => {return new ResourceResponse(response)});
  }

  public deleteUriList(parent: ResourceResponse, id: any, relationshipLink?:String, options?: RequestOptions | Headers): Promise<ResourceResponse>{
    return this.http.delete(
      parent.getURLWithPathParams(
      relationshipLink, [id]),
       this.setDefaultOptions(options, true))
          .toPromise()
          .then(response => {return new ResourceResponse(response)});
  }

 }
