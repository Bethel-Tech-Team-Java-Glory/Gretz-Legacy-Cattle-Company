package com.gretzlegacy.api.users;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("roleRepository")
public interface RoleRepository extends JpaRepository<RoleModel, Integer>{

	RoleModel findByRole(String role);
}
