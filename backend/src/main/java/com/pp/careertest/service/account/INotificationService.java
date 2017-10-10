package com.pp.careertest.service.account;

import com.pp.careertest.entity.account.Account;
import com.pp.careertest.entity.account.ConfirmAccountToken;
import com.pp.careertest.entity.account.ResetPasswordToken;

public interface INotificationService {
    boolean notifyCustomMessage(String subject, String text, Account Account);
    //resetPassword
    boolean notifyResetPasswordRequest(ResetPasswordToken token, Account Account, String url);
    boolean notifyResetPassword(Account Account);
    //confirmAccount
    boolean notifyConfirmAccount(ConfirmAccountToken token, Account Account, String url);
    boolean notifyConfirmAccountResponse(Account Account);
}