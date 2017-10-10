package com.pp.careertest.service.account.impl;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pp.careertest.entity.account.Account;
import com.pp.careertest.entity.account.ResetPasswordToken;
import com.pp.careertest.repository.account.IResetPasswordTokenRepository;
import com.pp.careertest.service.account.IResetPasswordService;

@Service
public class ResetPasswordServiceImpl implements IResetPasswordService {
    
    @Autowired
    IResetPasswordTokenRepository resetPasswordTokenRepository;
    
    @Override
    public ResetPasswordToken resetPasswordRequest(Account account){
    	removeAccountTokens(account);
        ResetPasswordToken token = new ResetPasswordToken(UUID.randomUUID().toString(), account);
        return resetPasswordTokenRepository.saveAndFlush(token);
    }
    
    @Override
    public Account resetPassword(String token){
        ResetPasswordToken cptoken = resetPasswordTokenRepository.findByToken(token);
        if(cptoken == null){
            return null;
        }
        Account account = cptoken.getAccount();
        removeAccountTokens(account);
        return account;
    }
    
	private void removeAccountTokens(Account account) {
		resetPasswordTokenRepository.delete(resetPasswordTokenRepository.findByAccountId(account.getId()));	
	}
}
