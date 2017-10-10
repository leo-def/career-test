package com.pp.careertest.entity.relationship;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.pp.careertest.entity.Personality;
import com.pp.careertest.entity.Profession;
@Entity
@Table(name = "personality_profession")
public class PersonalityProfession {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @ManyToOne(optional = true)
    private Personality personality;
    
    @ManyToOne(optional = true)
    private Profession profession;
    
    public PersonalityProfession(){}
    public PersonalityProfession(Long id){this.id = id;}
    public PersonalityProfession(Personality personality, Profession profession){
    	this.personality= personality;
    	this.profession = profession;
    }
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Personality getPersonality() {
		return personality;
	}
	public void setPersonality(Personality personality) {
		this.personality = personality;
	}
	public Profession getProfession() {
		return profession;
	}
	public void setProfession(Profession profession) {
		this.profession = profession;
	}
}
