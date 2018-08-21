package com.registration.API;

import org.springframework.data.repository.CrudRepository;

public interface CustRepository extends CrudRepository<Cust, Integer> {

	

	void deleteById(Long id);

	Cust findById(Long id);

	

	}