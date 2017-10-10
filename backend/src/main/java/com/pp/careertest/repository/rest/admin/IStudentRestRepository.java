package com.pp.careertest.repository.rest.admin;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import com.pp.careertest.dto.SelectOptionDTO;
import com.pp.careertest.entity.Student;
import com.pp.careertest.entity.account.Account;

@RepositoryRestResource(collectionResourceRel = "student", path = "student")
public interface IStudentRestRepository extends PagingAndSortingRepository<Student, Long> {

	@RestResource(exported=false)
	@Query("SELECT e.id, e.nickname FROM Student e")
	public List<Object[]> findIdAndNickname();
	
	@RestResource(exported=false)
	public Student findFirstByAccountId(Long id);

	@RestResource(exported=false)	
	@Query(value = "select new com.pp.careertest.dto.SelectOptionDTO(e.id, e.nickname) FROM Student e")
	public List<SelectOptionDTO> selectOptions();
}
