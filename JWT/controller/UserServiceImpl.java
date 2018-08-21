package com.security.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service(value = "userService")
public class UserServiceImpl implements UserDetailService, UserService {
	
	@Autowired
	private UserRepository userRepository;
	

}
