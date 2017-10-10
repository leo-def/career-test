package com.pp.careertest.mock;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.pp.careertest.entity.AppraisalType;
import com.pp.careertest.entity.Question;
import com.pp.careertest.repository.rest.admin.IAppraisalTypeRestRepository;
import com.pp.careertest.repository.rest.admin.IQuestionRestRepository;

@Component
public class QuestionListLoader {

	@Autowired IQuestionRestRepository questionRestRepository;
	
	@Autowired IAppraisalTypeRestRepository appraisalTypeRestRepository;
	
	public void load(){
		if(appraisalTypeRestRepository.count() > 0 && questionRestRepository.count() > 0){

				appraisalTypeRestRepository.findAll().forEach( new Consumer<AppraisalType>() {

					@Override
					public void accept(AppraisalType appraisalType) {
						questionRestRepository.save(getQuestionList(appraisalType));
					}
				});
		}
	}
	
	public List<Question> getQuestionList(AppraisalType appraisalType){

		List<Question> questionList = new  ArrayList<Question>();
		questionList.add( new Question(1l, "Você acha difícil se apresentar para outras pessoas.", null, appraisalType));
		questionList.add( new Question(2l, "Você fica frequentemente tão absorto em seus pensamentos que ignora ou esquece do seu entorno.", null, appraisalType));
		questionList.add( new Question(3l, "Você tenta responder aos seus e-mails o mais rapidamente possível e não suporta uma caixa de entrada bagunçada.", null, appraisalType));
		questionList.add( new Question(4l, "Você permanece relaxado e concentrado mesmo sob pressão.", null, appraisalType));
		questionList.add( new Question(5l, "Geralmente, você não inicia conversas.", null, appraisalType));
		questionList.add( new Question(6l, "Você raramente faz alguma coisa por pura curiosidade.", null, appraisalType));
		questionList.add( new Question(7l, "Você se sente superior às outras pessoas", null, appraisalType));
		questionList.add( new Question(8l, "Ser organizado é mais importante para você do que ser adaptável.", null, appraisalType));
		questionList.add( new Question(9l, "Você é geralmente muito motivado e cheio de energia.", null, appraisalType));
		questionList.add( new Question(10l, "Vencer um debate significa menos para você do que assegurar que ninguém fique aborrecido.", null, appraisalType));
		//10
		questionList.add( new Question(11l, "Você frequentemente sente que tem que se justificar para outras pessoas.", null, appraisalType));
		questionList.add( new Question(12l, "Seus ambientes doméstico e de trabalho são bem organizados.", null, appraisalType));
		questionList.add( new Question(13l, "Você não se importa em ser o centro das atenções.", null, appraisalType));
		questionList.add( new Question(14l, "Você se considera mais prático do que criativo.", null, appraisalType));
		questionList.add( new Question(15l, "As pessoas raramente conseguem aborrecê-lo.", null, appraisalType));
		questionList.add( new Question(16l, "Seus planos de viagem são geralmente bem pensados.", null, appraisalType));
		questionList.add( new Question(17l, "Frequentemente, é difícil para você se relacionar com os sentimentos das outras pessoas.", null, appraisalType));
		questionList.add( new Question(18l, "Seu humor pode mudar muito rapidamente.", null, appraisalType));
		questionList.add( new Question(19l, "Em uma discussão, a verdade deve ser mais importante que a sensibilidade das pessoas.", null, appraisalType));
		//20
		questionList.add( new Question(20l, "Você raramente se preocupa em como suas ações afetam as outras pessoas.", null, appraisalType));
		questionList.add( new Question(21l, "Seu estilo de trabalho aproxima-se mais de picos de energia aleatórios do que uma abordagem metódica e organizada.", null, appraisalType));
		questionList.add( new Question(22l, "Geralmente, você tem inveja dos outros.", null, appraisalType));
		questionList.add( new Question(23l, "Um livro ou um vídeo game interessante é frequentemente melhor que um evento social.", null, appraisalType));
		questionList.add( new Question(24l, "Ser capaz de desenvolver um plano e manter-se firme na sua execução é a parte mais importante de todo projeto.", null, appraisalType));
		questionList.add( new Question(25l, "Você raramente se deixa levar por fantasias e ideias.", null, appraisalType));
		questionList.add( new Question(26l, "Você se vê frequentemente perdido em seus pensamentos quando está em contato com a natureza.", null, appraisalType));
		questionList.add( new Question(27l, "Se alguém não responde ao seu e-mail rapidamente, você começa a se preocupar se disse alguma coisa errada.", null, appraisalType));
		questionList.add( new Question(28l, "Como pai/mãe, preferiria de ver seu/sua filho(a) crescer bondoso(a) do que inteligente.", null, appraisalType));
		questionList.add( new Question(29l, "Você não deixa outras pessoas influenciarem suas ações.", null, appraisalType));
		//30
		questionList.add( new Question(30l, "Seus sonhos têm a tendência de se concentrar no mundo real e seus eventos.", null, appraisalType));
		questionList.add( new Question(31l, "Não leva muito tempo para você começar a se envolver em atividades sociais em seu novo local de trabalho.", null, appraisalType));
		questionList.add( new Question(32l, "Você é mais um improvisador nato do que um planejador cuidadoso.", null, appraisalType));
		questionList.add( new Question(33l, "Suas emoções o controlam mais do que você as controla.", null, appraisalType));
		questionList.add( new Question(34l, "Você aprecia ir a eventos sociais que envolvem o uso de fantasias ou encenação.", null, appraisalType));
		questionList.add( new Question(35l, "Você frequentemente despende tempo explorando ideias irrealistas e impraticáveis, ainda que intrigantes.", null, appraisalType));
		questionList.add( new Question(36l, "Você prefere improvisar do que despender tempo para criar um plano detalhado.", null, appraisalType));
		questionList.add( new Question(37l, "Você é uma pessoa relativamente reservada e sossegada.", null, appraisalType));
		questionList.add( new Question(38l, "Se você tivesse uma empresa, acharia muito difícil demitir funcionários leais mas com baixo desempenho.", null, appraisalType));
		questionList.add( new Question(39l, "Você frequentemente contempla as razões da existência humana.", null, appraisalType));
		//40
		questionList.add( new Question(40l, "A lógica é geralmente mais importante que o coração na hora de se tomar decisões importantes.", null, appraisalType));
		questionList.add( new Question(41l, "Manter suas opções em aberto é mais importante do que manter uma lista de afazeres.", null, appraisalType));
		questionList.add( new Question(42l, "Se seu amigo está triste por algum motivo, é mais provável que você ofereça apoio emocional do que sugestões para enfrentar o problema.", null, appraisalType));
		questionList.add( new Question(43l, "Você raramente se sente inseguro.", null, appraisalType));
		questionList.add( new Question(44l, "Você não tem dificuldades em criar um cronograma pessoal e em segui-lo.", null, appraisalType));
		questionList.add( new Question(45l, "Estar certo é mais importante do que ser cooperativo, quando se trata de trabalho em equipe.", null, appraisalType));
		questionList.add( new Question(46l, "Você acha que a visão de todos deve ser respeitada, independentemente de ser ou não baseada em fatos.", null, appraisalType));
		questionList.add( new Question(47l, "Você se sente com mais energia após despender tempo com um grupo de pessoas.", null, appraisalType));
		questionList.add( new Question(48l, "Você perde suas coisas com frequência.", null, appraisalType));
		questionList.add( new Question(49l, "Você se vê como muito estável emocionalmente.", null, appraisalType));
		//50
		questionList.add( new Question(50l, "Sua mente está sempre trabalhando com ideias e planos inexplorados.", null, appraisalType));
		questionList.add( new Question(51l, "Você não se chamaria de sonhador.", null, appraisalType));
		questionList.add( new Question(52l, "Você geralmente acha difícil relaxar ao se dirigir para muitas pessoas.", null, appraisalType));
		questionList.add( new Question(53l, "Falando de modo geral, você confia mais em sua experiência do que em sua imaginação.", null, appraisalType));
		questionList.add( new Question(54l, "Você se preocupa demais com o que as outras pessoas pensam.", null, appraisalType));
		questionList.add( new Question(55l, "Se o ambiente está lotado, você fica perto das paredes, evitando o centro.", null, appraisalType));
		questionList.add( new Question(56l, "Você tem uma tendência a procrastinar até não haver mais tempo para fazer tudo.", null, appraisalType));
		questionList.add( new Question(57l, "Você se sente muito ansioso em situações de estresse.", null, appraisalType));
		questionList.add( new Question(58l, "Você acredita que é mais recompensador ser querido pelos outros do que poderoso.", null, appraisalType));
		//60
		questionList.add( new Question(59l, "Você sempre foi interessado em coisas não convencionais e ambíguas, por ex., em livros, arte ou filmes.", null, appraisalType));
		questionList.add( new Question(60l, "Você frequentemente toma a iniciativa em situações sociais.", null, appraisalType));
		return questionList;
	}
}
