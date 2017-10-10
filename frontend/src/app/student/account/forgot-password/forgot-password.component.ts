import { Component, OnInit } from '@angular/core';
import { StudentAccountService } from '../../core/_services/account.service';
import { ForgotPasswordDTO } from '../../../shared/_dtos/account/forgot-password.dto';
import { FormGroup, FormControl, FormBuilder,Validators, AbstractControl } from '@angular/forms';
import { MessageService } from '../../../core/_services/message.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordDTO: ForgotPasswordDTO = new  ForgotPasswordDTO();

  _form : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service :StudentAccountService,
    private messageService: MessageService,
    private router:Router,
    private route: ActivatedRoute
  ) { }

  get resetPasswordURL(){
    return '/student/account/reset-password/:token';
  }

  ngOnInit() {
    this._form = this.formBuilder.group({
      email: [this.forgotPasswordDTO.email, Validators.required],
    });
    this._form.valueChanges.subscribe(data => {
      this.forgotPasswordDTO = data as ForgotPasswordDTO;
      
    });
  }

  forgotPassword():void {
    if(this._form.invalid){
      this.messageService.openSnackBar("Dados inválidos");
      return;
    }
    this.forgotPasswordDTO.resetPasswordURL = this.resetPasswordURL;
    this.service.forgotPassword(this.forgotPasswordDTO)
      .then(response => {
        this.messageService.openSnackBar("Um link foi enviado para seu e-mail para resetar sua senha");
        this.router.navigate(['/student']);
      })
      .catch(error => {
        this.messageService.openSnackBar("Não foi possivel requisitar mudança de senha");
      });;
  }

}
