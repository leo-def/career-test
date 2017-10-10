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
import com.pp.careertest.entity.relationship.StudentPersonality;
@Entity
@Table(name = "personality")
public class Personality {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    private String title;
    
    private String description;
    
    private String image;
    
    private String type;
    
    private String code;
    
    //one-to-many
    @OneToMany(mappedBy = "personality")
    private List<QuestionRule> questionRuleList;
    
    @OneToMany(mappedBy = "personality")
    private List<StudentPersonality> studentPersonalityList;
    
    @OneToMany(mappedBy = "personality")
    private List<PersonalityProfession> personalityProfessionList;
    
    //one-to-many
    @ManyToMany()
    @JoinTable(name="student_personality",
    	joinColumns={@JoinColumn(name="personality_id", referencedColumnName="id")},
    	inverseJoinColumns={@JoinColumn(name="student_id", referencedColumnName="id")})
    private List<Student> studentList;
    
    @ManyToMany()
    @JoinTable(name="personality_profession",
    	joinColumns={@JoinColumn(name="personality_id", referencedColumnName="id")},
    	inverseJoinColumns={@JoinColumn(name="profession_id", referencedColumnName="id")})
    private List<Profession> professionList;
    
    
	public Personality(){}
    public Personality(Long id){this.id = id;}
    public Personality(Long id, String title, String description, String type, String code, String image){
    	this.id = id;
    	this.title = title;
    	this.description = description;
    	this.image = image;
    	this.type = type;
    	this.code = code;
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
	 * @return the type
	 */
	public String getType() {
		return type;
	}
	/**
	 * @param type the type to set
	 */
	public void setType(String type) {
		this.type = type;
	}
	/**
	 * @return the code
	 */
	public String getCode() {
		return code;
	}
	/**
	 * @param code the code to set
	 */
	public void setCode(String code) {
		this.code = code;
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
	 * @return the questionRuleList
	 */
	public List<QuestionRule> getQuestionRuleList() {
		return questionRuleList;
	}
	/**
	 * @param questionRuleList the questionRuleList to set
	 */
	public void setQuestionRuleList(List<QuestionRule> questionRuleList) {
		this.questionRuleList = questionRuleList;
	}
	public List<Student> getStudentList() {
		return studentList;
	}
	public void setStudentList(List<Student> studentList) {
		this.studentList = studentList;
	}
	public List<Profession> getProfessionList() {
		return professionList;
	}
	public void setProfessionList(List<Profession> professionList) {
		this.professionList = professionList;
	}
	
}
