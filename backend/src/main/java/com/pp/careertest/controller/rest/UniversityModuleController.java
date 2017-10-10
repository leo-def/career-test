package com.pp.careertest.controller.rest;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.springframework.hateoas.Link;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.Resources;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pp.careertest.controller.abstracts.IResourceController;

@RequestMapping(value= "/university", produces = "application/hal+json")
@RestController
public class UniversityModuleController  implements IResourceController {
	
	@RequestMapping
	public Resources<Resource<Object>> index(){
		return  getResources();
	}  
	
	public List<Link> getLinks(Object... params){
		return Arrays.asList(
				linkTo(this.getClass()).withSelfRel()
				);
	}
		/*return Arrays.asList(
				entityLinks.linkToCollectionResource(Appraisal.class).withRel("appraisal"),
				entityLinks.linkToCollectionResource(AppraisalType.class).withRel("appraisalType"),
				entityLinks.linkToCollectionResource(Area.class).withRel("area"),
				entityLinks.linkToCollectionResource(Course.class).withRel("course"),
				entityLinks.linkToCollectionResource(Personality.class).withRel("personality"),
				entityLinks.linkToCollectionResource(Profession.class).withRel("profession"),
				entityLinks.linkToCollectionResource(Question.class).withRel("question"),
				entityLinks.linkToCollectionResource(QuestionRule.class).withRel("questionRule"),
				entityLinks.linkToCollectionResource(Response.class).withRel("response"),
				entityLinks.linkToCollectionResource(Student.class).withRel("student"),
				entityLinks.linkToCollectionResource(University.class).withRel("university"));
	}*/
	
}
