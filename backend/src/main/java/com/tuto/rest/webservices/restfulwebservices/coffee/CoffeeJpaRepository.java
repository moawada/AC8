package com.tuto.rest.webservices.restfulwebservices.coffee;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoffeeJpaRepository extends JpaRepository<Coffee, Long>  {

    //Create a custom search method based on username
    List<Coffee> findByUsername(String username);
    
}
