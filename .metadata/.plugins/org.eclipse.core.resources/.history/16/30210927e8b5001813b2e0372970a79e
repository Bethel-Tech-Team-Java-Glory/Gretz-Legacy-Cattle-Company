package com.contact.API;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/contact")
public class ContactController {

	@Autowired
	private ContactRepository repo;
	
	@RequestMapping(value="/getAll", method=RequestMethod.GET)
	public Iterable<ContactModel> getAllContacts(){
		return repo.findAll();
	}
	
	@RequestMapping(value= {"/"}, method=RequestMethod.POST)
	public ContactModel login() {
		ContactModel model = new ContactModel();
		
		model.setName("name");
		return model;
	}
}