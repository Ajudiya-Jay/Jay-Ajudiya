package com.jayajudiya.portfolio.controller;

import com.jayajudiya.portfolio.model.Contact;
import com.jayajudiya.portfolio.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*") // Or restrict to your React domain
@RestController
@RequestMapping("/api/contact")
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @PostMapping
    public Contact submitContact(@RequestBody Contact contact) {
        return contactRepository.save(contact);
    }
}
