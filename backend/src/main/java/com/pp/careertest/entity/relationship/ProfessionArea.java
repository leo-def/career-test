package com.pp.careertest.entity.relationship;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.pp.careertest.entity.Area;
import com.pp.careertest.entity.Profession;
@Entity
@Table(name = "profession_area")
public class ProfessionArea {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(optional = true)
    private Profession profession;
    
    @ManyToOne(optional = true)
    private Area area;
    
    public ProfessionArea(){}
    public ProfessionArea(Long id){this.id = id;}
    public ProfessionArea(Profession profession, Area area){
    	this.profession = profession;
    	this.area= area;
    }
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Profession getProfession() {
		return profession;
	}
	public void setProfession(Profession profession) {
		this.profession = profession;
	}
	public Area getArea() {
		return area;
	}
	public void setArea(Area area) {
		this.area = area;
	}
}
