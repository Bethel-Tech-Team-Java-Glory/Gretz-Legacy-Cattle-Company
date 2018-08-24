package com.gretzlegacy.service;

import com.gretzlegacy.users.UserModel;

public interface UserService {

	public UserModel findUserByUsername(String username);
	
	public void saveUser(UserModel user);
}
