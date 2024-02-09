package com.example.demo.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.userEntity;
import com.example.demo.repo.userRepo;

@Service
public class userService {

    @Autowired(required=true)
	userRepo r;
	
	public String add(userEntity e)
	{
		r.save(e);
		return "Added";
	}
	
	public List<userEntity> getDetails()
	{
		return r.findAll();
	}
	
	public userEntity updateDetails(userEntity newUser ,int id) 
	{
		userEntity up=r.findById(id).get();		
		 up.setName(newUser.getName());
		 up.setDate(newUser.getDate());
		 up.setTime(newUser.getTime());
		 up.setPhone_no(newUser.getPhone_no());
		 up.setTypes_of_service(newUser.getTypes_of_service());
         return r.saveAndFlush(up);
	}
	
   
	
	
	
	
	public void deleteDetails(int id) {
		r.deleteById(id);
	}
	
	
	
	public userEntity getDetail(int id) {
	
		return r.findById(id).get();
	}

    
}