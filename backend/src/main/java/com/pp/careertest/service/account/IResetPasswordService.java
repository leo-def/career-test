package com.pp.careertest.service.account;

import com.pp.careertest.entity.account.Account;
import com.pp.careertest.entity.account.ResetPasswordToken;

public interface IResetPasswordService {
	ResetPasswordToken resetPasswordRequest(Account user);
	Account resetPassword(String token);
}
