package com.backend.coffeelatey;

public class ICoffeeInfo {
    private short id;
    private String uid;
    private String blendName;
    private String origin;
    private String variety;
    private String notes;
    private String intensifier;

    public short getId() {
        return id;
    }

    public void setId(short id) {
        this.id = id;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public String getBlendName() {
        return blendName;
    }

    public void setBlendName(String blendName) {
        this.blendName = blendName;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getVariety() {
        return variety;
    }

    public void setVariety(String variety) {
        this.variety = variety;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getIntensifier() {
        return intensifier;
    }

    public void setIntensifier(String intensifier) {
        this.intensifier = intensifier;
    }
}