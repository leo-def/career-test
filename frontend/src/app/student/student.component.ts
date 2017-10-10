import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../core/_services/auth.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

	isAuthenticated :boolean = false;

  constructor(
	private authService: AuthService, 
	private route: ActivatedRoute, 
	private router: Router) { }

  ngOnInit() {
		this.isAuthenticated = this.authService.isAuthenticated;

		let student_root:boolean  = this.route.snapshot.data[0] != null && this.route.snapshot.data[0]['student_root'];
		
		if(!student_root){
			return;
	  }
	  if(this.authService.isAuthenticated){
		this.router.navigate(['/student/dashboard']);
	  }else{
		this.router.navigate(['/student/home']);
	  }  
  }

}
