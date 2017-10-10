package com.pp.careertest.controller.rest.admin;


import static org.springframework.hateoas.mvc.ControllerLinkBuilder.*;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.Resources;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pp.careertest.controller.abstracts.IResourceController;
import com.pp.careertest.dto.SelectOptionDTO;
import com.pp.careertest.service.ISelectOptionService;

@RequestMapping(value= "/selectOption", produces = "application/hal+json")
@RestController
public class SelectOptionController implements IResourceController{
	
	@Autowired ISelectOptionService selectOptionService;
	
	@RequestMapping
	public Resources<SelectOptionDTO> idnex() {
		return new Resources<SelectOptionDTO>(Collections.emptySet(), getLinks());
	}
	
	@RequestMapping("/appraisal")
	public Resources<Resource<SelectOptionDTO>> appraisal() {
		return getResources(selectOptionService.appraisal());
	}

	@RequestMapping("/appraisalType")
	public Resources<Resource<SelectOptionDTO>> appraisalType() {
		return getResources(selectOptionService.appraisalType());
	}

	@RequestMapping("/area")
	public Resources<Resource<SelectOptionDTO>> area() {
		return getResources(selectOptionService.area());
	}

	@RequestMapping("/course")
	public Resources<Resource<SelectOptionDTO>> course() {
		return getResources(selectOptionService.course());
	}

	@RequestMapping("/personality")  
	public Resources<Resource<SelectOptionDTO>> personality() {
		return getResources(selectOptionService.personality());
	}

	@RequestMapping("/profession")
	public Resources<Resource<SelectOptionDTO>> profession() {
		return getResources(selectOptionService.profession());
	}

	@RequestMapping("/question")
	public Resources<Resource<SelectOptionDTO>> question() {
		return getResources(selectOptionService.question());
	}
	
	@RequestMapping("/questionRule")
	public Resources<Resource<SelectOptionDTO>> questionRule() {
		return getResources(selectOptionService.questionRule());
	}

	@RequestMapping("/response")
	public Resources<Resource<SelectOptionDTO>> response() {
		return getResources(selectOptionService.response());
	}

	@RequestMapping("/student")
	public Resources<Resource<SelectOptionDTO>> student() {
		return getResources(selectOptionService.student());
	}

	@RequestMapping("/university")
	public Resources<Resource<SelectOptionDTO>> university() {
		return getResources(selectOptionService.university());
	}

	@Override
	public List<Link> getLinks(Object... params){
		return Arrays.asList(
				linkTo(methodOn(SelectOptionController.class).appraisal()).withRel("appraisal"),
				linkTo(methodOn(SelectOptionController.class).appraisalType()).withRel("appraisalType"),
				linkTo(methodOn(SelectOptionController.class).area()).withRel("area"),
				linkTo(methodOn(SelectOptionController.class).course()).withRel("course"),
				linkTo(methodOn(SelectOptionController.class).personality()).withRel("personality"),
				linkTo(methodOn(SelectOptionController.class).profession()).withRel("profession"),
				linkTo(methodOn(SelectOptionController.class).question()).withRel("question"),
				linkTo(methodOn(SelectOptionController.class).questionRule()).withRel("questionRule"),
				linkTo(methodOn(SelectOptionController.class).response()).withRel("response"),
				linkTo(methodOn(SelectOptionController.class).student()).withRel("student"),
				linkTo(methodOn(SelectOptionController.class).university()).withRel("university"),
				linkTo(this.getClass()).withSelfRel());
	}
}
