package com.gretzlegacy.api.service;

import com.gretzlegacy.api.users.UserModel;

public interface UserService {

	public UserModel findUserByUsername(String username);
	
	public void saveUser(UserModel user);
}
