package com.pp.careertest.entity.relationship;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.pp.careertest.entity.Course;
import com.pp.careertest.entity.University;
@Entity
@Table(name = "university_course")
public class UniversityCourse {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;    
    
    @ManyToOne(optional = true)
    private University university;
    
    @ManyToOne(optional = true)
    private Course course;
    
    public UniversityCourse(){}
    public UniversityCourse(Long id){this.id = id;}
    public UniversityCourse(University university, Course course){
    	this.university = university;
    	this.course= course;
    }
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public University getUniversity() {
		return university;
	}
	public void setUniversity(University university) {
		this.university = university;
	}
	public Course getCourse() {
		return course;
	}
	public void setCourse(Course course) {
		this.course = course;
	} 
}
