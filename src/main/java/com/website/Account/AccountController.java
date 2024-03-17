package com.website.Account;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class AccountController {

    @CrossOrigin
    @PostMapping(value="api/login", consumes = "application/json")
    public ResponseEntity<String> loginRequest(@RequestBody AccountRequest request) {
    // Do something with the string here
        return ResponseEntity.ok( request.getEmail() + " and " + request.getPassword());
    }
}