package com.pp.careertest.repository.rest.admin;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import com.pp.careertest.dto.SelectOptionDTO;
import com.pp.careertest.entity.Appraisal;

@RepositoryRestResource(collectionResourceRel = "appraisal", path = "appraisal")
public interface IAppraisalRestRepository extends PagingAndSortingRepository<Appraisal, Long>{
	
	@RestResource(exported=false) 
	@Query("SELECT e.id, to_char(e.date, 'yyyy-mm-dd') FROM Appraisal e")
	public List<Object[]> findIdAndDate();
	
	@RestResource(exported=false) 
    @Query(value = "select new com.pp.careertest.dto.SelectOptionDTO(e.id, to_char(e.date, 'yyyy-mm-dd') ) FROM Appraisal e")
    public List<SelectOptionDTO> selectOptions();

}
