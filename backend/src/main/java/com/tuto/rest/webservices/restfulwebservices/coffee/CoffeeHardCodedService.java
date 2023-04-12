package com.tuto.rest.webservices.restfulwebservices.coffee;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;


@Service //to connect with @Autowired in CoffeeRessource.java
public class CoffeeHardCodedService {

    private static List<Coffee> coffees = new ArrayList<Coffee>();
    private static int idCounter = 0;

    static {
        coffees.add(
            new Coffee(
                ++idCounter,
                "1243", 
                "Blend 1",
                "Origin 1",
                "Variety 1",
                "Notes 1",
                "Mild",
                "moe"));
        coffees.add(
            new Coffee(
                ++idCounter,
                "2345", 
                "Blend 2",
                "Origin 2",
                "Variety 2",
                "Notes 2",
                "Medium",
                "moe"));
        coffees.add( 
            new Coffee(
                ++idCounter,
                "3456", 
                "Blend 3",
                "Origin 3",
                "Variety 3",
                "Notes 3",
                "Strong",
                "moe")
        );
    }


    public List<Coffee> findAll() {
        return coffees;
    }

    public Coffee save(Coffee coffee){
        //By default, a new object's id has 0 or -1 as value.
        if(coffee.getId()==-1 || coffee.getId() == 0) {
            coffee.setId(++idCounter);
            coffees.add(coffee);
        }
        //Else, it's not a new object, replace existing one.
        else {
            deleteById(coffee.getId());
            coffees.add(coffee);
        }   
        return coffee;
    }

    
    public Coffee deleteById(long id){
        Coffee coffee = findById(id);

        if (coffee == null) return null;

        if (coffees.remove(coffee)) {
         //uses the equal method to be defined in Coffee.java
            return coffee;
        }
        return null;
    }


    public Coffee findById(long id) {
        for (Coffee coffee: coffees) {
            if(coffee.getId() == id){
                return coffee;
            }
        }
        return null;
    }  

}
