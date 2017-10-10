import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProgressService {

  _showProgress = new Subject<any>();

  get showProgress(): Observable<Boolean>{
    return this._showProgress.asObservable();
  }

  get config(): ProgressConfig{
    return new ProgressConfig();
  }
  constructor() { }


}
export class ProgressConfig{
  color: string = 'primary';
  mode:string = 'determinate';
  value:number = 50;
}
