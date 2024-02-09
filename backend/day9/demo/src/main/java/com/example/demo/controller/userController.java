package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.userEntity;
import com.example.demo.service.userService;





@RestController
class EventController {

    @Autowired
    userService r;

@PostMapping("/add/book")
public String addDetails(@RequestBody userEntity m) {
    r.add(m);
    return "booking Added " ;
}

@GetMapping("/get/book")
public List<userEntity> showDetails() {
    return r.getDetails();

}
@GetMapping("/get/book/{id}")
public userEntity showDetail(@PathVariable int id) {
    return r.getDetail(id);

}



@PutMapping("/update/book/{id}")
public userEntity Details(@RequestBody userEntity newUser ,@PathVariable int id)
{
     return r.updateDetails(newUser,id);
}

@DeleteMapping("/delete/book/{id}")
public String delete(@PathVariable int id )
{
    r.deleteDetails(id);
    return "your book id "+ "is deleted";
}

}