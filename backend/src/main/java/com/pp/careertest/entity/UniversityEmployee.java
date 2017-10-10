package com.pp.careertest.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.pp.careertest.entity.account.Account;

@Entity
@Table(name = "university_employee")
public class UniversityEmployee {
	
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String type;
	
    @OneToOne
    private Account account;
    
    @ManyToOne(optional = false)
    private University university;

    public UniversityEmployee(){}
    public UniversityEmployee(Long id){this.id = id;}
    public UniversityEmployee(Account account){this.account = account;}
    public UniversityEmployee(Long id, String type, Account account, University university){
    	this.id = id;
    	this.type = type;
    	this.account = account;
    	this.university = university;
    }
	
    
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Account getAccount() {
		return account;
	}

	public void setAccount(Account account) {
		this.account = account;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public University getUniversity() {
		return university;
	}

	public void setUniversity(University university) {
		this.university = university;
	}
}
