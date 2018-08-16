package com.gretzlegacy.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/website")
public class HomepageController {
	@Autowired
	private HomepageRepository repository;
	
	@RequestMapping(value = "/getAll", method = RequestMethod.GET)
	public Iterable<HomepageModel> getAllWebsites(){
		return repository.findAll();
}}