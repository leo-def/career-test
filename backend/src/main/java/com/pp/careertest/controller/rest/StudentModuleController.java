package com.pp.careertest.controller.rest;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.Resources;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pp.careertest.controller.abstracts.IResourceController;
import com.pp.careertest.controller.rest.student.StudentAccountController;


@RequestMapping(value= "/student", produces = "application/hal+json")
@RestController
public class StudentModuleController implements IResourceController {
 	  
	@RequestMapping
	public Resources<Resource<Object>> index(){
		return  getResources();
	}
	  
	
	
	public List<Link> getLinks(Object... params){
		return Arrays.asList(
				linkTo(StudentAccountController.class).withRel("account"),
				linkTo(this.getClass()).withSelfRel()
				);
	}
	
}
