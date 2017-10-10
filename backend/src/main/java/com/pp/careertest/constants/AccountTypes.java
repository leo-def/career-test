package com.pp.careertest.constants;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum AccountTypes {
	    ADMIN("ADMIN",3),
	    UNIVERSITY("UNIVERSITY",2),
	    STUDENT("STUDENT",1);
	    
	    public String accountType;
	    public Integer weight;
	    
	    private AccountTypes(String accountType, Integer weight){
	        this.accountType = accountType;
	        this.weight = weight;
	    }
	    
	    // pega o objeto AccountTypes pelo atributo accountType
	    public static AccountTypes get(String type){
	        for(AccountTypes ctype : AccountTypes.values()){
	          if(ctype.accountType.equals(type)){return ctype;}  
	        }
	        return null;
	    }
	    
	    public static List<AccountTypes> lessThan(AccountTypes param){
	    	final List<AccountTypes> returnValue = new ArrayList<>();
	        if(param == null){
	            return returnValue;
	        }
	    	Arrays.asList(AccountTypes.values()).forEach((val)->{
	    		if(val.weight <= param.weight)
	    			returnValue.add(val);
	    	});
	    	return returnValue;
	    }	
	    
	    public static List<String> lessThan(String param){
	    	return AccountTypes.toString(
	    			AccountTypes.lessThan(
	    					AccountTypes.get(param)
	    					)
	    				);
	    }
	    
	    public static List<AccountTypes> greaterThan(AccountTypes param){
	    	final List<AccountTypes> returnValue = new ArrayList<AccountTypes>();
	        if(param == null){
	            return returnValue;
	        }
	    	Arrays.asList(AccountTypes.values()).forEach((val)->{
	    		if(val.weight >= param.weight)
	    			returnValue.add(val);
	    	});
	    	return returnValue;
	    }
	    
	    public static List<String> greaterThan(String param){
	    	return AccountTypes.toString(
	    			AccountTypes.greaterThan(
	    					AccountTypes.get(param)
	    					)
	    				);
	    }
	    
	    public static List<String> toString(List<AccountTypes> params){
	    	List<String> returnValue = new ArrayList<String>();
	        if(params == null){
	            return returnValue;
	        }
	    	params.forEach((val)->{
	    		returnValue.add(val.accountType);
	    	});
	    	return returnValue;
	    }
	    
	    @Override
	    public String toString(){
	    	return accountType;
	    }
}
