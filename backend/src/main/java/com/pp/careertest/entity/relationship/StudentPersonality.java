package com.pp.careertest.entity.relationship;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.pp.careertest.entity.Personality;
import com.pp.careertest.entity.Student;
@Entity
@Table(name = "student_personality")
public class StudentPersonality {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @ManyToOne(optional = true)
    private Student student;
    
    @ManyToOne(optional = true)
    private Personality personality;
    
    private Integer percentage;
    
    public StudentPersonality(){}
    public StudentPersonality(Long id){this.id = id;}
    public StudentPersonality(Student student, Personality personality){
    	this.student = student;
    	this.personality= personality;
    }
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Student getStudent() {
		return student;
	}
	public void setStudent(Student student) {
		this.student = student;
	}
	public Personality getPersonality() {
		return personality;
	}
	public void setPersonality(Personality personality) {
		this.personality = personality;
	}
	public Integer getPercentage() {
		return percentage;
	}
	public void setPercentage(Integer percentage) {
		this.percentage = percentage;
	}  
    
}
