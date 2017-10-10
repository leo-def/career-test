package com.pp.careertest.service.account;

import java.util.Collection;

import com.pp.careertest.entity.account.Account;

public interface IAccountService  {
	Account save(Account Account);
	Account update(Account Account, Long id);
	void remove(Long id);
	Account find(Long id);
	Collection<Account> all();
	Account byAccountname(String Accountname);
	Account byEmail(String email);
	Account register(Account register);
	boolean matches(String password, Account Account);
	Account setPassword(String password, Account Account);
	Account active(Account Account);
}
