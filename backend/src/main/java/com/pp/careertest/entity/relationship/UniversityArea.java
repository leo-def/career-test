package com.pp.careertest.entity.relationship;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.pp.careertest.entity.Area;
import com.pp.careertest.entity.University;
@Entity
@Table(name = "university_area")
public class UniversityArea {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @ManyToOne(optional = true)
    private University university;
    
    @ManyToOne(optional = true)
    private Area area;
    
    public UniversityArea(){}
    public UniversityArea(Long id){this.id = id;}
    public UniversityArea(University university, Area area){
    	this.university = university;
    	this.area= area;
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
	public Area getArea() {
		return area;
	}
	public void setArea(Area area) {
		this.area = area;
	} 
}
