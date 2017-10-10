package com.pp.careertest.utils.mail;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class EmailSender {
	static final String UTF8 = "UTF-8";
    private JavaMailSender javaMailSender;
    private MailTemplateHandler mailTemplateHandler;

    @Autowired
    public EmailSender(JavaMailSender javaMailSender, MailTemplateHandler mailTemplateHandler) {
        this.javaMailSender = javaMailSender;
        this.mailTemplateHandler = mailTemplateHandler;
    }

    @Async
    public void prepareAndSend(String from, String[] recipients, String subject, Map<String,Object> ctx, String typeTemplate) {    	
        MimeMessagePreparator messagePreparator = mimeMessage -> {
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage);
            messageHelper.setFrom(from);
            messageHelper.setTo(recipients);
            messageHelper.setSubject(subject);
            String content = mailTemplateHandler.generateContent(ctx, typeTemplate);
            messageHelper.setText(content,true);
        };
        try {
        	System.out.println("Ok send e-mail");
            javaMailSender.send(messagePreparator);
        } catch (MailException e) {
        	System.out.println("Erro ao enviar mensagem - \n" + e.getMessage());
        }
    }
}