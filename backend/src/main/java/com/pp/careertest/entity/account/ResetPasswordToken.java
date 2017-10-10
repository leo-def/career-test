package com.pp.careertest.entity.account;

import javax.persistence.Entity;

@Entity
public class ResetPasswordToken extends AccountToken{
    public ResetPasswordToken(){
    	super();
    }

     public ResetPasswordToken(String token){
    	 super(token);
     }
     
     public ResetPasswordToken(String token, Account account){
    	 super(token,account);
     }
}
