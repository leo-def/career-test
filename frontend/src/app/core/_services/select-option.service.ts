import { Injectable } from '@angular/core';
import { SelectOption } from '../../shared/_dtos/select-option.dto';
import { HypermediaConsumeService, ResourceResponse, Service } from './hypermedia-consume.service';
import { SuperHttpConsumerService } from '../_abstracts/super-http-consumer-service';
import { Headers, Http, RequestOptions, Response, RequestOptionsArgs } from '@angular/http';
import { AbstractService } from '../../core/_abstracts/abstract-service';

@Injectable()
export class SelectOptionService {
  protected select_options_service_name: string = 'career-test';
  protected select_options_service_link: string = AbstractService.url;
  protected select_options_service_path: string  = 'selectOption';

  constructor(
    private hypermediaConsumeService: HypermediaConsumeService,
    private http: Http
  ) { }

  //localhost:9001/selectOption
  getSerice(): Promise<Service>{
    //busca no host principal o link para o servico em questão
    return this.hypermediaConsumeService.getService(
      this.select_options_service_name,
      this.select_options_service_link);
  }
  getChildService(): Promise<Service>{
    return this.getSerice().then(service => {
      return this.hypermediaConsumeService.getService(
        this.select_options_service_name+"-"+this.select_options_service_path,
        service.response.getURL()
      );
    });
  }
  getSelectOptionCollection(type:string): Promise<ResourceResponse[]>{
  return this.getChildService().then(service => {
    return this.hypermediaConsumeService.getResource(service)
      .then(response => {
        return response.getEmbeddedCollectionResource("selectOptions");
      });
   });
  }

/*
  public getSelectOptions(type: string){
	return this.getSelectOptionsUrl(type).then(url => {
		
		return this.http.get(url)
		.toPromise()
			.then(response => {
				return <SelectOption[]> this.hypermediaConsumeService.getResponseData(response.json()).selectOptions;
			});
		});
	}
*/
}
