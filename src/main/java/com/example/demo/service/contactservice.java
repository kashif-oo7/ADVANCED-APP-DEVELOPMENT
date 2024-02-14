package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.contact;
import com.example.demo.repo.contactrepo;

@Service
public class contactservice {
    @Autowired
    contactrepo crepo;
     public String add(contact c){
        crepo.save(c);
        return "added";
     }



}
