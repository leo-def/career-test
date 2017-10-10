package com.pp.careertest.repository.rest.admin;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import com.pp.careertest.dto.SelectOptionDTO;
import com.pp.careertest.entity.Response;

@RepositoryRestResource(collectionResourceRel = "response", path = "response")
public interface IResponseRestRepository extends PagingAndSortingRepository<Response, Long> {

	@RestResource(exported=false)	
	@Query("SELECT e.id, e.value FROM Response e")
	public List<Object[]> findIdAndValue();

	@RestResource(exported=false)	
	@Query(value = "select new com.pp.careertest.dto.SelectOptionDTO(e.id, e.value) FROM Response e")
	public List<SelectOptionDTO> selectOptions();
}
