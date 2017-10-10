import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { LoginDTO } from '../../shared/_dtos/account/login.dto';
import { SessionProfileDTO } from '../../shared/_dtos/account/session-profile.dto';
@Injectable()
export class AuthService {
  private static authServiceURL = '/api/authenticate';

  //private get set
  private get authTokenHeaderKey():string{
    return 'x-auth-token';
  }
  private get  sessionProfileStorageKey():string{
      return 'currentProfileKey';
  }
  private get  sessionUsernameStorageKey():string{
    return 'currentUser';
  }

  private get  sessionTokenStorageKey():string{
    return 'currentToken';
  }

  //custom get set
  get username(): String{
        return localStorage.getItem(this.sessionUsernameStorageKey);
  }

  set username(username: String){
    if(!username){
        localStorage.removeItem(this.sessionUsernameStorageKey);
        return;
    }
    localStorage.setItem(
        this.sessionUsernameStorageKey,
        username.toString());
  }

  get profile(): SessionProfileDTO{
    return JSON.parse(localStorage.getItem(this.sessionProfileStorageKey));
  }

  set profile(sessionProfileDTO: SessionProfileDTO){
    if(!sessionProfileDTO){
        localStorage.removeItem(this.sessionProfileStorageKey);
        return;
    }
    localStorage.setItem(
        this.sessionProfileStorageKey,
        JSON.stringify(sessionProfileDTO));
  }

  get token(): String{
    return localStorage.getItem(this.sessionTokenStorageKey);
}

  set token(token: String){
    if(!token){
        localStorage.removeItem(this.sessionTokenStorageKey);
        return;
    }
    localStorage.setItem(
        this.sessionTokenStorageKey,
        token.toString());
  }

  get isAuthenticated(): boolean {
    console.log(this.token);
    if(this.token){
        return true;
    }
    return false;
  }	

  constructor(private http: Http) {}
  
// methods
login(loginDTO: LoginDTO, sessionProfileDTO: SessionProfileDTO, token: String | Headers): void {
  this.profile = sessionProfileDTO;
  this.username = loginDTO.username;
  if(token instanceof Headers){
     this.token = token.get(this.authTokenHeaderKey);
  }else{
    this.token = token.toString();
  }

}

  logout(): void {
    console.log(1);
    this.profile = null;
    console.log(2);
    this.username = null;
    console.log(3);
    this.token = null;
    console.log(4);
  }

  setHeaders(headers: Headers):Headers{
    if(!headers){headers = new Headers()}
    console.log(headers);
    console.log(this.isAuthenticated);
	if(this.isAuthenticated){
		headers.append(this.authTokenHeaderKey, this.token.toString());	
	}
	return headers;
  }

}
