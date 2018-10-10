package com.gretzlegacy.api.users;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.gretzlegacy.api.service.UserService;

@RestController
public class UserController {

	@Autowired
	private UserService userService;
	
	@GetMapping(value="/login")
	public ModelAndView login() {
		ModelAndView model = new ModelAndView();
		
		model.setViewName("user/login");
		return model;
	}
	
	@RequestMapping(value= {"/signup"}, method=RequestMethod.GET)
	public ModelAndView signup() {
		ModelAndView model = new ModelAndView();
		UserModel user = new UserModel();
		model.addObject("user", user);
		model.setViewName("user/signup");
		
		return model;
	}
	
	@RequestMapping(value= {"/signup"}, method=RequestMethod.POST)
	 public ModelAndView createUser(@Valid UserModel user, BindingResult bindingResult) {
	  ModelAndView model = new ModelAndView();
	  UserModel userExists = userService.findUserByUsername(user.getUsername());
	  
	  if(userExists != null) {
	   bindingResult.rejectValue("email", "error.user", "This email already exists!");
	  }
	  if(bindingResult.hasErrors()) {
	   model.setViewName("user/signup");
	  } else {
	   userService.saveUser(user);
	   model.addObject("msg", "User has been registered successfully!");
	   model.addObject("user", new UserModel());
	   model.setViewName("user/signup");
	  }
	  
	  return model;
	 }
	
	@RequestMapping(value= {"/homepage"}, method=RequestMethod.GET)
	public ModelAndView homePage() {
		ModelAndView model = new ModelAndView();
		
		model.setViewName("redirect:" + "http://localhost:3000/#/");
		return model;
	}
	
	@RequestMapping(value= {"/service"}, method=RequestMethod.GET)
	public ModelAndView servicePage() {
		ModelAndView model = new ModelAndView();
		
		model.setViewName("redirect:" + "http://localhost:3000/#/service");
		return model;
	}
	
	@RequestMapping(value= {"/contact"}, method=RequestMethod.GET)
	public ModelAndView contactForm() {
		ModelAndView model = new ModelAndView();
		
		model.setViewName("redirect:" + "http://localhost:3000/#/contact");
		return model;
	}
	
	@RequestMapping(value= {"/access_denied"}, method=RequestMethod.GET)
	public ModelAndView accessDenied() {
		ModelAndView model = new ModelAndView();
		model.setViewName("errors/access_denied");
		return model;
	}
}
