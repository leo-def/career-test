import { Component, OnInit, Input, Output, Optional, EventEmitter } from '@angular/core';
import { Student } from '../../../../shared/_models/student.model';
import { ResourceResponse } from '../../../../core/_services/hypermedia-consume.service';

@Component({
  selector: 'app-admin-student-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class AdminStudentListComponent implements OnInit {   
  
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
