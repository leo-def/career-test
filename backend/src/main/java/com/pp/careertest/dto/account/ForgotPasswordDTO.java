package com.pp.careertest.dto.account;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ForgotPasswordDTO {
	
	private String email;
	
	@JsonProperty("resetPasswordURL")
	private String resetPasswordURL;
	

	/**
     * @return the email
     */
	public String getEmail() {
		return email;
	}

    /**
     * @param email the email to set
     */
	public void setEmail(String email) {
		this.email = email;
	}
	
    public String getResetPasswordURL() {
		return resetPasswordURL;
	}

	public void setResetPasswordURL(String resetPasswordURL) {
		this.resetPasswordURL = resetPasswordURL;
	}
}
