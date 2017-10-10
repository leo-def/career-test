package com.pp.careertest.entity;

import java.util.List;
import java.time.LocalDate;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "appraisal")
public class Appraisal {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @ManyToOne
    private Student student;
    
    @ManyToOne
    private AppraisalType appraisalType;
    
    private LocalDate date;
    
    //one-to-many
    @OneToMany(mappedBy = "appraisal")
    private List<Response> responseList;
    
    public Appraisal(){}
    public Appraisal(Long id){this.id = id;}
    public Appraisal(Long id, Student student, AppraisalType appraisalType){
    	this.id = id;
    	this.student = student;
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
	 * @return the student
	 */
	public Student getStudent() {
		return student;
	}
	/**
	 * @param student the student to set
	 */
	public void setStudent(Student student) {
		this.student = student;
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
	 * @return the date
	 */
	public LocalDate getDate() {
		return date;
	}
	/**
	 * @param date the date to set
	 */
	public void setDate(LocalDate date) {
		this.date = date;
	}
	/**
	 * @return the responseList
	 */
	public List<Response> getResponseList() {
		return responseList;
	}
	/**
	 * @param responseList the responseList to set
	 */
	public void setResponseList(List<Response> responseList) {
		this.responseList = responseList;
	}

}
