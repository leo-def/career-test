package com.pp.careertest.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pp.careertest.dto.SelectOptionDTO;
import com.pp.careertest.repository.rest.admin.*;
import com.pp.careertest.service.ISelectOptionService;

@Service
public class SelectOptionServiceImpl implements ISelectOptionService{

	@Autowired	IAppraisalRestRepository appraisalRestRepository;
	@Autowired	IAppraisalTypeRestRepository appraisalTypeRestRepository;
	@Autowired	IAreaRestRepository areaRestRepository;
	@Autowired	ICourseRestRepository courseRestRepository;
	@Autowired	IPersonalityRestRepository personalityRestRepository;
	@Autowired	IProfessionRestRepository professionRestRepository;
	@Autowired	IQuestionRestRepository questionRestRepository;
	@Autowired	IQuestionRuleRestRepository 	questionRuleRestRepository;
	@Autowired	IResponseRestRepository responseRestRepository;
	@Autowired	IStudentRestRepository studentRestRepository;
	@Autowired	IUniversityRestRepository universityRestRepository;
	
	@Override
	public List<SelectOptionDTO> appraisal() {
		return appraisalRestRepository.selectOptions();
	}

	@Override
	public List<SelectOptionDTO> appraisalType() {
		return appraisalTypeRestRepository.selectOptions();
	}

	@Override
	public List<SelectOptionDTO> area() {
		return areaRestRepository.selectOptions();
	}

	@Override
	public List<SelectOptionDTO> course() {
		return courseRestRepository.selectOptions();
	}

	@Override  
	public List<SelectOptionDTO> personality() {
		return personalityRestRepository.selectOptions();
	}

	@Override
	public List<SelectOptionDTO> profession() {
		return professionRestRepository.selectOptions();
	}

	@Override
	public List<SelectOptionDTO> question() {
		return questionRestRepository.selectOptions();
	}

	@Override
	public List<SelectOptionDTO> questionRule() {
		return questionRuleRestRepository.selectOptions();
	}

	@Override
	public List<SelectOptionDTO> response() {
		return responseRestRepository.selectOptions();
	}

	@Override
	public List<SelectOptionDTO> student() {
		return studentRestRepository.selectOptions();
	}

	@Override
	public List<SelectOptionDTO> university() {
		return universityRestRepository.selectOptions();
	}

}
