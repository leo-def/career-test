package com.pp.careertest.repository.rest.admin;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import com.pp.careertest.entity.Student;
import com.pp.careertest.entity.UniversityEmployee;

@RepositoryRestResource(collectionResourceRel = "universityEmployee", path = "universityEmployee")
public interface IUniversityEmployeeRestRepository  extends PagingAndSortingRepository<UniversityEmployee, Long> {
	
	@RestResource(exported=false)
	public UniversityEmployee findFirstByAccountId(Long id);
}
