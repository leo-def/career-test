package com.pp.careertest.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "question")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    private String title;
    
    private String description;
    
    //many-to-one
    @ManyToOne
    private AppraisalType appraisalType;
    
    //one-to-many
    @OneToMany(mappedBy = "question")
    private List<QuestionRule> questionRuleList;
    
    public Question(){}
    public Question(Long id){this.id = id;}
    public Question(Long id,  String title, String description, AppraisalType appraisalType){
    	this.id = id;
    	this.title = title;
    	this.description = description;
    	this.appraisalType = appraisalType;
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
	 * @return the title
	 */
	public String getTitle() {
		return title;
	}
	/**
	 * @param title the title to set
	 */
	public void setTitle(String title) {
		this.title = title;
	}
	/**
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}
	/**
	 * @param description the description to set
	 */
	public void setDescription(String description) {
		this.description = description;
	}
	/**
	 * @return the appraisalType
	 */
	public AppraisalType getAppraisalType() {
		return appraisalType;
	}
	/**
	 * @param appraisalType the appraisalType to set
	 */
	public void setAppraisalType(AppraisalType appraisalType) {
		this.appraisalType = appraisalType;
	}
	/**
	 * @return the questionRuleList
	 */
	public List<QuestionRule> getQuestionRuleList() {
		return questionRuleList;
	}
	/**
	 * @param questionRuleList the questionRuleList to set
	 */
	public void setQuestionRuleList(List<QuestionRule> questionRuleList) {
		this.questionRuleList = questionRuleList;
	}
	
}
