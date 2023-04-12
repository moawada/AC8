package com.tuto.rest.webservices.restfulwebservices.helloworld;

public class HelloWorldBean {

    private String message;

    //Constructor
    public HelloWorldBean(String message) {
        super();
        this.message = message;
    }

    //Setter
    public void setMessage(String message) {
        this.message = message;
    }

    //Getter must be created or else error will occur 
    public String getMessage() {
        return message;
    }

    //toString
    @Override
    public String toString() {
        return super.toString();
    }

}
