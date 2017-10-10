import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response, RequestOptionsArgs } from '@angular/http';
import { HypermediaConsumeService, Service, ResourceResponse } from '../../../core/_services/hypermedia-consume.service';
import { ChangePasswordDTO } from '../../../shared/_dtos/account/change-password.dto';
import { ConfirmAccountDTO } from '../../../shared/_dtos/account/confirm-account.dto';
import { LoginDTO } from '../../../shared/_dtos/account/login.dto';
import { RegisterDTO } from '../../../shared/_dtos/account/register.dto';
import { ForgotPasswordDTO } from '../../../shared/_dtos/account/forgot-password.dto';
import { ResetPasswordDTO } from '../../../shared/_dtos/account/reset-password.dto';
import { StudentSessionProfileDTO } from '../../../shared/_dtos/student-session-profile.dto';
import { AbstractStudentService } from '../../core/_abstracts/abstract-student-service';
import { AuthService } from '../../../core/_services/auth.service';

@Injectable()
export class StudentAccountService extends AbstractStudentService {

  private _student_account:Service; 
  
  getMainService(): Promise<Service>{
    if(this._student_account){
      return Promise.resolve(this._student_account);
    }
    return super.getMainService().then(
      superService => {
        return this.getService('student-account', superService.response.getURL('account'))
          .then(
            childService =>{
              this._student_account = childService;
              return childService;
            });
      }
    );
  }

  constructor(
    protected hypermediaConsumeService: HypermediaConsumeService,
    protected http: Http,
    protected authService: AuthService,
  ) { super(hypermediaConsumeService, http, authService); }


  private getLoginParams(loginDTO: LoginDTO){
    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(loginDTO.username + ":" + loginDTO.password));
    return new RequestOptions({headers: headers, withCredentials:true});
  }

  public login(loginDTO: LoginDTO) :Promise<StudentSessionProfileDTO>{
    return this.getMainService().then(childService => {
      let loginURL = childService.response.getURL()+'/login';
      return this.http.post(loginURL, null, this.getLoginParams(loginDTO))
        .toPromise()
        .then(loginResponse =>{
          let profile: StudentSessionProfileDTO = loginResponse.json();
          this.authService.login(loginDTO,  profile, loginResponse.headers);
          return profile;
        });
    });
  }

  public logout(){
    return this.getMainService().then(service => {
      let logoutURL = service.response.getURL()+'/logout';
      return this.http.post(logoutURL, null)
        .toPromise()
        .then(logoutResponse => {
          this.authService.logout();
          console.log('ok');
          return logoutResponse.json();
        });
    });
  }

  public register(registerDTO: RegisterDTO): Promise<any>{
    return this.getMainService().then(childService => {
      let registerURL = childService.response.getURL()+'/register';
      return this.http.post(registerURL, registerDTO)
      .toPromise()
      .then(registerResponse =>{ console.log(registerResponse);return registerResponse.json();} );
    });
  }

  public confirmAccount(confirmAccountDTO: ConfirmAccountDTO): Promise<any>{
    return this.getMainService().then(childService => {
      let confirmAccountURL = childService.response.getURL()+'/confirmAccount';
      return this.http.post(confirmAccountURL, confirmAccountDTO)
      .toPromise()
      .then(confirmAccountResponse =>{ return confirmAccountResponse.json();} );
    });
  }

  public forgotPassword(forgotPasswordDTO: ForgotPasswordDTO): Promise<any>{
    return this.getMainService().then(childService => {
      let forgotPasswordURL = childService.response.getURL()+'/forgotPassword';
      return this.http.post(forgotPasswordURL, forgotPasswordDTO)
      .toPromise()
      .then(forgotPasswordResponse =>{ return forgotPasswordResponse.json();} );
    });
  }

  public resetPassword(resetPasswordDTO: ResetPasswordDTO): Promise<any>{
    return this.getMainService().then(childService => {
      let resetPasswordURL = childService.response.getURL()+'/resetPassword';
      return this.http.post(resetPasswordURL, resetPasswordDTO)
      .toPromise()
      .then(resetPasswordResponse =>{ return resetPasswordResponse.json();} );
    });
  }

}
