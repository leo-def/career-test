package com.pp.careertest.controller.rest.student;


import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.pp.careertest.constants.AccountTypes;
import com.pp.careertest.controller.abstracts.AccountController;
import com.pp.careertest.dto.StudentSessionProfileDTO;
import com.pp.careertest.dto.account.ConfirmAccountDTO;
import com.pp.careertest.dto.account.RegisterDTO;
import com.pp.careertest.dto.account.SessionProfileDTO;
import com.pp.careertest.entity.Student;
import com.pp.careertest.entity.account.Account;
import com.pp.careertest.entity.account.ConfirmAccountToken;
import com.pp.careertest.repository.rest.admin.IStudentRestRepository;

@RestController
@RequestMapping(value = "student/account")
public class StudentAccountController extends AccountController{
    
    @Autowired IStudentRestRepository studentRestRepository;
 
    //Register
    @RequestMapping(value = "/register",
            method=RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Resource<RegisterDTO>> register(
            @RequestBody RegisterDTO dto,
            HttpServletRequest request){
    	
        Account account = modelMapper.map(dto, Account.class);
        account.setAccountType(this.getAccountType());
        account = accountService.register(account);
        
        ConfirmAccountToken token = confirmAccountService.createToken(account);
        notificationService.notifyConfirmAccount(
        		token,
        		account,
        		this.getTokenUrl(request, dto.getConfirmAccountURL(), token.getToken()));
        
        this.saveAccountDetails(account);
        
        return new ResponseEntity<>(
                 null,
                 HttpStatus.NO_CONTENT);
    }
    
    
    //ConfirmAccount
    @RequestMapping(value = "/confirmAccount", method=RequestMethod.POST)
    public ResponseEntity<Resource<Object>> confirmAccount(
            @RequestBody ConfirmAccountDTO dto){
    	 
        Account account = confirmAccountService.confirmAccount(dto.getToken());
        if(account == null)
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);//invalid token
        
        account = accountService.active(account);
        notificationService.notifyConfirmAccountResponse(account);
        	return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
    	
    }
    
    
	@Override
	protected void saveAccountDetails(Account account) {
        Student student = new Student(account);
        student.setNickname(account.getName());
        studentRestRepository.save(student);
	}

	@Override
	protected String getAccountType() {
		return AccountTypes.STUDENT.accountType;
	}

	@Override
	protected SessionProfileDTO getSessionProfile(Account account) {
		Student student = studentRestRepository.findFirstByAccountId(account.getId());
		return (StudentSessionProfileDTO) this.modelMapper.map(student, StudentSessionProfileDTO.class);
	}
	
	@Override
	protected boolean validateLoginAccount(Account account) {
		return account.getAccountType().equals(getAccountType());
	}
}
