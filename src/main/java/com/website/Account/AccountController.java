package com.website.Account;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.List;


@RestController
public class AccountController {

    private AccountRepo accountRepo;

    public AccountController(AccountRepo accountRepo) {
        this.accountRepo = accountRepo;
    }

    @GetMapping("api/accounts")
    public ResponseEntity<List<Account>> getAccounts() {
       return ResponseEntity.ok(this.accountRepo.findAll());
    }

    @SuppressWarnings("null")
    @PostMapping("api/sign-up")
    public ResponseEntity<Account> createAccount(@RequestBody Account account) {
        return ResponseEntity.ok(this.accountRepo.save(account));
    }
    
    
    @CrossOrigin
    @PostMapping(value="api/login", consumes = "application/json")
    public ResponseEntity<String> loginRequest(@RequestBody AccountRequest request) {
    // Do something with the string here
        return ResponseEntity.ok( request.getEmail() + " and " + request.getPassword());
    }
}