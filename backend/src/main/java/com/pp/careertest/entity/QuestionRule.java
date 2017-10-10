package com.pp.careertest.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
@Entity
@Table(name = "question_rule")
public class QuestionRule {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    //many-to-one
    @ManyToOne
    private Question question;
    
    //many-to-one
    @ManyToOne
    private Personality personality;
    
    private String value;
    
    private String type;
    
    private Integer percentage;
    
    public QuestionRule(){}
    public QuestionRule(Long id){this.id = id;}
    public QuestionRule(Long id, Question question, Personality personality, String value, String type, Integer percentage){
    	this.id = id;
    	this.question = question;
    	this.personality = personality;
    	this.value = value;
    	this.type = type;
    	this.percentage = percentage;
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
	 * @return the question
	 */
	public Question getQuestion() {
		return question;
	}
	/**
	 * @param question the question to set
	 */
	public void setQuestion(Question question) {
		this.question = question;
	}
	/**
	 * @return the personality
	 */
	public Personality getPersonality() {
		return personality;
	}
	/**
	 * @param personality the personality to set
	 */
	public void setPersonality(Personality personality) {
		this.personality = personality;
	}
	/**
	 * @return the value
	 */
	public String getValue() {
		return value;
	}
	/**
	 * @param value the value to set
	 */
	public void setValue(String value) {
		this.value = value;
	}
	/**
	 * @return the type
	 */
	public String getType() {
		return type;
	}
	/**
	 * @param type the type to set
	 */
	public void setType(String type) {
		this.type = type;
	}
	/**
	 * @return the percentage
	 */
	public Integer getPercentage() {
		return percentage;
	}
	/**
	 * @param percentage the percentage to set
	 */
	public void setPercentage(Integer percentage) {
		this.percentage = percentage;
	}
}
