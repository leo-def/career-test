package com.pp.careertest.mock;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.pp.careertest.entity.Profession;
import com.pp.careertest.repository.rest.admin.IProfessionRestRepository;

@Component
public class ProfessionListLoader {
	
	@Autowired IProfessionRestRepository professionRestRepository;
	
	public void load(){
		if(professionRestRepository.count() <= 0){
			professionRestRepository.save(getProfessionList());
		}
	}
	public List<Profession> getProfessionList(){
		List<Profession> professionList = new ArrayList<Profession>();
		
		professionList.add( new Profession(1l, "Gestor de ecorrelações", "Reúne conhecimento técnico ambiental e de lesgislação sobre o tema. É preciso ser bom em comunicação", null));
		professionList.add( new Profession(2l, "Gestor de resíduos", "Dá direcionamento adequado aos residuos, além de transformar o lixo em fonte de renda. Engenharia Ambiental, Engenharia Quimica e Biologia são areas de formação", null));
		professionList.add( new Profession(3l, "Engenheiro Ambiental", "A preocupação com o impacto no meio ambiente tanto na construção civel, quanto no ramo industrial, faz com que o profissional ja seja necessário", null));
		professionList.add( new Profession(4l, "Engenheiro Civil", "Os investimentos em infraestrutura(aeroportos, estradas e linhas férreas) devem continuar, exigindo a formação de engenheiros civis", null));
		professionList.add( new Profession(5l, "Engenheiro hospitalar", "Tem conhecimentos técnicos para lidar com equipamentos hospitalares de alta tecnologia. Visita hospitais no exterior para conhecer tecnologias", null));
		professionList.add( new Profession(6l, "Técnico em telemedicina", "Será parte de uma equipe que oferecerá diagnostico e tratamenrto para habilides de áreas mais remotas", null));
		professionList.add( new Profession(7l, "Conselheiro de aposentadoria", "Se a expectativa é que as pessoas vivam mais, este profissional ganhará força. Formação em Administração. Contabilidade e economia são ideais", null));
		professionList.add( new Profession(8l, "Gestor de qualidade de vida", "Mapeia riscos de problemas de saúde que colaboradores podem desenvolver e melhorar as condições do ambiente de trabalho", null));
		professionList.add( new Profession(9l, "Gestão de operações e logistica", "Investimento em rodovias, portos e aeroportos demandam profgissionais que facilitasm o fluxo de trabalho e o trânsito de pessoas e materiais.", null));
		professionList.add( new Profession(10l, "Gestor de marketing para e-commerce", "Dificuldades de deslocamento em grandes cidades e investimentos em segurança nas transações pela internet turbinam o mercado", null));
		professionList.add( new Profession(11l, "Gestor de big data", "Deverá entender a questão técnica de armazenagem de dados. Matemática, Estatistica e Tecnologia serão as áreas de formação.", null));
		professionList.add( new Profession(12l, "Gestor de comunidades digitais", "Comunica-se com os consumidores em redes socais, fóruns e blogs, verifica o posicionamento da marca, monitora a concorrência e identifica negócios.", null));
		professionList.add( new Profession(13l, "Especialista em cloud computing", "A armazenagem de dados em nuvem é uma das áreas que devem gerar oportunidades para Tecnologia da Informação.", null));
		professionList.add( new Profession(14l, "Gestor de postos de combustivel de hidrogenio", "Fará a gestão de postos de abastecimento, incorporando as novas formas de energia e de combustiveis.", null));
		professionList.add( new Profession(15l, "Controlador de nuvens", "Mapeara e antecipara as alterações atmosfericas para áreas como aviação e agricultura, identificando a melhor estratégia.", null));
		professionList.add( new Profession(16l, "Reciclador de urânio", "Converteráo desperdicio de urânio em energia possivel de ser utilizada para cidades e infraestruturas.", null));
		professionList.add( new Profession(17l, "Consultor de armaduras", "Com a crescente demanda por proteção em profissoões de risco (policial, bombeiro, etç.) as proteções e as armaduras de suporte ganharão peso.", null));
		professionList.add( new Profession(18l, "Engenheiro mecatrônico", "Os profissionais que vão conectar máquinas umas ás outras atuam com programção, cálculo e gestão de ferramentas complexas.", null));
		professionList.add( new Profession(19l, "Arquiteto digital", "Virtualização, tridimensionalidade e tempo real influenciarão a forma como as infraestruturas vão ser projetadas.", null));
		professionList.add( new Profession(20l, "Mecânico de robôs pessoais", "Robôs assumirão funções fundamentais: faxineira, segurança, motorista, babá etç. A manutenção e a reparação abrirão uma nova área de negócios.", null));
		professionList.add( new Profession(21l, "Engenheiro de exoesqueletos de propulsão", "A propulsão associada á mobilidade reiventará os transportes, a Medicina e as profissões. A adoção de tecnologia vestivel com foco na propulsão vai requere profissionais especializados", null));
		professionList.add( new Profession(22l, "Consultor de simplificação", "Com a maior complexidade dos negócios, dos mercados e dos clientes, vai se buscar a simplificação das soluções. Isso será valorizado pelas empresas.", null));
		professionList.add( new Profession(23l, "Empreendedor local", "Empresários vão focar cada vez mais em projetos e empreendimentos ajustados á realidade local, deixando a visão global de lado.", null));
		professionList.add( new Profession(24l, "Geomicrobiologista", "Liderará com as características de bactérias e organismos que poderão ajudar em áreas como Medicina, alimentação, saúde e bem estar.", null));
		professionList.add( new Profession(25l, "Terapeuta experimental", "Novas doenças surgirão com o crescimento da conectividade e da presença online. Os tratamentos vão requere novos métodos e novas terapêuticas.", null));
		professionList.add( new Profession(26l, "Condutor de drones", "A demanda por drones em áreas como varejo, correios, segurança e monitoramento exigirá guias experientes.", null));
		professionList.add( new Profession(27l, "Conselheiro pessoal de compras alimentares", "Ajustar a alimentação á exigência profissional e á estrutura do DNA da pessoa será o trabalho deste consultor.", null));
		professionList.add( new Profession(28l, "Empreendedor alimentar", "O mundo vai buscar a criação de soluções para a fome no mundo e a alimentação saudável. Será o trabalho deste profissional", null));
		professionList.add( new Profession(29l, "Conselheiro de produtividade", "As pessoas precisarão de ajuda para melhorar a produtividade, combinando, combinando saude, gestão de tempo, extraposição online e aconselhamento de carreira", null));
		professionList.add( new Profession(30l, "Desorganizador corporativo", "As empresas pedirão um orgonagrama mais colaborativo, e será preciso que alguém embaralhe e quebre as hieraquias corporativas.", null));
		professionList.add( new Profession(31l, "Tutor de curiosidade", "Será um conselheiro que não só fornecerá inspiração e conteúdo para despertar a curiosidade, mas ensinará a arte da descoberta.", null));
		professionList.add( new Profession(32l, "Especulador de moedas alternativas", "As modedas virtuais estão ganhando força,e isso é uma boa oportunidade para um especialista que se dedique a estudar este mercado.", null));
		professionList.add( new Profession(33l, "Jardineiro urbano", "O especialista de plantas em jardins de pequena escala ou áreas urbanas incomuns será cada vez mais necessário.", null));
		professionList.add( new Profession(34l, "Profissional 3D", "É um especialista em impressão 3d que fabricará tudo o que se precisa de roupa a alimentos, remédios ou peças de decoração", null));
		professionList.add( new Profession(35l, "Administrador de morte digital", "Criará, administrar´ou alimentará dados após a morde de alguém, justando e perenizando sua presença no universo digital", null));
		professionList.add( new Profession(36l, "Arquivista pessoal", "Na era da vida documentada, haverá a necessidade de um especialista para organizar, catalogar e dar sentido aos conteúdos pessoais.", null));
		professionList.add( new Profession(37l, "Especialista em desintoxicação digital", "Precisaremos de um profissional para nos ajudar e nos desintoxicar do mundo virtual e ter uma vida saudável", null));
		professionList.add( new Profession(38l, "Especialista em crowfunding", "É alguem que entede como promover e obter fundos para um projeto por meio de funanciamento público.", null));
		professionList.add( new Profession(39l, "Consultor de novas habilidades", "Este profissional ajudará os clientes a desenvolverem e adiquirirem habilidades para ocupar cargos inéditos nas empresas.", null));
		professionList.add( new Profession(40l, "Agente de memes", "Assim como um agente de celebridades, esse profissional representará presonalidades que se tornaram memes na internet.", null));


		return professionList;
	}
}
