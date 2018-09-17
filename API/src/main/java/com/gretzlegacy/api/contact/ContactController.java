package com.gretzlegacy.api.contact;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping

public class ContactController {

	@Autowired
	private ContactRepository contactRepository;
	
	@CrossOrigin(origins = "http://localhost:8080")
	@RequestMapping(value = "/api/contact", method=RequestMethod.GET)
	public Iterable<ContactModel> getAllContacts(){
		return contactRepository.findAll();
	}
	
	@RequestMapping(value = "/api/contact", method = RequestMethod.POST)
	   public void create(@RequestBody ContactModel contact){
		contactRepository.save(contact);
	     
	  }

}
