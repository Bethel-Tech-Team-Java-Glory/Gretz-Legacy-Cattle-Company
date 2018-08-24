package com.registration.API;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/customers")
public class CustController {

	private CustRepository repo;
	
	@Autowired
	public CustController(CustRepository repo) {
		this.repo = repo;
	}
	
	// Create Person method
		@RequestMapping(value="/add", method=RequestMethod.POST)
		public Cust addCustomer(@RequestBody Cust customer) {
			return repo.save(customer);
		}
		// Read Person method
		@RequestMapping(value="/{id}")
		public Cust getCustomerById(@PathVariable Long id) {
			return repo.findById(id);
		}
		@RequestMapping(value="/getAll", method=RequestMethod.GET)
		public Iterable<Cust> getAllCustomers(){
			return repo.findAll();
		}
		
		// Update Person method
		@RequestMapping(value="/{id}", method=RequestMethod.PUT)
		public Cust updateCustomerById(@PathVariable Long id, @RequestBody Cust updateCustomer) {
			Cust customer = repo.findById(id);
			customer.setFirstName(updateCustomer.getFirstName());
			customer.setLastName(updateCustomer.getLastName());
			customer.setEmail(updateCustomer.getEmail());
			return repo.save(customer);
}
		// Delete Person method
				@RequestMapping(value="/{id}", method=RequestMethod.DELETE)
				public void deleteCustomerById(@PathVariable Long id) {
					repo.deleteById(id);
						}


}

		

		
