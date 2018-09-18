package com.gretzlegacy.api.contact;

import org.springframework.data.repository.CrudRepository;

public interface ContactRepository extends CrudRepository<ContactModel, Long> {
	
}