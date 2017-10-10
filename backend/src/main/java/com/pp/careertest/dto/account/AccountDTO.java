package com.pp.careertest.dto.account;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;
import com.fasterxml.jackson.annotation.JsonProperty;

public class AccountDTO {

    protected String name;

	protected String email;
    
    @JsonProperty("accountType")
    protected String accountType;

    protected String gender;

    @JsonFormat(pattern = "dd/MM/yyyy")
    protected LocalDate birth;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAccountType() {
		return accountType;
	}

	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public LocalDate getBirth() {
		return LocalDate.now(); //birth;
	}

	public void setBirth(LocalDate birth) {
		this.birth = birth;
	}
}
