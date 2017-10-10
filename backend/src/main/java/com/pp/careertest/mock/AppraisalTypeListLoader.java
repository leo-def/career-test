package com.pp.careertest.mock;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.pp.careertest.entity.AppraisalType;
import com.pp.careertest.repository.rest.admin.IAppraisalTypeRestRepository;

@Component
public class AppraisalTypeListLoader {
	
	@Autowired IAppraisalTypeRestRepository appraisalTypeRestRepository;
	
	public void load(){
		if(appraisalTypeRestRepository.count() <= 0){
			appraisalTypeRestRepository.save(getAppraisalTypeList());
		}
	}
	
	public List<AppraisalType> getAppraisalTypeList(){
		List<AppraisalType> appraisalTypeList = new ArrayList<AppraisalType>();
		
		appraisalTypeList.add( new AppraisalType(1l, "Simple", "Simple Appraisal Type", null));
		
		return appraisalTypeList;
	}
}
