package com.tuto.rest.webservices.restfulwebservices.coffee;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


//Cross origin to allow requests from different domains
@CrossOrigin(origins="http://localhost:4200")
//Tells Spring it's a Controller that handles REST requests
@RestController
public class CoffeeJpaRessource {

    //To connect with @Service in CoffeeHardCodedService.java
    // @Autowired 
    // private CoffeeHardCodedService coffeeService;

    @Autowired //To connect with @Service in CoffeeJpaRepository.java
    private CoffeeJpaRepository coffeeJpaRepository;


    @GetMapping("/jpa/{username}/coffees")
    public List<Coffee> getAllCoffees(@PathVariable String username){
        return coffeeJpaRepository.findAll();
    }

    @GetMapping("/jpa/{username}/coffees/my-coffees")
    public List<Coffee> getMyCoffees(@PathVariable String username){
        return coffeeJpaRepository.findByUsername(username);
        // return coffeeService.findAll();
    }

    @GetMapping("/jpa/{username}/coffees/my-coffees/{id}")
    public Coffee getCoffee(@PathVariable String username, @PathVariable long id){
        //findById(id ) in JpaRepo returns an optional back; reason for .get()
        return coffeeJpaRepository.findById(id).get(); 
        // return coffeeService.findById(id);
    }

    @DeleteMapping("/jpa/{username}/coffees/my-coffees/{id}")
    public ResponseEntity<Void> deleteCoffee(@PathVariable String username, @PathVariable long id) {

        //Coffee coffee = coffeeService.deleteById(id);
        coffeeJpaRepository.deleteById(id);      
            return ResponseEntity.noContent().build();
    }

    @PutMapping("/jpa/{username}/coffees/my-coffees/{id}")
    public ResponseEntity<Coffee> updateCoffee(
            @PathVariable String username, 
            @PathVariable long id,
            @RequestBody Coffee coffee){
        
        Coffee coffeeUpdated = coffeeJpaRepository.save(coffee);
        return new ResponseEntity<Coffee>(coffeeUpdated, HttpStatus.OK);
    }

    @PostMapping("/jpa/{username}/coffees/my-coffees")
    public ResponseEntity<Void> createCoffee(@PathVariable String username, @RequestBody Coffee coffee){

        coffee.setUsername(username); //This will assign user'username to it's new coffees.
        Coffee createdCoffee = coffeeJpaRepository.save(coffee);

        //Taking the current request path and appending /{id} of the new ressource to it.
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
            .path("{id}").buildAndExpand(createdCoffee.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

}
