package com.cms.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "credentials")
public class Credential {

    @Id
    private String username;

    private String password;
    private String domain;
    private int cvv;
    private String expiry;

    // Getters and setters
}
