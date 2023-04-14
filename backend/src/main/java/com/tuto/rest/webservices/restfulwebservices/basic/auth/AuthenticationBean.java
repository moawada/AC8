package com.tuto.rest.webservices.restfulwebservices.basic.auth;

public class AuthenticationBean {

    private String message;

    //Constructor
    public AuthenticationBean(String message) {
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
        return String.format("HelloWorldBean [message=%]", message);
    }

}