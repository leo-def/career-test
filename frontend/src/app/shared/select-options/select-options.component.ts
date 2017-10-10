import { Component, OnInit, Input, Output, EventEmitter, Optional} from '@angular/core';
import { SelectOption } from '../_dtos/select-option.dto';
import { SelectOptionService } from '../../core/_services/select-option.service';
import { ResourceResponse } from '../../core/_services/hypermedia-consume.service';

@Component({
  selector: 'app-select-options',
  templateUrl: './select-options.component.html',
  styleUrls: ['./select-options.component.css']
})
export class SelectOptionsComponent implements OnInit {
  
  // label
	@Input()
	label: string;

  //data type 
	@Input()
	type: string;

  //value
  @Input()
  value: number;

  @Output() 
  valueChange = new EventEmitter<number>();

  //options
  @Input()
  options: ResourceResponse[];

  @Output() 
  optionsChange = new EventEmitter<ResourceResponse[]>();

  constructor(private selectOptionService: SelectOptionService) { }

  ngOnInit() {
    if(this.type){
	   this.selectOptionService.getSelectOptionCollection(this.type).then(response => {
        this.options = response;
        this.optionsChange.emit(response);
       });
     }
  }

  select(value){
    this.value = value;
    this.valueChange.emit(value);
  }

}
