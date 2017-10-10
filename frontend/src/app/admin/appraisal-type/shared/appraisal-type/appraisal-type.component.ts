import { Component, OnInit, Optional, Input, Output } from '@angular/core';
import { AppraisalTypeService } from '../../../core/_services/appraisal-type.service';
import { ResourceResponse } from '../../../../core/_services/hypermedia-consume.service';
import { AppraisalType } from '../../../../shared/_models/appraisal-type.model';
import { MessageService } from '../../../../core/_services/message.service';

@Component({
  selector: 'app-admin-appraisal-type',
  templateUrl: './appraisal-type.component.html',
  styleUrls: ['./appraisal-type.component.css']
})
export class AdminAppraisalTypeComponent implements OnInit {   
  
  @Input() persistible: boolean = true;
  
  @Input() removible: boolean = true;

  @Input() resourceResponseCollection :ResourceResponse;

  resourceResponseSelected : ResourceResponse;

  _new: boolean = false;

  collectionName:String = this.service.collection_name;
  
  constructor(private service: AppraisalTypeService, private messageService: MessageService) { }

  ngOnInit() {
    if(!this.resourceResponseCollection){
      this.all();
    }
  }
  all(){
    this.service.all()
      .then(response => {
        this.resourceResponseCollection = response;
        this.deselect();
      });
  }

  create(resourceResponse: ResourceResponse){
	if(! this.persistible){return;}
  return this.service.create(resourceResponse)
      .then(response => {
        this.messageService.openSnackBar(` ${response._data.title} salvo com sucesso`);
        return this.all();
      });
  }
  update(resourceResponse: ResourceResponse){
	if(! this.persistible){return;}
  return this.service.update(resourceResponse)
      .then(response => {
        this.messageService.openSnackBar(` ${response._data.title} salvo com sucesso`);
        return this.all();
      });
  }
  remove(resourceResponse: ResourceResponse){
	if(! this.persistible){return;}
  return this.service.delete(resourceResponse, this.removible)
      .then(response => {
        this.messageService.openSnackBar(` ${response._data.title} removido com sucesso`);
        return this.all();
      });
  }
  new(){
	if(! this.persistible){return;}
    var val: boolean = this._new;
    this.deselect();
    this._new = !val;
  }
  deselect(){
    this._new = false;
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
    return (this.resourceResponseSelected != null);
  }
  get showList(): boolean {
	  
	  return !(this.hasItemSelected || this._new);
  }
}
