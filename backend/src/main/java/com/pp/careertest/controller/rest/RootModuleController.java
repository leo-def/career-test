package com.pp.careertest.controller.rest;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;

import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.hateoas.Link;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.Resources;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.pp.careertest.controller.abstracts.IResourceController;

@RequestMapping(value= "/", produces = "application/hal+json")
@RestController
public class RootModuleController implements IResourceController {
	
	@RequestMapping
	public Resources<Resource<Object>> index(){
		return  getResources();
	}
	/*
	@RequestMapping(value="/**",method=RequestMethod.OPTIONS)
	public Resources<Resource<Object>> index(HttpServletResponse  response, HttpServletRequest request){
		 	response.setHeader("Access-Control-Allow-Origin", request.getHeader("Origin"));
		    response.setHeader("Access-Control-Allow-Credentials", "true");
		    response.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
		    response.setHeader("Access-Control-Max-Age", "3600");
		    response.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type, Accept, X-Requested-With, X-XSRF-TOKEN");
		return  getResources();
	}*/
	
	
	@Override
	public List<Link> getLinks(Object... params){
		return Arrays.asList(
				 linkTo(AdminModuleController.class).withRel("admin"),
				 linkTo(StudentModuleController.class).withRel("student"),
				 linkTo(UniversityModuleController.class).withRel("university"),
				 linkTo(this.getClass()).withSelfRel()
				);
	}
	
}
