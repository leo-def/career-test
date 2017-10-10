import {AccountGrantedAuthority}from './account-granted-authority.model';

export class Account{

    id: number ;
    
    name: string ;
    
    email: string ;
    
    password: string ;
    
    accountType: string ;
    
    gender: string ;
    
    birth: Date ;
    
    grantedAuthority: AccountGrantedAuthority;
    
    enabled: boolean ;
}