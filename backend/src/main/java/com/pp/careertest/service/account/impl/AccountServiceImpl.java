package com.pp.careertest.service.account.impl;

import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.pp.careertest.constants.AccountTypes;
import com.pp.careertest.constants.Authorities;
import com.pp.careertest.entity.account.Account;
import com.pp.careertest.entity.account.AccountGrantedAuthority;
import com.pp.careertest.repository.account.IAccountGrantedAuthorityRepository;
import com.pp.careertest.repository.account.IAccountRepository;
import com.pp.careertest.service.account.IAccountService;

@Service
public class AccountServiceImpl  implements IAccountService , InitializingBean{
	    private static final Logger log = LoggerFactory.getLogger(AccountServiceImpl.class);
	    
	    @Value("${app.superaccount.name}")
	    private String name;
	    
	    @Value("${app.superaccount.username}")
	    private String accountname;
	    
	    @Value("${app.superaccount.password}")
	    private String password;
	    
	    @Autowired
	    IAccountRepository accountRepository;
	    
	    @Autowired
	    IAccountGrantedAuthorityRepository accountGrantedAuthorityRepository;
	    
	    @Autowired
	    PasswordEncoder passwordEncoder;
	    
	    
	    @Override
	    public Account save(Account account) {
	        return accountRepository.saveAndFlush(account);
	    }

	    @Override
	    public Account update(Account account, Long id) {
	        account.setId(id);
	        return accountRepository.saveAndFlush(account);
	    }

	    @Override
	    public void remove(Long id) {
	        accountRepository.delete(id);
	    }

	    @Override
	    public Account find(Long id) {
	        return accountRepository.findOne(id);
	    }

	    @Override
	    public Collection<Account> all() {
	        return accountRepository.findAll();
	    }
	    
	    @Override
	    public Account byAccountname(String accountname){
	    	return accountRepository.findByEmail(accountname);
	    }
	    
	    @Override
	    public Account byEmail(String email){
	    	return accountRepository.findByEmail(email);
	    }
	    
	    @Override
	    public Account register(Account register) {
	       register.setPassword(passwordEncoder.encode(register.getPassword()));
	       register.setEnabled(false);
	       return accountRepository.save(register);
	    }

	    @Override
	    public boolean matches(String password, Account account) {
	        return passwordEncoder.matches(
	                password,
	                account.getPassword());
	    }

	    @Override
	    public Account setPassword(String password, Account account) {
	        account.setPassword(passwordEncoder.encode(password));
	        return save(account);
	    }

	    @Override
	    public void afterPropertiesSet() throws Exception {
	         if(accountGrantedAuthorityRepository.countByAuthority(Authorities.ADMIN.toString()) > 0){  
	            return;
	        }
	        log.warn("CREATING ADMIN USER  USERNAME: 'admin@admin.com', PASSWORD: 'adminPass23' ");
	        Account admin = new Account(
	                this.name,
	                this.accountname,
	                AccountTypes.ADMIN.toString(),
	                new AccountGrantedAuthority(
	                        Authorities.ADMIN.authority), true);
	        admin.setPassword(passwordEncoder.encode(this.password));
	        accountRepository.save(admin);
	    }
	    public Account active(Account account){
	        account.setEnabled(true);
	        return save(account);
	    }
	    /*
	    @PostConstruct
	    public void init(){
	      
	    }
	    */
	    
	}
