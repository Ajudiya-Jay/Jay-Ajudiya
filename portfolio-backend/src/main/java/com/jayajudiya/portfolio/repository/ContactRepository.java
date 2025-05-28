package com.jayajudiya.portfolio.repository;

import com.jayajudiya.portfolio.model.Contact;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ContactRepository extends MongoRepository<Contact, String> {
}
