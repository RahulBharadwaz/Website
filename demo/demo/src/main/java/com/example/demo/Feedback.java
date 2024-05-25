package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String experience;
    private String likes;
    private String improvements;
    private int likelihood;
    private String comments;

    // Getters and Setters (omitted for brevity)

    public Feedback(String name, String email, String experience, String likes,
                    String improvements, int likelihood, String comments) {
        this.name = name;
        this.email = email;
        this.experience = experience;
        this.likes = likes;
        this.improvements = improvements;
        this.likelihood = likelihood;
        this.comments = comments;
    }

    public Feedback() {

    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    // Empty constructor (optional)
}
