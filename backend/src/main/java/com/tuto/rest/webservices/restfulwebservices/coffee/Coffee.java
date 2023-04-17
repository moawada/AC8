package com.tuto.rest.webservices.restfulwebservices.coffee;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.TableGenerator;

@Entity
@TableGenerator(name = "coffee_gen", table = "id_gen", pkColumnName = "gen_name", valueColumnName = "gen_val", allocationSize = 100, initialValue = 10003)
public class Coffee {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE, generator = "coffee_gen") //Generate id's automatically
    private Long id;

    private String uid;
    private String blendName;
    private String origin;
    private String variety;
    private String notes;
    private String intensifier;
    private String username;

    //Apparently a protected (default) constructor could be needed
    // with no arguments present to avoid 500 error (type definition error)
    // or this error: "No default constructor for entity"
    // on req methods. Before JPA repo, it seemed useless, so I commented it. 
    //With JPA ressource repo in use, this becomes relevant to stop 500 error.
    protected Coffee() {
    }


    //Constructor
    public Coffee(
        Long id, 
        String uid, 
        String blendName, 
        String origin,
        String variety,
        String notes,
        String intensifier,
        String username
    ) {
        super();
        this.id = id;
        this.uid = uid;
        this.blendName = blendName;
        this.origin = origin;
        this.variety = variety;
        this.notes = notes;
        this.intensifier = intensifier;
        this.username = username;
    }

    //Getters
    public Long getId() {
        return id;
    }

    public String getUid() {
        return uid;
    }

    public String getblendName() {
        return blendName;
    }

    public String getOrigin() {
        return origin;
    }
    
    public String getVariety() {
        return variety;
    }

    public String getNotes() {
        return notes;
    }

    public String getIntensifier() {
        return intensifier;
    }

    public String getUsername() {
        return username;
    }

    //Setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }
    
    public void setblendName(String blendName) {
        this.blendName = blendName;
    }
    
    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public void setVariety(String variety) {
        this.variety = variety;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public void setIntensifier(String intensifier) {
        this.intensifier = intensifier;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    //toString
    @Override
    public String toString() {
        return super.toString();
    }

    //Generate hashcode
    @Override
    public int hashCode() {
        return super.hashCode();
    }
    
    //Generate equals
    @Override
    public boolean equals(Object arg0) {
        return super.equals(arg0);
    }
}
