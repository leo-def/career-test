package com.pp.careertest.controller.rest.university;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.pp.careertest.constants.AccountTypes;
import com.pp.careertest.controller.abstracts.AccountController;
import com.pp.careertest.dto.UniversityEmployeeSessionProfileDTO;
import com.pp.careertest.dto.account.SessionProfileDTO;
import com.pp.careertest.entity.UniversityEmployee;
import com.pp.careertest.entity.account.Account;
import com.pp.careertest.repository.rest.admin.IUniversityEmployeeRestRepository;

@RestController
@RequestMapping(value = "admin/account")
public class UniversityAccountController extends AccountController{
    
	IUniversityEmployeeRestRepository universityEmployeeRestRepository;
	
	@Override
	protected void saveAccountDetails(Account account) {
		UniversityEmployee universityEmployee = new UniversityEmployee(account);
		universityEmployeeRestRepository.save(universityEmployee);
	}

	@Override
	protected String getAccountType() {
		return AccountTypes.UNIVERSITY.accountType;
	}

	@Override
	protected SessionProfileDTO getSessionProfile(Account account) {
		UniversityEmployee universityEmployee = universityEmployeeRestRepository.findFirstByAccountId(account.getId());
		return (SessionProfileDTO) this.modelMapper.map(account, UniversityEmployeeSessionProfileDTO.class);
	}
	
	@Override
	protected boolean validateLoginAccount(Account account) {
		return account.getAccountType().equals(getAccountType());
	}
}
