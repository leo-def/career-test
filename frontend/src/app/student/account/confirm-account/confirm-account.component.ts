import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentAccountService } from '../../core/_services/account.service';
import { ConfirmAccountDTO } from '../../../shared/_dtos/account/confirm-account.dto';
import { MessageService } from '../../../core/_services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-account',
  templateUrl: './confirm-account.component.html',
  styleUrls: ['./confirm-account.component.css']
})
export class ConfirmAccountComponent implements OnInit {

  confirmAccountDTO: ConfirmAccountDTO = new ConfirmAccountDTO();

  token: string;

  constructor(
    private route: ActivatedRoute,
    private service: StudentAccountService,
    private messageService: MessageService,
    private router:Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['token']);
      this.token = params['token'];
   });
  }

  confirmAccount(){
    if(this.token){
      this.confirmAccountDTO.token = this.token;
      this.service.confirmAccount(this.confirmAccountDTO)
		.then(response => {
			this.messageService.openSnackBar("Conta confirmada com sucesso");
			this.router.navigate(['/student']);
		})
		.catch(error => {
			this.messageService.openSnackBar("Não foi possivel confirmar a conta");
		});

    }
  }

}
