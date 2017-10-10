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

import com.pp.careertest.entity.relationship.UniversityArea;
import com.pp.careertest.entity.relationship.UniversityCourse;

@Entity
@Table(name = "university")
public class University{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    private Long mecId;
    
    private String title;
    
    private String description;
    
    private String imageURL;
    
    //one-to-many
    @OneToMany(mappedBy = "university")
    private List<UniversityArea> universityAreaList;
    
    @OneToMany(mappedBy = "university")
    private List<UniversityCourse> universityCourseList;

    @OneToMany(mappedBy = "university")
    private List<UniversityEmployee> universityEmployeeList;
    
    //many-to-many
    @ManyToMany()
    @JoinTable(name="university_area",
    	joinColumns={@JoinColumn(name="university_id", referencedColumnName="id")},
    	inverseJoinColumns={@JoinColumn(name="area_id", referencedColumnName="id")})
    private List<Area> areaList;
    
    @ManyToMany()
    @JoinTable(name="university_course",
    	joinColumns={@JoinColumn(name="university_id", referencedColumnName="id")},
    	inverseJoinColumns={@JoinColumn(name="course_id", referencedColumnName="id")})
    private List<Course> courseList;
    
	public University(){}
    public University(Long id){this.id = id;}
    public University(Long id, Long mecId, String title, String description, String imageURL){
    	this.id = id;
    	this.mecId = mecId;
    	this.title = title;
    	this.description = description;
    	this.imageURL = imageURL;
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
	public String getImageURL() {
		return imageURL;
	}
	/**
	 * @param image the image to set
	 */
	public void setImageURL(String imageURL) {
		this.imageURL = imageURL;
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
	/**
	 * @return the universityCourseList
	 */
	public List<UniversityCourse> getUniversityCourseList() {
		return universityCourseList;
	}
	/**
	 * @param universityCourseList the universityCourseList to set
	 */
	public void setUniversityCourseList(List<UniversityCourse> universityCourseList) {
		this.universityCourseList = universityCourseList;
	}
	public List<UniversityEmployee> getUniversityEmployeeList() {
		return universityEmployeeList;
	}
	public void setUniversityEmployeeList(List<UniversityEmployee> universityEmployeeList) {
		this.universityEmployeeList = universityEmployeeList;
	}
	public List<Area> getAreaList() {
		return areaList;
	}
	public void setAreaList(List<Area> areaList) {
		this.areaList = areaList;
	}
	public List<Course> getCourseList() {
		return courseList;
	}
	public void setCourseList(List<Course> courseList) {
		this.courseList = courseList;
	}
	
}
