import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import { LoginDTO } from '../../../shared/_dtos/account/login.dto';
import { StudentAccountService as AccountService} from '../../core/_services/account.service';
import { MessageService } from '../../../core/_services/message.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginDTO : LoginDTO = new LoginDTO();

  _form : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private messageService: MessageService,
    private router:Router,
    private route: ActivatedRoute, ) { }

  ngOnInit() {
    let logout:boolean = this.route.snapshot.data[0] != null && this.route.snapshot.data[0]['logout'];
	  if(logout){
      this.logout();
    }
    
    this._form = this.formBuilder.group({
      username: [
          this.loginDTO.username,
         [
           Validators.required,
           Validators.maxLength(50)
        ]
       ],
      password: [
        this.loginDTO.password,
        [
          Validators.required,
        ]
      ],
    });
    this._form.valueChanges.subscribe(data => {
      this.loginDTO = data as LoginDTO;
    });

  }

  login(){
    if(this._form.invalid){
      this.messageService.openSnackBar("Dados inválidos");
      return;
    }
    this.accountService.login(this.loginDTO).then(
      response => {
        this.messageService.openSnackBar('Login realizado com sucesso');
        this.router.navigate(['/student']);
      })
      .catch(
        error => {
          this.messageService.openSnackBar(`Erro ao realizar o login: ${error} `);
        }
      );
  }

  logout(){
    this.accountService.logout()
    .then(response => {
      this.messageService.openSnackBar('Logout realizado com sucesso');
      this.router.navigate(['/']);
    })
    .catch(error => {
      this.messageService.openSnackBar(`Erro ao realizar o logout: ${error} `);
    });
  }
}
