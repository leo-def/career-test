package com.pp.careertest.config.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.security.web.savedrequest.NullRequestCache;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;
import org.springframework.session.web.http.HeaderHttpSessionStrategy;
import org.springframework.session.web.http.HttpSessionStrategy;

import com.pp.careertest.config.security.filter.CsrfHeaderFilter;
import com.pp.careertest.service.account.IAuthService;

@EnableRedisHttpSession
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    
    @Autowired
    CsrfHeaderFilter csrfHeaderFilter;
    
    @Autowired             
 
    IAuthService authService;

    
    @Value("${app.xsrf.header}")
    String xsrfTokenHeader;
    
    @Bean
    public HttpSessionStrategy httpSessionStrategy() {
        return new HeaderHttpSessionStrategy();
    }
    @Bean
    public BCryptPasswordEncoder bcryptEncoder(){
        return new BCryptPasswordEncoder();
    }
  
    
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth
                //.inMemoryAuthentication()
                //.withUser("superuser").password("password").roles(Authorities.ADMIN.authority);
                //.and()
                .userDetailsService(authService)
                .passwordEncoder(bcryptEncoder());
                
    }
    
    @Override
    protected void configure(HttpSecurity http) throws Exception {
    	http.csrf().disable();
    	http
                .httpBasic().and()
                .authorizeRequests()
                /*.antMatchers("/rest/admin/**").hasAuthority(Authorities.ADMIN.authority)
                .antMatchers("/rest/authenticated/**").authenticated()
                .antMatchers("/rest/public/**").permitAll()
                .antMatchers(
                        "/resetPassword/**", 
                        "/confirmPassword/**").permitAll()*/
                .antMatchers("/**").permitAll()
                .and()
               //.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
               // .and()
                //inpedir amazernamento em sessao no browser
               // .requestCache()
               // .requestCache(new NullRequestCache())
                //.and()
               //.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED)
                //.and()
                .addFilterAfter(csrfHeaderFilter, CsrfFilter.class);
    }
}