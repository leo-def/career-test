package com.pp.careertest.service.account.impl;

import java.time.LocalDate;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pp.careertest.entity.account.Account;
import com.pp.careertest.entity.account.ConfirmAccountToken;
import com.pp.careertest.repository.account.IConfirmAccountTokenRepository;
import com.pp.careertest.service.account.IConfirmAccountService;


@Service
public class ConfirmAccountServiceImpl implements IConfirmAccountService{

    @Autowired
    IConfirmAccountTokenRepository confirmAccountTokenRepository;

    @Override
    public ConfirmAccountToken createToken(Account account) {
    	removeAccountTokens(account);
        ConfirmAccountToken token = new ConfirmAccountToken(UUID.randomUUID().toString(), account);
        return confirmAccountTokenRepository.saveAndFlush(token);
    }

    @Override
    public Account confirmAccount(String token) {
        ConfirmAccountToken catoken = confirmAccountTokenRepository.findByToken(token);
        if(catoken == null){
            return null;
        }
        Account account  =catoken.getAccount();
        removeAccountTokens(account);
        return account;
    }
    
    public boolean isValidToken(ConfirmAccountToken token){
        LocalDate date = token.getExpiryDate();
        LocalDate now = LocalDate.now();
        return ( date != null && (date.isAfter(now) || date.isEqual(now)));
    }

	@Override
	public void remove(String token) {
		confirmAccountTokenRepository.delete(confirmAccountTokenRepository.findByToken(token));
	}
	
	@Override
	public void removeAccountTokens(Account account) {
		confirmAccountTokenRepository.delete(confirmAccountTokenRepository.findByAccountId(account.getId()));	
	}
    
}