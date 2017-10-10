package com.pp.careertest.service;

import java.util.List;
import com.pp.careertest.dto.SelectOptionDTO;

public interface ISelectOptionService {
	List<SelectOptionDTO> appraisal();
	List<SelectOptionDTO> appraisalType();
	List<SelectOptionDTO> area();
	List<SelectOptionDTO> course();
	List<SelectOptionDTO> personality();
	List<SelectOptionDTO> profession();
	List<SelectOptionDTO> question();
	List<SelectOptionDTO> questionRule();
	List<SelectOptionDTO> response();
	List<SelectOptionDTO> student();
	List<SelectOptionDTO> university();
}
