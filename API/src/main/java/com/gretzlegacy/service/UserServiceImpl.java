package com.gretzlegacy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.gretzlegacy.users.RoleModel;
import com.gretzlegacy.users.RoleRepository;
import com.gretzlegacy.users.UserModel;
import com.gretzlegacy.users.UserRepository;
import java.util.Arrays;
import java.util.HashSet;

@Service("userService")
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@Override
	public UserModel findUserByUsername(String username) {
		return userRepository.findByUsername(username);
	}

	@Override
	public void saveUser(UserModel user) {
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		RoleModel userRole = roleRepository.findByRole("ADMIN");
		user.setRoles(new HashSet<RoleModel>(Arrays.asList(userRole)));
		userRepository.save(user);
	}

}
