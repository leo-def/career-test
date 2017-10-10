package com.pp.careertest.controller.abstracts;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.hateoas.Link;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.Resources;


public interface IResourceController {
	
	
	default <T> Resources<Resource<T>> getResources(List<T> list, Object... params){
		return new Resources<Resource<T>>(
				list.stream().map(this::getResource).collect(Collectors.toList()),
				getLinks(params));
	}
	default Resources<Resource<Object>> getResources(Object... params){
		return getResources(Collections.emptyList());
	}
	
	default <T> Resource<T> getResource(T obj, Object... params){ return  new Resource<T>(obj, getLinks(params));}
	default List<Link> getLinks(Object... params){return Collections.emptyList();};
}
