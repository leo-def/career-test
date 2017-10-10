import { Component, OnInit, Input, Output, Optional, EventEmitter } from '@angular/core';
import { Personality } from '../../../../shared/_models/personality.model';
import { ResourceResponse } from '../../../../core/_services/hypermedia-consume.service';

@Component({
  selector: 'app-admin-personality-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class AdminPersonalityShowComponent implements OnInit {   @Input()    parent :String;

  @Input()
  persistible: boolean = true;
  
  @Input()
  resourceResponse: ResourceResponse = new ResourceResponse();

  _edit: boolean;

  @Output()
  update: EventEmitter<ResourceResponse> = new EventEmitter<ResourceResponse>();

  @Output()
  remove: EventEmitter<ResourceResponse> = new EventEmitter<ResourceResponse>();

  @Output()
  back: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }

  emitRemove(resourceResponse: ResourceResponse){
	if(! this.persistible){return;}
    this.remove.emit(resourceResponse);
  }
  emitUpdate(resourceResponse: ResourceResponse){
	if(! this.persistible){return;}
    this.update.emit(resourceResponse);
  }
  emitBack(){
    this.back.emit();
  }

  edit(resourceResponse: ResourceResponse){
	if(! this.persistible){return;}
    this._edit = true;
  }
  cancelEdit(){
    this._edit = false;
  }
}
