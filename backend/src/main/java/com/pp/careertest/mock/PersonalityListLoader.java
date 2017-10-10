package com.pp.careertest.mock;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.pp.careertest.entity.Personality;
import com.pp.careertest.repository.rest.admin.IPersonalityRestRepository;

@Component
public class PersonalityListLoader {
	
	@Autowired IPersonalityRestRepository personalityRestRepository;
	
	public void load(){
		if(personalityRestRepository.count() <= 0){
			personalityRestRepository.save(getPersonalityList());
		}
	}
	
	public List<Personality> getPersonalityList(){
			List<Personality> personalityList = new ArrayList<Personality>();
			 //Analistas
			personalityList.add( new Personality(1l, "Arquiteto", "Pensadores criativos e estratégicos, com um plano para tudo.", "Analistas", "INTJ (-A/-T)", null));
			 
			personalityList.add(  new Personality(2l, "Lógico", "Criadores inovadores com uma sede insaciável por conhecimento.", "Analistas", "INTP (-A/-T)", null));
					
			personalityList.add(  new Personality(3l, "Comandante", "Líderes ousados, criativos e enérgicos, sempre dando um jeito em tudo.", "Analistas", "ENTJ (-A/-T)", null));
					
			personalityList.add(  new Personality(4l, "Inovador", "Pensadores espertos e curiosos que não resistem um desafio intelectual.", "Analistas", "ENTP (-A/-T)", null));
					
			//Diplomatas		
					
			personalityList.add(  new Personality(5l, "Advogado", "Idealistas quietos e místicos, porém muito inspiradores e incansáveis.", "Diplomatas", "INFJ (-A/-T)", null));
				
			personalityList.add(  new Personality(6l, "Mediador", "Pessoas poéticas, bondosas e altruístas, sempre prontas para ajudar uma boa causa.", "Diplomatas", "INFP (-A/-T)", null));

			personalityList.add(  new Personality(7l, "Protagonista", "Líderes inspiradores e carismáticos, que conseguem hipnotizar sua audiência.", "Diplomatas", "ENFJ (-A/-T)", null));

			personalityList.add(  new Personality(8l, "Ativista", "Espíritos livres, criativos, sociáveis e entusiasmáticos, sempre encontrando uma razão para sorrir.", "Diplomatas", "ENFP (-A/-T)", null));
				
			//Sentinelas

			personalityList.add(  new Personality(9l, "Logístico", "Indivíduos práticos e extremamente confiáveis.", "Sentinelas", "ISTJ (-A/-T)", null));
				
			personalityList.add( new Personality(10l, "Defensor", "Protetores dedicados e acolhedores, estão sempre prontos para defender seus amados.", "Sentinelas", "ISFJ (-A/-T)", null));
				
			personalityList.add( new Personality(11l, "Executivo", "Administradores excelentes, inigualáveis em gerenciar coisas - ou pessoas.", "Sentinelas", "ENFP (-A/-T)", null));
				
			personalityList.add( new Personality(12l, "Cônsul", "Pessoas extraordinariamente atenciosas, sociais e populares, sempre prontas para ajudar..", "Sentinelas", "ESFJ (-A/-T)", null));
					
				
			//Exploradores
				
			personalityList.add(  new Personality(13l, "Virtuoso", "Experimentadores práticos e ousados, mestres em todos tipos de ferramentas.", "Exploradores", "ISTP (-A/-T)", null));

			personalityList.add(  new Personality(14l, "Aventureiro", "Artistas flexíveis e charmosos, sempre prontos para explorar e experimentar algo novo.", "Exploradores", "ISFP (-A/-T)", null));

			personalityList.add( new Personality(15l, "Empreendedor", "Pessoas inteligentes, enérgicas e perceptivas, que realmente gostam de arriscar.", "Exploradores", "ESTP (-A/-T)", null));

			personalityList.add( new Personality(16l, "Animador", "Animadores entusiasmados, enérgicos e espontâneos - a vida nunca fica entediante perto deles.", "ESFP (-A/-T)", "ESFJ (-A/-T)", null));

		return personalityList;
	}
}
