import { Component, OnInit,OnChanges,  Input, Output, EventEmitter, Optional} from '@angular/core';
import {FormGroup, FormControl, FormBuilder,Validators} from '@angular/forms';
import {Area} from '../../../../shared/_models/area.model';
import {Entity} from      '../../../../shared/_abstracts/entity';
import { ResourceResponse } from '../../../../core/_services/hypermedia-consume.service';

@Component({
  selector: 'app-admin-area-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class AdminAreaFormComponent implements OnInit{

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
      title: [
          this.resourceResponse._data.title,
         [
           Validators.required,
           Validators.maxLength(50)
        ]
       ],
      description: this.resourceResponse._data.description,
      image: [this.resourceResponse._data.image, Validators.required],
      mecId: [this.resourceResponse._data.mecId, Validators.required]
    });
    this._form.valueChanges.subscribe(data => {
      this.resourceResponse._data = data
      this.value.emit(this.resourceResponse);
    });
  }
}
