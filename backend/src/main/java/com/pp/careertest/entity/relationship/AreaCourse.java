package com.pp.careertest.entity.relationship;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.pp.careertest.entity.Area;
import com.pp.careertest.entity.Course;
@Entity
@Table(name = "area_course")
public class AreaCourse {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @ManyToOne(optional = true)
    private Area area;
    
    @ManyToOne(optional = true)
    private Course course;
    
    public AreaCourse(){}
    public AreaCourse(Long id){this.id = id;}
    public AreaCourse(Area area, Course course){
    	this.area= area;
    	this.course = course;
    }
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Area getArea() {
		return area;
	}
	public void setArea(Area area) {
		this.area = area;
	}
	public Course getCourse() {
		return course;
	}
	public void setCourse(Course course) {
		this.course = course;
	}
}
