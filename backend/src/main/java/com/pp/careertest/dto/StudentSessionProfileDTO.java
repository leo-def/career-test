package com.pp.careertest.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.pp.careertest.dto.account.SessionProfileDTO;

public class StudentSessionProfileDTO extends SessionProfileDTO{
	
	private Long id;
	
    private String nickname;
    
	@JsonProperty("imageURL")
    private String imageURL;
	
    private boolean reachable;
    

    //get set
	public String getNickname() {
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public boolean isReachable() {
		return reachable;
	}
	public void setReachable(boolean reachable) {
		this.reachable = reachable;
	}
    public String getImageURL() {
		return imageURL;
	}
	public void setImageURL(String imageURL) {
		this.imageURL = imageURL;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
    
}
