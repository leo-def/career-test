import { Component, OnInit, Input, Output, Optional, EventEmitter } from '@angular/core';
import { Course } from '../../../../shared/_models/course.model';
import { ResourceResponse } from '../../../../core/_services/hypermedia-consume.service';

@Component({
  selector: 'app-admin-course-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class AdminCourseListComponent implements OnInit {   @Input()    parent :String;

  @Input() university :ResourceResponse;
  
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
