import { Component, OnInit, Input, Output, Optional, EventEmitter } from '@angular/core';
import { QuestionRule } from '../../../../shared/_models/question-rule.model';
import { ResourceResponse } from '../../../../core/_services/hypermedia-consume.service';

@Component({
  selector: 'app-admin-question-rule-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class AdminQuestionRuleListComponent implements OnInit {  
  
  @Input()    
  parent :String;
  
  @Input()
  collectionName: String;

  @Input()
  @Output()
  resourceResponseCollection : ResourceResponse;

  @Output()
  select: EventEmitter<ResourceResponse> = new EventEmitter<ResourceResponse>();

  get _collection():ResourceResponse[]{
    if(!this.resourceResponseCollection){return new Array();}
    return this.resourceResponseCollection.getEmbeddedCollectionResource(this.collectionName);
  }

  constructor() { }

  ngOnInit() {
  }

  selectItem(resourceResponse : ResourceResponse){
    this.select.emit(resourceResponse);
  }

}
