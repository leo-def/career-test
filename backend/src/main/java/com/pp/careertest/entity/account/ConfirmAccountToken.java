package com.pp.careertest.entity.account;

import javax.persistence.Entity;

@Entity
public class ConfirmAccountToken extends AccountToken{
	
    public ConfirmAccountToken(){
    	super();
    }

     public ConfirmAccountToken(String token){
    	 super(token);
     }
     
     public ConfirmAccountToken(String token, Account account){
    	 super(token,account);
     }
     
}
