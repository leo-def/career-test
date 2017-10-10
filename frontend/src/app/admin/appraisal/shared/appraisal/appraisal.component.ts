import { Component, OnInit, Optional, Input, Output } from '@angular/core';
import { AppraisalService } from '../../../core/_services/appraisal.service';
import { Appraisal } from '../../../../shared/_models/appraisal.model';
import { MessageService } from '../../../../core/_services/message.service';
import { ResourceResponse } from '../../../../core/_services/hypermedia-consume.service';

@Component({
  selector: 'app-admin-appraisal',
  templateUrl: './appraisal.component.html',
  styleUrls: ['./appraisal.component.css']
})
export class AdminAppraisalComponent implements OnInit {

  @Input() appraisalType :ResourceResponse;

  @Input() persistible: boolean = true;
  
  @Input() removible: boolean = true;

  @Input() resourceResponseCollection :ResourceResponse;

  resourceResponseSelected : ResourceResponse;

  _new: boolean = false;

  collectionName:String = this.service.collection_name;
  
  constructor(private service: AppraisalService, private messageService: MessageService) { }

  ngOnInit() {
    if(!this.resourceResponseCollection){
      this.all();
    }
  }
  
	  
  all(){
    if(this.appraisalType){
      return this.service.getResource(this.appraisalType, 'appraisalList')
        .then(response => {
          this.resourceResponseCollection = response;
          this.deselect();
        });
    }else {
    this.service
      .all()
      .then(response => {
        this.resourceResponseCollection = response;
        this.deselect();
      });
    }
  }

  create(resourceResponse: ResourceResponse){
	  if(! this.persistible){return;}
    this.service.create(resourceResponse)
      .then(response => {
        if(this.appraisalType){
          return this.service.putUriList(response, [this.appraisalType], 'appraisalType')
            .then(parentResponse => {
              this.messageService.openSnackBar(` ${response._data.title} salvo com sucesso em  ${this.appraisalType._data.title}`);
              this.all();
            });
        }else{
          this.messageService.openSnackBar(` ${response._data.title} salvo com sucesso`);
          this.all();
        }
      });
  }
  
  update(resourceResponse: ResourceResponse){
	  if(! this.persistible){return;}
    this.service.update(resourceResponse)
      .then(response => {
        this.messageService.openSnackBar(` ${response._data.title} salvo com sucesso`);
        this.all();
      });
  }
  remove(resourceResponse: ResourceResponse){
    if(! this.persistible){return;}
    
    if(this.appraisalType){
      this.service.deleteUriList(this.appraisalType, resourceResponse._data.id, 'questionList')
      .then(parentResponse => {
        this.messageService.openSnackBar(` ${resourceResponse._data.title} removido de ${this.appraisalType._data.title}`);
      });
    }

    this.service.delete(resourceResponse, this.removible)
      .then(response => {
        this.messageService.openSnackBar(` ${response._data.title} removido com sucesso`);
        this.all();
      });
  }
  
  new(){
    if(!this.persistible){return true;}
    var val: boolean = this._new;
    this.deselect();
    this._new = !val;
  }

  deselect(){
    this._new = false
    this.resourceResponseSelected = null;
  }

  select(resourceResponse: ResourceResponse){
    this.deselect();
    this.service.find(resourceResponse)
      .then(response => {
        this.resourceResponseSelected = response;
      });
  }

  get hasItemSelected():boolean{
    if(!this.persistible){return false;}
    return (this.resourceResponseSelected != null);
  }
  get showList(): boolean {
    if(!this.persistible){return true;}
	  return !(this.hasItemSelected || this._new);
  }
}
