import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-user-header',
  templateUrl: './student-user-header.component.html',
  styleUrls: ['./student-user-header.component.css']
})
export class StudentUserHeaderComponent implements OnInit {

  @Input()
  transparent: boolean;

  constructor() { }

  ngOnInit() {
  }

}
