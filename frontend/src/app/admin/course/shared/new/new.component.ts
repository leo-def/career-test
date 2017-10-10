import { Component, OnInit, Input, Output, Optional, EventEmitter } from '@angular/core';
import { Course } from '../../../../shared/_models/course.model';
import {FormGroup, FormControl, FormBuilder,Validators} from '@angular/forms';
import { ResourceResponse } from '../../../../core/_services/hypermedia-consume.service';

@Component({
  selector: 'app-admin-course-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class AdminCourseNewComponent implements OnInit {   @Input()    parent :String;

  @Input() university :ResourceResponse;
  
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
