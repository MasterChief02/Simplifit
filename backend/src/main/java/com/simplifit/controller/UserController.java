package com.simplifit.controller;

import com.simplifit.model.UserCredentials;
import com.simplifit.model.UserInfo;
import com.simplifit.service.UnifiedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UnifiedService unifiedService;

    @Autowired
    public UserController(UnifiedService unifiedService) {
        this.unifiedService = unifiedService;
    }

    @GetMapping()
    public List<UserInfo> getAllUsers() {
        return unifiedService.getAllUsers();
    }

    @GetMapping("/test")
    public String testEndpoint() {
        return "Spring Boot application is running!";
    }

    @GetMapping("/{userId}")
    public ResponseEntity<?> getUserById(@PathVariable int userId) {
        try {
            UserInfo user = unifiedService.getUserById(userId);
            return ResponseEntity.ok(user);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Personal Evaluation with id " + userId + " not found");
        }
    }

    // @PostMapping()
    // public UserInfo saveUser(@RequestBody UserInfo user) {
    //     System.out.println("Pass");
    //     return unifiedService.saveUser(user);
    // }

    @PostMapping()
    public ResponseEntity<?> verifyUser(@RequestBody UserCredentials user) {
        boolean isValid = unifiedService.verifyUser(user.getUsername(), user.getPassword());
        System.out.println("Pass " + user.getUsername() + user.getPassword());
        if (isValid) {
            System.out.println("Passed");
            return ResponseEntity.ok("success");
        } else {
            System.out.println("Failed");
            return ResponseEntity.ok("failed");
        }
    }

    @DeleteMapping("/{userId}")
    public  ResponseEntity<String> deleteUser(@PathVariable int userId) {
        try {
            unifiedService.deleteUser(userId);
            return ResponseEntity.noContent().build();
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("User with id " + userId + " not found");
        }    }
}
