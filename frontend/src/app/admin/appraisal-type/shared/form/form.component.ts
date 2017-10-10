import { Component, OnInit, Input, Output, EventEmitter, Optional} from '@angular/core';
import {FormGroup, FormControl, FormBuilder,Validators} from '@angular/forms';
import {AppraisalType} from '../../../../shared/_models/appraisal-type.model';
import {Entity} from      '../../../../shared/_abstracts/entity';
import { ResourceResponse } from '../../../../core/_services/hypermedia-consume.service';

@Component({
  selector: 'app-admin-appraisal-type-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class AdminAppraisalTypeFormComponent implements OnInit {   
  
  @Input() resourceResponse : ResourceResponse;

  _form : FormGroup;

  @Output() value : EventEmitter<ResourceResponse> = new EventEmitter<ResourceResponse>();
  
  constructor(private formBuilder: FormBuilder) { }
/*

	Item
		title: string;
		description: string;
	DisplayItem
		image: string;
*/
  ngOnInit() {
    this.resourceResponse = this.resourceResponse || new ResourceResponse();
    this._form = this.formBuilder.group({
      title: [
          this.resourceResponse._data.title,
         [
           Validators.required,
           Validators.maxLength(50)
        ]
       ],
      description: this.resourceResponse._data.description,
      image: [this.resourceResponse._data.image, Validators.required]
    });
    this._form.valueChanges.subscribe(data => {
        this.resourceResponse._data = data
        this.value.emit(this.resourceResponse);

    });
  }
}
