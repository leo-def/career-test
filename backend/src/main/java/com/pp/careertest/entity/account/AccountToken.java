package com.pp.careertest.entity.account;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonFormat;


@Entity
public class AccountToken {


	protected  int expirationDays = 30;
	
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected Long id;
  
    protected String token;
  
    @OneToOne(targetEntity = Account.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "account_id")
    protected Account account;
  
    @Column
    @JsonFormat(pattern = "dd/MM/yyyy")
    protected LocalDate expiryDate;

    
    public AccountToken(){
       generateExpirationDate();
    }

    public AccountToken(String token){
        this();
        this.token = token;
    }
    
    public AccountToken(String token, Account account){
        this(token);
        this.account = account;
    }
    
    
    public void generateExpirationDate(){
    	generateExpirationDate(getExpirationDays());
    }
    public void generateExpirationDate(int expirationDays){
        if(expiryDate != null){return;}
        expiryDate = LocalDate.now().plusDays(expirationDays);
    }
    
    @Override
    public String toString(){
        return token;
    }
    
    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @return the token
     */
    public String getToken() {
        return token;
    }

    /**
     * @param token the token to set
     */
    public void setToken(String token) {
        this.token = token;
    }

    /**
     * @return the Account
     */
    public Account getAccount() {
        return account;
    }

    /**
     * @param Account the Account to set
     */
    public void setAccount(Account account) {
        this.account = account;
    }

    /**
     * @return the expiryDate
     */
    public LocalDate getExpiryDate() {
        return expiryDate;
    }

    /**
     * @param expiryDate the expiryDate to set
     */
    public void setExpiryDate(LocalDate expiryDate) {
        this.expiryDate = expiryDate;
    }
    
    /**
     * @return the expirationDays
     */
	public int getExpirationDays() {
		return expirationDays;
	}

	 /**
     * @param expirationDays the expirationDays to set
     */
	public void setExpirationDays(int expirationDays) {
		this.expirationDays = expirationDays;
	}
}
