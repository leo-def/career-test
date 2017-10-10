import { Component, OnInit } from '@angular/core';
import { ResetPasswordDTO } from '../../../shared/_dtos/account/reset-password.dto';
import { FormGroup, FormControl, FormBuilder,Validators, AbstractControl } from '@angular/forms';
import { StudentAccountService } from '../../core/_services/account.service';
import { MessageService } from '../../../core/_services/message.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  _form : FormGroup;

  token: string;

  resetPasswordDTO :ResetPasswordDTO = new ResetPasswordDTO();

  constructor(
    private formBuilder: FormBuilder,
    private service :StudentAccountService,
    private messageService: MessageService,
    private router:Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.token = params['token'];
    });

    this._form = this.formBuilder.group({
      password: [this.resetPasswordDTO.password, Validators.required],
      confirmPassword: [this.resetPasswordDTO.confirmPassword, Validators.required],
    },{
      validator: ResetPasswordComponent.MatchPassword
    });
    this._form.valueChanges.subscribe(data => {
      this.resetPasswordDTO = data as ResetPasswordDTO;
    });
  }

  resetPassword():void {
    if(this._form.invalid){
      this.messageService.openSnackBar("Dados inválidos");
      return;
    }
    this.resetPasswordDTO.token = this.token;
    this.service.resetPassword(this.resetPasswordDTO)
      .then(response => {
        this.messageService.openSnackBar("Senha resetada com sucesso");
        this.router.navigate(['/student']);
      })
      .catch(error => {
        this.messageService.openSnackBar("Não foi possivel resetar a senha");
      });;
  }

  static MatchPassword(AC: AbstractControl) {
    let password = AC.get('password').value; // to get value in input tag
    let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
    if(password != confirmPassword) {
      AC.get('confirmPassword').setErrors( {MatchPassword: true} )
    } else {
      console.log('true');
      return null
    }
  }
}
