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
import com.pp.careertest.entity.relationship.UniversityCourse;
@Entity
@Table(name = "course")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    private Long mecId;
    
    private String title;
    
    private String description;
    
    private String image;
    
    //one-to-many
    @OneToMany(mappedBy = "course")
    private List<UniversityCourse> universityCourseList;

    @OneToMany(mappedBy = "course")
	private List<AreaCourse> areaCourseList;
    
    //many-to-many
    @ManyToMany()
    @JoinTable(name="university_course",
    	joinColumns={@JoinColumn(name="course_id", referencedColumnName="id")},
    	inverseJoinColumns={@JoinColumn(name="university_id", referencedColumnName="id")})
    private List<University> universityList;

    @ManyToMany()
    @JoinTable(name="area_course",
    	joinColumns={@JoinColumn(name="course_id", referencedColumnName="id")},
    	inverseJoinColumns={@JoinColumn(name="area_id", referencedColumnName="id")})
	private List<Area> areaList;
    
    public Course(){}
    public Course(Long id){this.id = id;}
    public Course(Long id, Long mecId, String title, String description, String image){
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
	public List<University> getUniversityList() {
		return universityList;
	}
	public void setUniversityList(List<University> universityList) {
		this.universityList = universityList;
	}
	public List<Area> getAreaList() {
		return areaList;
	}
	public void setAreaList(List<Area> areaList) {
		this.areaList = areaList;
	}


}
