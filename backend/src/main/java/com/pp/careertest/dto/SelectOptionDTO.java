package com.pp.careertest.dto;

import org.springframework.hateoas.core.Relation;

@Relation(collectionRelation = "selectOptions")
public class SelectOptionDTO {
	private Long id;
	private String value;
	public SelectOptionDTO(Long id, String value){
		this.id= id;
		this.value = value;
	}

	public SelectOptionDTO(){
	}

	public Long getId() {
		return id;
	}

	public void setId(Long  id) {
		this.id = id;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}
}
