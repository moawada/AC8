package com.tuto.rest.webservices.restfulwebservices.helloworld;

import org.springframework.http.HttpStatus;
// import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;


//Cross origin to allow requests from different domains
@CrossOrigin(origins="http://localhost:4200")
//Tell Spring it's a Controller that handles REST requests
@RestController
public class HelloWorldController {

    // Create a mapping for a GET method to this URI
    // @RequestMapping(method=RequestMethod.GET, path = "/hello-world") - enhance with @GetMapping
    @GetMapping(path="/hello-world")
    public String helloWorld(){
        return "Hello World";
    }

    // Create an object as HelloWorld Bean and return it
    // Tutorial suggests, seperating functions:
    // throw new RuntimeException("Some error occurred!");
    // return new HelloWorldBean ("Hello World Bean - Changed");
    @GetMapping(path="/hello-world-bean")
    public HelloWorldBean helloWorldBean() {
    //A more realistic approach would be to 'try and catch':
        try {
        // The following line tests success scenario:
            return new HelloWorldBean ("Hello World Bean - Changed");
        }    
        // The following line tests an error scenario by throwing an exception:
        // Catch the exception and return an error message instead
        catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Some error occurred!");
        }
    }

    // Create an object as HelloWorld Bean and return it, but with pathparameter
    // hello-world/path-variable/tuto
    // Tutorial suggests, seperating functions:
    // return new HelloWorldBean (String.format("Welcome to your Bean World, %s", name));
    @GetMapping(path="/hello-world/path-variable/{name}")
    public HelloWorldBean helloWorldBeanPathVariable(@PathVariable String name){
    // A more realistic approach would be to 'try and catch':
    try {
        // The following line tests success scenario:
        return new HelloWorldBean (String.format("Welcome to your Bean World, %s", name));
        }    
        // The following line tests an error scenario by throwing an exception:
        // Catch the exception and return an error message instead
        catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Some error occurred!");
        }
    }

}
