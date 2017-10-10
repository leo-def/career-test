import { Component, OnInit, Input, Output, Optional, EventEmitter } from '@angular/core';
import { University } from '../../../../shared/_models/university.model';
import { ResourceResponse } from '../../../../core/_services/hypermedia-consume.service';

@Component({
  selector: 'app-admin-university-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class AdminUniversityShowComponent implements OnInit {   

  @Input() persistible: boolean = true;
  
  @Input() resourceResponse: ResourceResponse = new ResourceResponse();

  @Output() update: EventEmitter<ResourceResponse> = new EventEmitter<ResourceResponse>();

  @Output() remove: EventEmitter<ResourceResponse> = new EventEmitter<ResourceResponse>();

  @Output() back: EventEmitter<any> = new EventEmitter<any>();

  _edit: boolean;

  constructor() { }

  ngOnInit() {
  }

  emitRemove(resourceResponse: ResourceResponse){
    this.remove.emit(resourceResponse);
  }
  emitUpdate(resourceResponse: ResourceResponse){
    this.update.emit(resourceResponse);
  }
  emitBack(){
    this.back.emit();
  }

  edit(resourceResponse: ResourceResponse){
    this._edit = true;
  }
  cancelEdit(){
    this._edit = false;
  }
}
