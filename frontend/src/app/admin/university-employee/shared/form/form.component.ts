import { Component, OnInit, Input, Output, EventEmitter, Optional} from '@angular/core';
import {FormGroup, FormControl, FormBuilder,Validators} from '@angular/forms';
import {UniversityEmployee} from '../../../../shared/_models/university-employee.model';
import {Entity} from      '../../../../shared/_abstracts/entity';
import { ResourceResponse } from '../../../../core/_services/hypermedia-consume.service';

@Component({
  selector: 'app-admin-university-employee-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class AdminUniversityEmployeeFormComponent implements OnInit {

  @Input() university :ResourceResponse;
  
  @Input() @Output() resourceResponse: ResourceResponse;
  
  _form : FormGroup;

  @Output() value : EventEmitter<ResourceResponse> = new EventEmitter<ResourceResponse>();


  constructor(private formBuilder: FormBuilder) { }

   ngOnInit() {
    this.resourceResponse = this.resourceResponse || new ResourceResponse();
    this._form = this.formBuilder.group({
      type: [
          this.resourceResponse._data.type,
         [
           Validators.required,
           Validators.maxLength(50)
        ]
       ],
    });
    this._form.valueChanges.subscribe(data => {
		this.resourceResponse._data = data
		this.value.emit(this.resourceResponse);
    });

  }

}
