package com.pp.careertest.repository.account;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pp.careertest.entity.account.AccountGrantedAuthority;

public interface IAccountGrantedAuthorityRepository  extends JpaRepository<AccountGrantedAuthority, Long>{
	 Long countByAuthority(String authority);
}
