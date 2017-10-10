import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {ProgressConfig, ProgressService} from './core/_services/progress.service';
//import { HypermediaConsumeService } from './core/_services/hypermedia-consume.service';
//import { SelectOptionService } from './core/_services/select-option.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  progressConfig :ProgressConfig = new ProgressConfig();
  _showProgress: Boolean;
  message = '';
  instances =[];


  constructor(
      private progress: ProgressService,
      //private selectOptionService: SelectOptionService
      /*private hypermediaConsumeService: HypermediaConsumeService,
     private http: Http*/
   ){}

  ngOnInit(){
      this.progressConfig = this.progress.config;
      this.progress.showProgress.subscribe(_showProgress => {
        this._showProgress = _showProgress;
      })
      /*this.hypermediaConsumeService.getLinkInfo('careertest', 'personality', 'http://localhost:8080/careertest/').then(response =>{
          this.http.get(response._url)
            .toPromise()
            .then(response => {
        });
      });*/

  }

}
