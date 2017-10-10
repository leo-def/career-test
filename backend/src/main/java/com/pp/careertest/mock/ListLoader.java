package com.pp.careertest.mock;

import java.util.Arrays;

import javax.annotation.PostConstruct;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@Component
public class ListLoader {

	private static final Logger LOG = Logger.getLogger(ListLoader.class);

	@Autowired AppraisalTypeListLoader appraisalTypeListLoader;

	@Autowired PersonalityListLoader personalityListLoader;

	@Autowired ProfessionListLoader professionListLoader;

	@Autowired QuestionListLoader questionListLoader;

	@Autowired
	private Environment environment;

	@PostConstruct
	public void init() {
		LOG.info(Arrays.asList(environment.getDefaultProfiles()));
		load();
	}

	public void load() {
		appraisalTypeListLoader.load();
		personalityListLoader.load();
		professionListLoader.load();
		questionListLoader.load();
	}

}
