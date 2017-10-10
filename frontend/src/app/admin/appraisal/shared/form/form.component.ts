import { Component, OnInit, Input, Output, EventEmitter, Optional} from '@angular/core';
import {FormGroup, FormControl, FormBuilder,Validators} from '@angular/forms';
import {Appraisal} from '../../../../shared/_models/appraisal.model';
import {Entity} from      '../../../../shared/_abstracts/entity';
import { ResourceResponse } from '../../../../core/_services/hypermedia-consume.service';

@Component({
  selector: 'app-admin-appraisal-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class AdminAppraisalFormComponent implements OnInit {

  @Input() appraisalType :ResourceResponse;

  @Input() resourceResponse: ResourceResponse;

  _form : FormGroup;

  @Output()
  resourceResponseChange : EventEmitter<ResourceResponse> = new EventEmitter<ResourceResponse>();

  constructor(private formBuilder: FormBuilder) { }

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
      type: [this.resourceResponse._data.type, Validators.required],
      code: [this.resourceResponse._data.code, Validators.required]
    });
    this._form.valueChanges.subscribe(data => {
      this.resourceResponse._data = data;
      this.resourceResponseChange.emit(this.resourceResponse);
    });

  }

}
