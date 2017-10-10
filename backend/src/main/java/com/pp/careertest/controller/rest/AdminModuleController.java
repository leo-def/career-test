package com.pp.careertest.controller.rest;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.*;
import java.util.Arrays;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.support.RepositoryEntityLinks;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.Resources;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pp.careertest.controller.abstracts.IResourceController;
import com.pp.careertest.controller.rest.admin.SelectOptionController;
import com.pp.careertest.entity.Appraisal;
import com.pp.careertest.entity.AppraisalType;
import com.pp.careertest.entity.Area;
import com.pp.careertest.entity.Course;
import com.pp.careertest.entity.Personality;
import com.pp.careertest.entity.Profession;
import com.pp.careertest.entity.Question;
import com.pp.careertest.entity.QuestionRule;
import com.pp.careertest.entity.Response;
import com.pp.careertest.entity.Student;
import com.pp.careertest.entity.University;

@RequestMapping(value= "/admin", produces = "application/hal+json")
@RestController
public class AdminModuleController implements IResourceController {

	@Autowired
	private RepositoryEntityLinks entityLinks;
	  
	@RequestMapping
	public Resources<Resource<Object>> index(){
		return getResources();
	}
	
	@Override
	public List<Link> getLinks(Object... params){
		return Arrays.asList(
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
				entityLinks.linkToCollectionResource(University.class).withRel("university"),
				linkTo(SelectOptionController.class).withRel("selectOption"),
				linkTo(this.getClass()).withSelfRel()
				);
	}
}
