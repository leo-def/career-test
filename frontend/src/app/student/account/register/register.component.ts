import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder,Validators, AbstractControl} from '@angular/forms';
import { RegisterDTO } from '../../../shared/_dtos/account/register.dto';
import { DatePipe } from '@angular/common';
import { StudentAccountService } from '../../core/_services/account.service';
import { MessageService } from '../../../core/_services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  _form : FormGroup;	

  registerDTO: RegisterDTO = new RegisterDTO();

  birthDate: Date;
  
  get confirmAccountURL(){
    return '/student/account/confirm-account/:token';
  }
  
  constructor(
    private datePipe: DatePipe,
    private formBuilder: FormBuilder,
    private service :StudentAccountService,
    private messageService: MessageService,
    private router:Router
  ) { }


  ngOnInit() {
	  this._form = this.formBuilder.group({
      name: [
        this.registerDTO.name,
         [
           Validators.required,
           Validators.maxLength(50)
        ]
       ],
      email: this.registerDTO.email,
      password: [this.registerDTO.password, Validators.required],
      confirmPassword: ['', Validators.required],
    },{
      validator: RegisterComponent.MatchPassword
    });
    this._form.valueChanges.subscribe(data => {
      this.registerDTO = data as RegisterDTO;
    });
	//confirmAccountURL: string;
  }

  register():void {
    if(this._form.invalid || !this.birthDate){
      this.messageService.openSnackBar("Dados inválidos");
      return;
    }
    this.registerDTO.confirmAccountURL = this.confirmAccountURL;
    this.registerDTO.birth = this.datePipe.transform(this.birthDate, 'dd/MM/yyyy');//'yyyy-dd-MM'
    this.service.register(this.registerDTO)
      .then(response => {
        this.messageService.openSnackBar("Usuário Cadastrado com sucesso");
        this.router.navigate(['/student']);
      })
      .catch(error => {
        this.messageService.openSnackBar("Não foi possivel realizar cadastro");
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
