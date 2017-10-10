package com.pp.careertest.repository.rest.admin;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import com.pp.careertest.dto.SelectOptionDTO;
import com.pp.careertest.entity.AppraisalType;

@RepositoryRestResource(collectionResourceRel = "appraisalType", path = "appraisalType")
public interface IAppraisalTypeRestRepository extends PagingAndSortingRepository<AppraisalType, Long>{

	@RestResource(exported=false) 
    @Query("SELECT e.id, e.title FROM AppraisalType e")
    public List<Object[]> findIdAndTitle();
    
    @RestResource(exported=false)
    @Query(value = "select new com.pp.careertest.dto.SelectOptionDTO(e.id, e.title) FROM AppraisalType e")
    public List<SelectOptionDTO> selectOptions();
    
}
