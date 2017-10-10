
CareerTest
	
	-Mapeamento de telas
		- Admin
			MENU()
			AppraisalType(CRUD)
				Appraisal (LIST) 
				Questions (CRUD)
					Question-Rule(CRUD)
			Area(CRUD)
			Profession(CRUD)
			StudentProfile(CRUD)
			UniversityProfile(CRUD)
				Course(CRUD)
		- Publico
			MENU()
			Login
			Cadastre
			Home
			Profile
			NewAppraisal
			Results(LIST / SHOW)
			
		- *Universidade
		MENU()
			Profile
			User/Employers(CRUD)
			Course(CRUD)

			
	Ações
		- Teste relacionamento
		- Mudança Relacionamentos
		- Homogação CRUDS
		- Modulo estudante (Como será executado as questões)
		- * Modulo Universidade
		- Authenticação
		- * Implementação modelo SOA e SSO
		

Student

	(PUBLIC)
	link: home  = '/'
	 -> app-routing
		-> student-routing
			-> home-component links:(student-login, student-cadastre)


	link: student = '/student'
		(PUBLIC)
		 -> app-routing
			-> student-routing
				-> home-component links:(student-login, student-cadastre)
		(STUDENT)
		 -> app-routing
			-> student-routing
				-> dashboard-component links:(student, student-account-logout, student-appraisal, student-appraisal-show)

	
	link: student-dashboard = '/student/dashboard'
		(STUDENT)
			 -> app-routing
				-> student-routing
					-> dashboard-component links:(student, student-account-logout)
	
	link: student-home = '/student/home'
		(PUBLIC)
		 -> app-routing
			-> student-routing
				-> home-component links:(student-account, student-cadastre)
	
	
	link: student-profile = '/student/profile'
		(STUDENT)
		 -> app-routing
			-> student-routing
				-> profile-component links:(student, student-account-logout)



	Student-Appraisal
		
		
		link: student-appraisal = '/student/appraisal'
			(STUDENT)
				-> app-routing
					-> student-routing
						->appraisal-routing
							-> execute-appraisal-component links:(student, student-account-logout)
		

		link: student-appraisal-execute  = '/student/appraisal/execute'
			(STUDENT)
				-> app-routing
					-> student-routing
						->appraisal-routing
							-> execute-appraisal-component links:(student, student-account-logout)
						
		link: student-appraisal-show = '/student/appraisal/{appraisal-id}'
			(STUDENT)
				-> app-routing
					-> student-routing
						->appraisal-routing
							-> show-appraisal-component links:(student, student-account-logout)			
	
	Student-Account


		link: student-account = '/student/account'
			(PUBLIC)
			 -> app-routing
				-> student-routing
					-> account-routing
						-> execute-component links:(student-home, student-cadastre, student-forgot-password) 
	
		link: student-account-login = '/student/account/login'
			(PUBLIC)
			 -> app-routing
				-> student-routing
					-> account-routing
						-> show-component links:(student-home, student-cadastre, student-forgot-password) 


		link: student-account-cadastre = '/student/account/cadastre'
			(PUBLIC)
			 -> app-routing
				-> student-routing
					-> account-routing
						-> cadastre-component links:(student, student-account)
					

		link: student-account-forgot-password = '/student/account/forgot-password'
			(PUBLIC)
			 -> app-routing
				-> student-routing
					-> account-routing
						-> forgot-password-component links:(student, student-account) 

		link: student-account-confirm-account = '/student/account/confirm-account'
			(PUBLIC)
			 -> app-routing
				-> student-routing
					-> account-routing
						-> confirm-account-component links:(student, student-account) 	
		
		link: student-account-reset-password = '/student/account/reset-password'
			(STUDENT)
				-> app-routing
					-> student-routing
						-> account-routing
							-> reset-password-component(student, student-account)
							
		link: student-account-logout = '/student/account/logout'
			(STUDENT)
				-> app-routing
					-> student-routing
						-> account-routing
							-> REDIRECT : student-home	
University				
				

				