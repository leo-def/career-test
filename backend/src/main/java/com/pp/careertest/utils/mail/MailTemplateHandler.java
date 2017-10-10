package com.pp.careertest.utils.mail;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

@Service
public class MailTemplateHandler {

    public static final String MAIL_TEMPLATE_MSG = "mail/mailTemplateMsg";
    public static final String MAIL_TEMPLATE_LINK = "mail/mailTemplateLink";

    private TemplateEngine templateEngine;
 
    @Autowired
    public MailTemplateHandler(TemplateEngine templateEngine) {
        this.templateEngine = templateEngine;
    }

    public String generateContent(Map<String,Object> ctx, String typeTemplate) {
        Context context = new Context();
        context.setVariables(ctx);
        if (typeTemplate.equals("MSG")) {
        	return templateEngine.process(MAIL_TEMPLATE_MSG, context);
        } else {
        	return templateEngine.process(MAIL_TEMPLATE_LINK, context);
        }
    }
 
}