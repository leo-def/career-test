import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-public-header',
  templateUrl: './student-public-header.component.html',
  styleUrls: ['./student-public-header.component.css']
})
export class StudentPublicHeaderComponent implements OnInit {

  @Input()
  transparent: boolean;

  constructor() { }

  ngOnInit() {
  }

}
