import { Component, OnInit, Input, Output, EventEmitter, Optional} from '@angular/core';
import {FormGroup, FormControl, FormBuilder,Validators} from '@angular/forms';
import {QuestionRule} from '../../../../shared/_models/question-rule.model';
import {Entity} from      '../../../../shared/_abstracts/entity';
import { ResourceResponse } from '../../../../core/_services/hypermedia-consume.service';

@Component({
  selector: 'app-admin-question-rule-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class AdminQuestionRuleFormComponent implements OnInit {   
  
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
	//question: Question;
	//Personality: Personality;
    this.resourceResponse = this.resourceResponse || new ResourceResponse();
    this._form = this.formBuilder.group({
      value: [this.resourceResponse._data.value, Validators.required],
      percentage: [this.resourceResponse._data.percentage, Validators.required],
      type: [this.resourceResponse._data.type, Validators.required]
    });
    this._form.valueChanges.subscribe(data => {
		this.resourceResponse._data = data
		this.value.emit(this.resourceResponse);
    });

  }
}
