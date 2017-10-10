package com.pp.careertest.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.pp.careertest.entity.relationship.AreaCourse;
import com.pp.careertest.entity.relationship.ProfessionArea;
import com.pp.careertest.entity.relationship.UniversityArea;
@Entity
@Table(name = "area")
public class Area {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    private Long mecId;
    
    private String title;
    
    private String description;
    
    private String image;
    
    //one-to-many
    @OneToMany(mappedBy = "area")
    private List<ProfessionArea> professionAreaList;
    
    @OneToMany(mappedBy = "area")
    private List<AreaCourse> areaCourseList;
    
    @OneToMany(mappedBy = "area")
    private List<UniversityArea> universityAreaList;
    
    
    //many-to-many
    @ManyToMany()
    @JoinTable(name="profession_area",
    	joinColumns={@JoinColumn(name="area_id", referencedColumnName="id")},
    	inverseJoinColumns={@JoinColumn(name="profession_id", referencedColumnName="id")})
    private List<Profession> professionList;
    
    @ManyToMany()
    @JoinTable(name="area_course",
		joinColumns={@JoinColumn(name="area_id", referencedColumnName="id")},
		inverseJoinColumns={@JoinColumn(name="course_id", referencedColumnName="id")})
    private List<Course> courseList;
    
    @ManyToMany()
    @JoinTable(name="university_area",
		joinColumns={@JoinColumn(name="area_id", referencedColumnName="id")},
		inverseJoinColumns={@JoinColumn(name="university_id", referencedColumnName="id")})
    private List<University> universityList;
    
	public Area(){}
    public Area(Long id){this.id = id;}
    public Area(Long id, Long mecId, String title, String description, String image){
    	this.id = id;
    	this.mecId = mecId;
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
	 * @return the mecId
	 */
	public Long getMecId() {
		return mecId;
	}
	/**
	 * @param mecId the mecId to set
	 */
	public void setMecId(Long mecId) {
		this.mecId = mecId;
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
	 * @return the professionAreaList
	 */
	public List<ProfessionArea> getProfessionAreaList() {
		return professionAreaList;
	}
	/**
	 * @param professionAreaList the professionAreaList to set
	 */
	public void setProfessionAreaList(List<ProfessionArea> professionAreaList) {
		this.professionAreaList = professionAreaList;
	}
	/**
	 * @return the areaCourseList
	 */
	public List<AreaCourse> getAreaCourseList() {
		return areaCourseList;
	}
	/**
	 * @param areaCourseList the areaCourseList to set
	 */
	public void setAreaCourseList(List<AreaCourse> areaCourseList) {
		this.areaCourseList = areaCourseList;
	}
	/**
	 * @return the universityAreaList
	 */
	public List<UniversityArea> getUniversityAreaList() {
		return universityAreaList;
	}
	/**
	 * @param universityAreaList the universityAreaList to set
	 */
	public void setUniversityAreaList(List<UniversityArea> universityAreaList) {
		this.universityAreaList = universityAreaList;
	}
	public List<Profession> getProfessionList() {
		return professionList;
	}
	public void setProfessionList(List<Profession> professionList) {
		this.professionList = professionList;
	}
	public List<Course> getCourseList() {
		return courseList;
	}
	public void setCourseList(List<Course> courseList) {
		this.courseList = courseList;
	}
	public List<University> getUniversityList() {
		return universityList;
	}
	public void setUniversityList(List<University> universityList) {
		this.universityList = universityList;
	}
	
    
}
