package com.pp.careertest.constants;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum Authorities{
    ADMIN("ADMIN",4),
    UNIVERSITY("UNIVERSITY",3),
    STUDENT("STUDENT",2),
    GUEST("GUEST",1);
        
    public String authority;
    public int level;    
    private Authorities(String authority, int level){
        this.authority = authority;
        this.level = level;
    }
        
    public static Authorities get(String authority){
        for(Authorities cauthority : Authorities.values()){
            if(cauthority.authority.equals(authority)){return cauthority;}  
        }
        return null;
    }

    public static List<Authorities> lessThan(Authorities param){
    	final List<Authorities> returnValue = new ArrayList<>();
    	Arrays.asList(Authorities.values()).forEach((val)->{
    		if(val.level <= param.level)
    			returnValue.add(val);
    	});
    	return returnValue;
    }	
    
    public static List<String> lessThan(String param){
    	return Authorities.toString(
    			Authorities.lessThan(
    					Authorities.get(param)
    					)
    				);
    }
    
    public static List<Authorities> greaterThan(Authorities param){
    	final List<Authorities> returnValue = new ArrayList<>();
    	Arrays.asList(Authorities.values()).forEach((val)->{
    		if(val.level >= param.level)
    			returnValue.add(val);
    	});
    	return returnValue;
    }
    
    public static List<String> greaterThan(String param){
    	return Authorities.toString(
    			Authorities.greaterThan(
    					Authorities.get(param)
    					)
    				);
    }
    
    public static List<String> toString(List<Authorities> params){
    	List<String> returnValue = new ArrayList<>();
    	params.forEach((val)->{
    		returnValue.add(val.authority);
    	});
    	return returnValue;
    }
    
    @Override
    public String toString(){
    	return authority;
    }
}