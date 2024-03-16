package com.website.Account;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class AccountController {

    @CrossOrigin
    @PostMapping("api/login")
    public ResponseEntity<String> handleString(@RequestBody String myString) {
    // Do something with the string here
        return ResponseEntity.ok("Received string: " + myString + " YES YOU DID IT");
    }
}