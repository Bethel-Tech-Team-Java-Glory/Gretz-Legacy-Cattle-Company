package com.gretzlegacy.api.contact;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;





@RestController
@RequestMapping

public class ContactController {

	@Autowired
	private ContactRepository contactRepository;
	
	
	
	@CrossOrigin
	@RequestMapping(value = "/api/contact", method=RequestMethod.GET)
	public Iterable<ContactModel> getAllContacts(){
		return contactRepository.findAll();
	}
	
	
	@CrossOrigin
	@PostMapping(path="/api/contact")
	public ResponseEntity<ContactModel> newContactModel(@RequestBody ContactModel newContactModel) {
		ContactModel createdContact = contactRepository.save(newContactModel);
		return ResponseEntity.ok(createdContact);
	}
	}
