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

import com.pp.careertest.entity.relationship.PersonalityProfession;
import com.pp.careertest.entity.relationship.ProfessionArea;
@Entity
@Table(name = "profession")
public class Profession {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    private String title;
    
    private String description;
    
    private String image;
    
    //one-to-many
    @OneToMany(mappedBy = "profession")
    private List<PersonalityProfession> personalityProfessionList;
    
    @OneToMany(mappedBy = "profession")
    private List<ProfessionArea> professionAreaList;
    
    //many-to-many
    @ManyToMany()
    @JoinTable(name="personality_profession",
    	joinColumns={@JoinColumn(name="profession_id", referencedColumnName="id")},
    	inverseJoinColumns={@JoinColumn(name="personality_id", referencedColumnName="id")})
    private List<Personality> personalityList;
    
    @ManyToMany()
    @JoinTable(name="profession_area",
    	joinColumns={@JoinColumn(name="profession_id", referencedColumnName="id")},
    	inverseJoinColumns={@JoinColumn(name="area_id", referencedColumnName="id")})
    private List<Area> areaList;
    
    public Profession(){}
    public Profession(Long id){this.id = id;}
    public Profession(Long id, String title, String description, String image){
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
	 * @return the personalityProfessionList
	 */
	public List<PersonalityProfession> getPersonalityProfessionList() {
		return personalityProfessionList;
	}
	/**
	 * @param personalityProfessionList the personalityProfessionList to set
	 */
	public void setPersonalityProfessionList(List<PersonalityProfession> personalityProfessionList) {
		this.personalityProfessionList = personalityProfessionList;
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
	public List<Personality> getPersonalityList() {
		return personalityList;
	}
	public void setPersonalityList(List<Personality> personalityList) {
		this.personalityList = personalityList;
	}
	public List<Area> getAreaList() {
		return areaList;
	}
	public void setAreaList(List<Area> areaList) {
		this.areaList = areaList;
	}
	
    
}
