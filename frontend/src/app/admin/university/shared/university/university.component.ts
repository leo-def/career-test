import { Component, OnInit, Optional, Input, Output } from '@angular/core';
import { UniversityService } from '../../../core/_services/university.service';
import { University } from '../../../../shared/_models/university.model';
import { MessageService } from '../../../../core/_services/message.service';
import { ResourceResponse } from '../../../../core/_services/hypermedia-consume.service';

@Component({
  selector: 'app-admin-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class AdminUniversityComponent implements OnInit {   

  @Input() persistible: boolean = true;
  
  @Input() removible: boolean = true;

  @Input() resourceResponseCollection :ResourceResponse;

  resourceResponseSelected : ResourceResponse;

  _new: boolean = false;

  collectionName:String = this.service.collection_name;
  
  constructor(private service: UniversityService, private messageService: MessageService) { }

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
    this.service.create(resourceResponse)
      .then(response => {
        this.messageService.openSnackBar(` ${response._data.title} salvo com sucesso`);
        this.all();
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
	this.service.delete(resourceResponse)
      .then(response => {
        this.messageService.openSnackBar(` ${response._data.title} removido com sucesso`);
        this.all();
      });
  }
  new(){
    if(! this.persistible){return;}
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
    return (this.resourceResponseSelected != null);
  }
  get showList(): boolean {
	  return !(this.hasItemSelected || this._new);
  }
}
