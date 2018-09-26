package com.gretzlegacy.api.contact;



public interface ContactService {
	
public ContactModel findContactByContact(String Contact);
	
	public void saveContact(ContactModel contact);

	public Iterable<ContactModel> findAll();
}


