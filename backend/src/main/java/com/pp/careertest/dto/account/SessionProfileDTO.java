package com.pp.careertest.dto.account;


public class SessionProfileDTO {

    protected AccountDTO account = new AccountDTO();
    
	public SessionProfileDTO(){}
	public SessionProfileDTO( AccountDTO account){ this.account = account;}
	
	public AccountDTO getAccount() {
		return account;
	}
	public void setAccount(AccountDTO account) {
		this.account = account;
	}
    
}
