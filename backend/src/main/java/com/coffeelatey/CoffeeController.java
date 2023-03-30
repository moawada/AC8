package com.coffeelatey.coffeelateywebapp;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CoffeeController {
    
    private static final Random RANDOM = new Random();

    private static final String[] BLEND_NAMES = {"House Blend", "Dark Roast", "Espresso", "French Roast", "Sumatra"};

    private static final String[] ORIGINS = {"Colombia", "Ethiopia", "Kenya", "Costa Rica", "Guatemala"};

    private static final String[] VARIETIES = {"Arabica", "Robusta"};

    private static final String[] NOTES = {"Chocolate", "Fruit", "Caramel", "Floral", "Nutty"};

    private static final String[] INTENSIFIERS = {"Strong", "Mild", "Medium", "Extra Strong"};

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/coffee")
    public ICoffeeInfo getRandomCoffee() {
        ICoffeeInfo coffee = new ICoffeeInfo();
        coffee.setId(generateId());
        coffee.setUid(generateUid());
        coffee.setBlendName(BLEND_NAMES[RANDOM.nextInt(BLEND_NAMES.length)]);
        coffee.setOrigin(ORIGINS[RANDOM.nextInt(ORIGINS.length)]);
        coffee.setVariety(VARIETIES[RANDOM.nextInt(VARIETIES.length)]);
        coffee.setNotes(NOTES[RANDOM.nextInt(NOTES.length)]);
        coffee.setIntensifier(INTENSIFIERS[RANDOM.nextInt(INTENSIFIERS.length)]);
        return coffee;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/coffees")
    public List<ICoffeeInfo> getRandomCoffees() {
        List<ICoffeeInfo> coffees = new ArrayList<>();
        for (int i = 0; i < 50; i++) {
            coffees.add(getRandomCoffee());
        }
        return coffees;
    }

    public short generateId() {
        // Generate a random number between 0 and 32767 (inclusive)
        Random random = new Random();
        short randomId = (short) random.nextInt(32768);
        return randomId;
    }

    private String generateUid() {
        return Long.toHexString(Double.doubleToLongBits(Math.random()));
    }
}
