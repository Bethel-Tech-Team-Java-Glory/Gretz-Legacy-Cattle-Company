package com.gretzlegacy.api.companyservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class ServiceListController {
	
	@Autowired
	private ServiceListRepository serviceListRepository;
	
	@GetMapping(path="/service-list")
	public List<ServiceList> findAll(){
		return serviceListRepository.findAll();
	}
	
	@CrossOrigin(origins="http://localhost:3000/")
	@PostMapping(path="/service-list/add")
	public ResponseEntity<ServiceList> newServiceList(@RequestBody ServiceList newServiceList) {
		ServiceList createdService = serviceListRepository.save(newServiceList);
		return ResponseEntity.ok(createdService);
	}
	
	
}
