import { Component, OnInit, Input, Output, Optional, EventEmitter } from '@angular/core';
import { Area } from '../../../../shared/_models/area.model';
import { ResourceResponse } from '../../../../core/_services/hypermedia-consume.service';
import {FormGroup, FormControl, FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-admin-area-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class AdminAreaNewComponent implements OnInit {   @Input()    parent :String;
 
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
