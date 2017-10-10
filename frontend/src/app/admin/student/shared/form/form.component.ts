import { Component, OnInit, Input, Output, EventEmitter, Optional} from '@angular/core';
import {FormGroup, FormControl, FormBuilder,Validators} from '@angular/forms';
import {Student} from '../../../../shared/_models/student.model';
import {Entity} from      '../../../../shared/_abstracts/entity';
import { ResourceResponse } from '../../../../core/_services/hypermedia-consume.service';

@Component({
  selector: 'app-admin-student-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class AdminStudentFormComponent implements OnInit {   
  
  @Input()    
  parent :String;

  @Input()
  @Output()
  resourceResponse: ResourceResponse;

  _form : FormGroup;

  @Output()
  value : EventEmitter<ResourceResponse> = new EventEmitter<ResourceResponse>();

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.resourceResponse = this.resourceResponse || new ResourceResponse();
    this._form = this.formBuilder.group({
		nickname: [this.resourceResponse._data.nickname, Validators.required],
		imageURL: [this.resourceResponse._data.imageURL, Validators.required],
		accountId: [this.resourceResponse._data.accountId, Validators.required],
		reachable: [this.resourceResponse._data.reachable, Validators.required],
    });
    this._form.valueChanges.subscribe(data => {
		this.resourceResponse._data = data
		this.value.emit(this.resourceResponse);
    });
  }


}
