package com.pp.careertest.dto.account;

import java.time.LocalDate;
import javax.persistence.Column;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

public class RegisterDTO {

	private String name;

	private String email;

	private String password;

	private String gender;

	@JsonProperty("confirmAccountURL")
	private String confirmAccountURL;
	

	@Column
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate birth;

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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public LocalDate getBirth() {
		return birth;
	}

	public void setBirth(LocalDate birth) {
		this.birth = birth;
	}
	
	public String getConfirmAccountURL() {
		return confirmAccountURL;
	}

	public void setConfirmAccountURL(String confirmAccountURL) {
		this.confirmAccountURL = confirmAccountURL;
	}
}
