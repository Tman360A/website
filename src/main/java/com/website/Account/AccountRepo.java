package com.website.Account;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface AccountRepo extends MongoRepository<Account, String> {
    
}
