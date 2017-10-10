package com.pp.careertest.service.account.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.pp.careertest.repository.account.IAccountRepository;
import com.pp.careertest.service.account.IAuthService;

@Service
public class AuthServiceImpl implements IAuthService {

    @Autowired
    IAccountRepository accountRepository;
    
	@Override
	public UserDetails loadUserByUsername(String accountname) throws UsernameNotFoundException {
		 return accountRepository.findByEmail(accountname);
	}

}
