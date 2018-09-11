package com.contact.API;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import org.springframework.data.repository.CrudRepository;

public interface ContactRepository extends CrudRepository<ContactModel, Long> {
	
}