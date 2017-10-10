package com.pp.careertest.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.pp.careertest.dto.account.SessionProfileDTO;
import com.pp.careertest.entity.University;

public class UniversityEmployeeSessionProfileDTO  extends SessionProfileDTO {

	
	private Long id;
	
	private String type;

    @JsonProperty("universityId")
    private Long universityId;

    @JsonProperty("universityMecId")
    private Long universityMecId;

    @JsonProperty("universityIitle")
    private String universityIitle;

    @JsonProperty("universityDescription")
    private String universityDescription;

    @JsonProperty("universityImageURL")
    private String universityImageURL;

    
	//get set
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Long getUniversityId() {
		return universityId;
	}

	public void setUniversityId(Long universityId) {
		this.universityId = universityId;
	}

	public Long getUniversityMecId() {
		return universityMecId;
	}

	public void setUniversityMecId(Long universityMecId) {
		this.universityMecId = universityMecId;
	}

	public String getUniversityIitle() {
		return universityIitle;
	}

	public void setUniversityIitle(String universityIitle) {
		this.universityIitle = universityIitle;
	}

	public String getUniversityDescription() {
		return universityDescription;
	}

	public void setUniversityDescription(String universityDescription) {
		this.universityDescription = universityDescription;
	}

	public String getUniversityImageURL() {
		return universityImageURL;
	}

	public void setUniversityImageURL(String universityImageURL) {
		this.universityImageURL = universityImageURL;
	}
  
}
