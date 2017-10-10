package com.pp.careertest.service.account;

import com.pp.careertest.entity.account.Account;
import com.pp.careertest.entity.account.ConfirmAccountToken;

public interface IConfirmAccountService {
    ConfirmAccountToken createToken(Account Account);
    Account confirmAccount(String token);
    void remove(String token);
    void removeAccountTokens(Account Account);
}