package com.website.Account;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.RequestParam;



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

    @GetMapping("api/{userName}")
    public ResponseEntity<Account> getMethodName(@PathVariable String userName) {
        for (Account account : accountRepo.findAll()) {
            if (account.getUserName().equals(userName)) {
                return ResponseEntity.ok().body(account);
            } 
        }
        return ResponseEntity.notFound().build();
    }
    

    @SuppressWarnings("null")
    @PostMapping("api/sign-up")
    public ResponseEntity<Account> createAccount(@RequestBody Account requestedAccount) {
        for (Account account : accountRepo.findAll()) {
            if (account.getEmail().equals(requestedAccount.getEmail())) {
                return ResponseEntity.notFound().build();
            }
        }
        return ResponseEntity.ok(this.accountRepo.save(requestedAccount));
    }
    
    @CrossOrigin
    @PostMapping(value="api/login", consumes = "application/json")
    public ResponseEntity<String> loginRequest(@RequestBody AccountRequest request) {
    // Do something with the string here
        return ResponseEntity.ok( request.getEmail() + " and " + request.getPassword());
    }
}