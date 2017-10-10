package com.pp.careertest.controller.rest.admin;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.pp.careertest.constants.AccountTypes;
import com.pp.careertest.controller.abstracts.AccountController;
import com.pp.careertest.dto.account.SessionProfileDTO;
import com.pp.careertest.entity.account.Account;

@RestController
@RequestMapping(value = "admin/account")
public class AdminAccountController extends AccountController{
    
 
	@Override
	protected void saveAccountDetails(Account account) {
		return;
	}

	@Override
	protected String getAccountType() {
		return AccountTypes.ADMIN.accountType;
	}

	@Override
	protected SessionProfileDTO getSessionProfile(Account account) {
		return (SessionProfileDTO) this.modelMapper.map(account, SessionProfileDTO.class);
	}
	
	@Override
	protected boolean validateLoginAccount(Account account) {
		return account.getAccountType().equals(getAccountType());
	}
}
