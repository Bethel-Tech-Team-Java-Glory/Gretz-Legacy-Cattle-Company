package com.gretzlegacy.api;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HomepageRepository extends CrudRepository<HomepageModel, Integer>{

}
