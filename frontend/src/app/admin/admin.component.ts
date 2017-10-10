import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../core/_services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  isAuthenticated :boolean = false;

  constructor(
    private authService: AuthService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated;
    
    let admin_root:boolean  = this.route.snapshot.data[0] != null && this.route.snapshot.data[0]['admin_root'];
    
    if(!admin_root){
        return;
    }
    
    if(this.authService.isAuthenticated){
      this.router.navigate(['/admin/account/login']);
    }else{
      this.router.navigate(['/admin/appraisal-type']);
    } 
  }

}
