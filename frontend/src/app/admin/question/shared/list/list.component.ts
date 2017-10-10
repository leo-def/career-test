import { Component, OnInit, Input, Output, Optional, EventEmitter } from '@angular/core';
import { Question } from '../../../../shared/_models/question.model';
import { ResourceResponse } from '../../../../core/_services/hypermedia-consume.service';

@Component({
  selector: 'app-admin-question-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class AdminQuestionListComponent implements OnInit {   

  @Input() appraisalType :ResourceResponse;

  @Input() collectionName: String;

  @Input() @Output() resourceResponseCollection : ResourceResponse;

  @Output() select: EventEmitter<ResourceResponse> = new EventEmitter<ResourceResponse>();

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
