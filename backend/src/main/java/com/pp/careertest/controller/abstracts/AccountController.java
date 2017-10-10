package com.pp.careertest.controller.abstracts;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;

import java.util.Arrays;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.Resources;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.pp.careertest.dto.account.ForgotPasswordDTO;
import com.pp.careertest.dto.account.ResetPasswordDTO;
import com.pp.careertest.dto.account.SessionProfileDTO;
import com.pp.careertest.entity.account.Account;
import com.pp.careertest.entity.account.ResetPasswordToken;
import com.pp.careertest.service.account.IAccountService;
import com.pp.careertest.service.account.IConfirmAccountService;
import com.pp.careertest.service.account.INotificationService;
import com.pp.careertest.service.account.IResetPasswordService;

public abstract class AccountController  implements IResourceController{
    
    @Autowired protected ModelMapper modelMapper;
    
    @Autowired protected IAccountService accountService;
   
    @Autowired protected IConfirmAccountService confirmAccountService;
    
    @Autowired protected INotificationService notificationService;
    
    @Autowired protected IResetPasswordService resetPasswordService;
    
    
	@RequestMapping
	public Resources<Resource<Object>> index(){
		return getResources();
	}
	
    //Authentication
    @RequestMapping(value = "/login",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Resource<SessionProfileDTO>> login(
    		Authentication authentication,
    		HttpServletResponse response){
    	response.setHeader("Access-Control-Expose-Headers", "x-auth-token");
    	Account account = null;
    	SessionProfileDTO sessionProfileDTO;
    	if(null == authentication ||
    			null == (account = (Account)authentication.getPrincipal()) ||
    			null == (sessionProfileDTO = this.getSessionProfile(account)) ||
    			!this.validateLoginAccount(account)
    			) {
    		return new ResponseEntity<>(null,HttpStatus.UNAUTHORIZED);
    	} return new ResponseEntity<>(
    			getResource(sessionProfileDTO),
        		HttpStatus.OK);
    }
    
    @RequestMapping(value = "/logout",
            method = RequestMethod.POST)
    public ResponseEntity<Resource<Object>> logout(HttpSession session){
        session.invalidate();
        return new ResponseEntity<>(
        		null,
        		HttpStatus.NO_CONTENT);
    }
    
  
    
    //ResetPassword
    @RequestMapping(value = "/forgotPassword",  method ={RequestMethod.POST})
    public ResponseEntity<Resource<Object>> forgotPassword(
    		@RequestBody ForgotPasswordDTO dto,
    		HttpServletRequest request) throws JsonProcessingException {
        Account account = accountService.byEmail(dto.getEmail());
        if(account == null)
        	return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        
        ResetPasswordToken token = resetPasswordService.resetPasswordRequest(account);       
        notificationService.notifyResetPasswordRequest(
        		token,
        		account,
        		getTokenUrl(request, dto.getResetPasswordURL(), token.getToken()));
        // !!
        return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
    }
    
    @RequestMapping(value = "/resetPassword",  method ={RequestMethod.POST})
    public ResponseEntity<Resource<Object>> resetPassword(
            @RequestBody ResetPasswordDTO dto){
        
        Account account = resetPasswordService.resetPassword(dto.getToken());
        if(account == null)
        	return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        
        account = accountService.setPassword(dto.getPassword(), account);
        notificationService.notifyResetPassword(account);
        // !!
        return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
    }
    
    
    //Utils
	public List<Link> getLinks(Object... params){
		List<Link> list = Arrays.asList(
				//linkTo(methodOn(AccountController.class).login(null)).withRel("login"),
				//linkTo(methodOn(AccountController.class).logout(null)).withRel("logout"),
				//linkTo(methodOn(AccountController.class).register(null)).withRel("register"),
				//linkTo(methodOn(AccountController.class).confirmAccount(null)).withRel("confirmAccount"),
				//linkTo(methodOn(AccountController.class).confirmResetPassword(null)).withRel("confirmResetPassword"),
				linkTo(this.getClass()).withSelfRel()
				);
		//try {
			//list.add(linkTo(methodOn(AccountController.class).requestResetPassword(null)).withRel("requestResetPassword"));
		//} catch (JsonProcessingException e) {e.printStackTrace();}
		return list;
	}
    
	protected String getTokenUrl(HttpServletRequest request, String path, String token){
		StringBuilder sb = new StringBuilder();
		sb.append(request.getHeader("Origin"));
		sb.append(path.replace(":token", token));
		System.out.println("TOKEN URL: "+sb);
		return sb.toString();
		
	}

	protected abstract void saveAccountDetails(Account account);
	
	protected abstract String getAccountType();
	
	protected abstract SessionProfileDTO getSessionProfile(Account account);
	
	protected abstract boolean validateLoginAccount(Account account);
}
