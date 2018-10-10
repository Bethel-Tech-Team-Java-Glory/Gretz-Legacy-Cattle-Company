package com.gretzlegacy.api.companyservice;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	
	@CrossOrigin
	@PostMapping(path="/service-list/add")
	public ResponseEntity<ServiceList> newServiceList(@RequestBody ServiceList newServiceList) {
		ServiceList createdService = serviceListRepository.save(newServiceList);
		return ResponseEntity.ok(createdService);
	}
	
	@PutMapping(path="/service-list/{service_id}")
	public ResponseEntity<ServiceList> updateService(@PathVariable("service_id") Integer service_id, @RequestBody ServiceList serviceList) {
		System.out.println("Update service with ID: " + service_id);
		
		Optional<ServiceList> serviceItem = serviceListRepository.findById(service_id);
		if (serviceItem.isPresent()) {
			ServiceList savedService = serviceItem.get();
			savedService.setServicename(serviceList.getServicename());
			
			ServiceList updatedService = serviceListRepository.save(savedService);
			
			return new ResponseEntity<>(updatedService, HttpStatus.OK);
		}	else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping(path="/service-list/{service_id}")
	public ResponseEntity<String> deleteService(@PathVariable("service_id") Integer service_id) {
		System.out.println("Delete service with ID: " + service_id);
		
		try {
			serviceListRepository.deleteById(service_id);
		} catch (Exception e) {
			return new ResponseEntity<>("Fail to delete!", HttpStatus.EXPECTATION_FAILED);
		}
		
		return new ResponseEntity<>("Service item has been delete!", HttpStatus.OK);
	}
	
}
