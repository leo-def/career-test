import { Component, OnInit, Input, Output, Optional, EventEmitter } from '@angular/core';
import { University } from '../../../../shared/_models/university.model';
import { ResourceResponse } from '../../../../core/_services/hypermedia-consume.service';

@Component({
  selector: 'app-admin-university-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class AdminUniversityListComponent implements OnInit {  
  
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
