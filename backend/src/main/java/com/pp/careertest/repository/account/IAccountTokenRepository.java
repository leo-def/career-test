package com.pp.careertest.repository.account;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pp.careertest.entity.account.AccountToken;

public interface IAccountTokenRepository<T extends AccountToken>  extends JpaRepository< T, Long>{
	T findByToken(String token);
    Collection<T> findByAccountId(Long id);
}
