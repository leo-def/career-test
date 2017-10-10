import { Component, OnInit, Optional, Input, Output } from '@angular/core';
import { CourseService } from '../../../core/_services/course.service';
import { Course } from '../../../../shared/_models/course.model';
import { MessageService } from '../../../../core/_services/message.service';
import { ResourceResponse } from '../../../../core/_services/hypermedia-consume.service';

@Component({
  selector: 'app-admin-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class AdminCourseComponent implements OnInit {

  @Input() university :ResourceResponse;

  @Input() persistible: boolean = true;
  
  @Input() removible: boolean = true;

  @Input() resourceResponseCollection :ResourceResponse;

  resourceResponseSelected : ResourceResponse;

  _new: boolean = false;

  collectionName:String = this.service.collection_name;
  
  
  constructor(private service: CourseService, private messageService: MessageService) { }

  ngOnInit() {
    if(!this.resourceResponseCollection){
      this.all();
    }
  }
  
  all(){
	  if(this.university){
      return this.service.getResource(this.university, 'courseList')
        .then(response => {
          this.resourceResponseCollection = response;
          this.deselect();
        });
    }else {
  	  this.service.all()
	    .then(response => {
		  this.resourceResponseCollection = response;
		  this.deselect();
	  });
	}
  }

  create(resourceResponse: ResourceResponse){
    if(! this.persistible){return;}
    this.service.create(resourceResponse)
      .then(response => {
		  
		if(this.university){
          return this.service.putUriList(response, [this.university], 'university')
            .then(parentResponse => {
              this.messageService.openSnackBar(` ${response._data.title} salvo com sucesso em  ${this.university._data.title}`);
              this.all();
            });
        }else{  
          this.messageService.openSnackBar(` ${response._data.title} salvo com sucesso`);
          this.all();
		}
      });
  }
  
  update(resourceResponse: ResourceResponse){
	if(! this.persistible){return;}
    this.service.update(resourceResponse)
      .then(response => {
        this.messageService.openSnackBar(` ${response._data.title} salvo com sucesso`);
        this.all();
      });
  }
  
  remove(resourceResponse: ResourceResponse){
	if(! this.persistible){return;}
	
	if(this.university){
      this.service.deleteUriList(this.university, resourceResponse._data.id, 'courseList')
      .then(parentResponse => {
        this.messageService.openSnackBar(` ${resourceResponse._data.title} removido de ${this.university._data.title}`);
      });
    }
	
    this.service.delete(resourceResponse, this.removible)
      .then(response => {
        this.messageService.openSnackBar(` ${response._data.title} removido com sucesso`);
        this.all();
      });
  }
  
  new(){
	if(! this.persistible){return;}
    var val: boolean = this._new;
    this.deselect();
    this._new = !val;
  }
  
  deselect(){
    this._new = false
    this.resourceResponseSelected = null;
  }
  
  select(resourceResponse: ResourceResponse){
    this.deselect();
    this.service.find(resourceResponse)
      .then(response => {
        this.resourceResponseSelected = response;
      });
  }

  get hasItemSelected():boolean{
    return (this.resourceResponseSelected != null);
  }
  get showList(): boolean {
	  return !(this.hasItemSelected || this._new);
  }
}
