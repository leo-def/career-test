import { Headers, Http, RequestOptions, Response, RequestOptionsArgs } from '@angular/http';

export class SuperHttpConsumerService {

  protected getDefaultOptions():RequestOptionsArgs{
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return options;
  }
}
