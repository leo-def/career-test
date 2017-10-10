import { Component, OnInit, Input, Output, Optional, EventEmitter } from '@angular/core';
import { AppraisalType } from '../../../../shared/_models/appraisal-type.model';
import { ResourceResponse } from '../../../../core/_services/hypermedia-consume.service';

@Component({
  selector: 'app-admin-appraisal-type-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class AdminAppraisalTypeShowComponent implements OnInit {   @Input()    parent :String;

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
