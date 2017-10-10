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
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.pp.careertest.entity.account.Account;
import com.pp.careertest.entity.relationship.StudentPersonality;
@Entity
@Table(name = "student")
public class Student {
	
	public static final String _IMAGE_FOLDER = "_image";
	
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
      
    private String nickname;
    
    @JsonProperty("imageURL")
    private String imageURL;
    
    private boolean reachable;
    
    @OneToOne
    private Account account;
    
    //one-to-many
    @OneToMany(mappedBy = "student")
    private List<Appraisal> appraisals;
    
    //one-to-many
    @OneToMany(mappedBy = "student")
    private List<StudentPersonality> studentPersonalityList;
    
    //many-to-many
    @ManyToMany()
    @JoinTable(name="student_personality",
    	joinColumns={@JoinColumn(name="student_id", referencedColumnName="id")},
    	inverseJoinColumns={@JoinColumn(name="personality_id", referencedColumnName="id")})
    private List<Personality> personalityList;
    
    public Student(){}
    public Student(Long id){this.id = id;}
    public Student(Account account){this.account = account;}
    public Student(Long id, String nickname, String imageURL, boolean reachable, Account account){
    	this.id = id;
    	this.nickname = nickname;
    	this.imageURL = imageURL;
    	this.reachable = reachable;
    	this.account = account;
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
	 * @return the nickname
	 */
	public String getNickname() {
		return nickname;
	}
	/**
	 * @param nickname the nickname to set
	 */
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	/**
	 * @return the reachable
	 */
	public boolean isReachable() {
		return reachable;
	}
	/**
	 * @param reachable the reachable to set
	 */
	public void setReachable(boolean reachable) {
		this.reachable = reachable;
	}
	/**
	 * @return the appraisals
	 */
	public List<Appraisal> getAppraisals() {
		return appraisals;
	}
	/**
	 * @param appraisals the appraisals to set
	 */
	public void setAppraisals(List<Appraisal> appraisals) {
		this.appraisals = appraisals;
	}
	/**
	 * @return the studentPersonalityList
	 */
	public List<StudentPersonality> getStudentPersonalityList() {
		return studentPersonalityList;
	}
	/**
	 * @param studentPersonalityList the studentPersonalityList to set
	 */
	public void setStudentPersonalityList(List<StudentPersonality> studentPersonalityList) {
		this.studentPersonalityList = studentPersonalityList;
	}
	
    /**
     * @return the ImageURL
     */
    public String getImageURL() {
        return imageURL;
    }

    /**
     * @param ImageURL the ImageURL to set
     */
    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }
	public Account getAccount() {
		return account;
	}
	public void setAccount(Account account) {
		this.account = account;
	}
	public List<Personality> getPersonalityList() {
		return personalityList;
	}
	public void setPersonalityList(List<Personality> personalityList) {
		this.personalityList = personalityList;
	}
	
}
