package com.contact.API;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping
public class ContactController {

	@Autowired
	private ContactRepository contactRepository;
	
	@RequestMapping(value = "/contact", method=RequestMethod.GET)
	public Iterable<ContactModel> getAllContacts(){
		return contactRepository.findAll();
	}
	
	
	@RequestMapping(value = "/contact", method = RequestMethod.POST)
	  public ContactModel create(@RequestBody ContactModel contact){
	     return contact; 
	  }

}