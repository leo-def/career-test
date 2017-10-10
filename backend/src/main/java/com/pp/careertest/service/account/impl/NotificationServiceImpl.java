package com.pp.careertest.service.account.impl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.pp.careertest.entity.account.Account;
import com.pp.careertest.entity.account.ConfirmAccountToken;
import com.pp.careertest.entity.account.ResetPasswordToken;
import com.pp.careertest.service.account.INotificationService;
import com.pp.careertest.utils.mail.EmailSender;

@Service
public class NotificationServiceImpl implements INotificationService {
    
    
    // !! arrumar outra forma de atribuir este valor
    final String FROM = "CareerTest";    
    
    @Value("${app.host.url}")
    String hostUrl;

     @Autowired
     EmailSender emailSender;
    
    @Override
    public boolean notifyCustomMessage(String subject, String text, Account account) {
    	Map<String,Object> ctx = new HashMap<>();
        ctx.put("message", text);
        emailSender.prepareAndSend(FROM, account.getEmail().split(","), subject, ctx, "MSG");
        return true;
    }

    @Override
    public boolean notifyResetPasswordRequest(ResetPasswordToken token, Account account, String url) {    
    	Map<String,Object> ctx = new HashMap<>();        
        ctx.put("message", "Clique neste link para redefinir sua senha");
        ctx.put("link", url);
        emailSender.prepareAndSend(FROM, account.getEmail().split(","), "Notify Reset Password Request", ctx, "LINK");
       return true;
    }

    @Override
    public boolean notifyConfirmAccount(ConfirmAccountToken token, Account account, String url) {
    	Map<String,Object> ctx = new HashMap<>();
    	ctx.put("message", "Clique neste link para confirmar seu cadastro");
        ctx.put("link", url);
        emailSender.prepareAndSend(FROM, account.getEmail().split(","), "Notify Confirm Account", ctx, "LINK");
        return true;
    }

    @Override
    public boolean notifyResetPassword(Account account) {
    	Map<String,Object> ctx = new HashMap<>();
        ctx.put("message", "Senha alterada com sucesso");
        emailSender.prepareAndSend(FROM, account.getEmail().split(","), "Notify Reset Password", ctx, "MSG");
        return true;
    }

    @Override
    public boolean notifyConfirmAccountResponse(Account account) {
    	Map<String,Object> ctx = new HashMap<>();
        ctx.put("message", "Conta confirmada com sucesso");
        emailSender.prepareAndSend(FROM, account.getEmail().split(","), "Notify Confirm Account Response", ctx, "MSG");
        return true;
    }
}
