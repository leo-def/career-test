package com.pp.careertest.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
@Entity
@Table(name = "appraisal_type")
public class AppraisalType {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    private String title;
    
    private String description;
    
    private String image;
    
    //one-to-many
    @OneToMany(mappedBy = "appraisalType")
    private List<Appraisal> appraisalList;
    
    //one-to-many
    @OneToMany(mappedBy = "appraisalType")
    private List<Question> questionList;
    
    public AppraisalType(){}
    public AppraisalType(Long id){this.id = id;}
    public AppraisalType(Long id, String title, String description, String image){
    	this.id = id;
    	this.title = title;
    	this.description = description;
    	this.image = image;
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
	 * @return the image
	 */
	public String getImage() {
		return image;
	}
	/**
	 * @param image the image to set
	 */
	public void setImage(String image) {
		this.image = image;
	}
	/**
	 * @return the appraisalList
	 */
	public List<Appraisal> getAppraisalList() {
		return appraisalList;
	}
	/**
	 * @param appraisalList the appraisalList to set
	 */
	public void setAppraisalList(List<Appraisal> appraisalList) {
		this.appraisalList = appraisalList;
	}
	/**
	 * @return the questionList
	 */
	public List<Question> getQuestionList() {
		return questionList;
	}
	/**
	 * @param questionList the questionList to set
	 */
	public void setQuestionList(List<Question> questionList) {
		this.questionList = questionList;
	}
	
}
