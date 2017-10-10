package com.pp.careertest.config.rest;

import org.springframework.data.rest.webmvc.RepositoryLinksResource;
import org.springframework.hateoas.ResourceProcessor;
import org.springframework.stereotype.Component;

@Component
public class CustomResourceProcessor implements ResourceProcessor<RepositoryLinksResource> {

    @Override
    public RepositoryLinksResource process(RepositoryLinksResource resource) {
    	//resource.add(ControllerLinkBuilder.linkTo(AdminController.class).withRel("admin"));
    	//resource.add(ControllerLinkBuilder.linkTo(StudentController.class).withRel("student"));
    	//resource.add(ControllerLinkBuilder.linkTo(UniversityController.class).withRel("university"));
        return resource;
    }
}