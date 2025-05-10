package com.cms.backend.controller;

import com.cms.backend.model.Credential;
import com.cms.backend.repository.CredentialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/credentials")
public class CredentialController {

    @Autowired
    private CredentialRepository repository;

    @GetMapping
    public List<Credential> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public Credential addCredential(@RequestBody Credential credential) {
        return repository.save(credential);
    }
}
