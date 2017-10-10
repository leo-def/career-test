import { Component, OnInit, Input, Output, Optional, EventEmitter } from '@angular/core';
import { Profession } from '../../../../shared/_models/profession.model';
import {FormGroup, FormControl, FormBuilder,Validators} from '@angular/forms';
import { ResourceResponse } from '../../../../core/_services/hypermedia-consume.service';

@Component({
  selector: 'app-admin-profession-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class AdminProfessionNewComponent implements OnInit {   
  
  @Input()    
  parent :String;
  
  resourceResponse: ResourceResponse = new ResourceResponse();

  @Output()
  create: EventEmitter<ResourceResponse> = new EventEmitter<ResourceResponse>();
  @Output()
  cancel: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {

  }

  emitCreate(resourceResponse: ResourceResponse){
    this.create.emit(resourceResponse);
  }
  emitCancel(){
    this.cancel.emit();
  }

}
