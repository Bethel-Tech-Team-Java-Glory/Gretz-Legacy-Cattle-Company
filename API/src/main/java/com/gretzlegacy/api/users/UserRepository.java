package com.gretzlegacy.api.users;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("userRepository")
public interface UserRepository extends JpaRepository<UserModel, Integer>{
	
	UserModel findByUsername(String username);
}
