package com.pp.careertest.repository.account;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pp.careertest.entity.account.Account;
	
public interface IAccountRepository extends JpaRepository<Account, Long>{
	Account findByEmail(String email);
	 List<Account> findByGrantedAuthorityAuthority(String authority);

}
