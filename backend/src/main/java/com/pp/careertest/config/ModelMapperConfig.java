package com.pp.careertest.config;

import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.pp.careertest.dto.account.SessionProfileDTO;
import com.pp.careertest.entity.Student;
import com.pp.careertest.entity.account.Account;

@Configuration
public class ModelMapperConfig {
    
    @Bean
    public ModelMapper modelMapper() {
         // <source, destination>
        
        /*
        PropertyMap<Account, SessionProfileDTO> accountToSessionProfileDTO = new PropertyMap<Account, SessionProfileDTO>() {
        	protected void configure(){
                    map().setAuthority(source.getGrantedAuthority().getAuthority());
        	}
        };
        
    	PropertyMap<Student, StudentProfileSessionDTO> mapStudentToStudentProfileSessionDTO = new PropertyMap<Student, StudentProfileSessionDTO>() {
        	protected void configure(){
        		map().setAccount(source.getA);
        	}
    	};*/
        ModelMapper modelMapper =  new ModelMapper();
        //modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.);
        //modelMapper.addMappings(accountToSessionAccountDTO);
       
        return modelMapper;
    }
}
