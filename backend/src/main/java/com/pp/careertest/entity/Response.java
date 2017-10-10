package com.pp.careertest.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
@Entity
@Table(name = "response")
public class Response {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    //many-to-one
    @ManyToOne
    private Appraisal appraisal;
    
    @ManyToOne
    private Question question;
    
    private String value;

    public Response(){}
    public Response(Long id){this.id = id;}
    public Response(Long id, Appraisal appraisal, Question question, String value){
    	this.id = id;
    	this.appraisal = appraisal;
    	this.question = question;
    	this.value = value;
    }
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Appraisal getAppraisal() {
		return appraisal;
	}
	public void setAppraisal(Appraisal appraisal) {
		this.appraisal = appraisal;
	}
	public Question getQuestion() {
		return question;
	}
	public void setQuestion(Question question) {
		this.question = question;
	}
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
}
