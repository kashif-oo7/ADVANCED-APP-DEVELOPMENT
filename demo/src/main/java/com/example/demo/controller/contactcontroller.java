package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.contact;
import com.example.demo.service.contactservice;

@CrossOrigin
@RestController
public class contactcontroller {
    @Autowired
    contactservice cservice;
    @PostMapping("/contact")
    public String add(@RequestBody contact c){
        return cservice.add(c);
    }

}
