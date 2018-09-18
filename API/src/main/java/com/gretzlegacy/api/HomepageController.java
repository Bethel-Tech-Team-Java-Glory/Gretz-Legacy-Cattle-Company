package com.gretzlegacy.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping
public class HomepageController {
	
	@Autowired
	private HomepageRepository homepageRepository;
	
	@GetMapping(path="/website")
	public List<HomepageModel> findAll(){
		return homepageRepository.findAll();
}}