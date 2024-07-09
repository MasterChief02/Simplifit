package com.simplifit.controller;

import com.simplifit.model.UserInfo;
import com.simplifit.service.UnifiedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.List;

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

    @PostMapping()
    public UserInfo saveUser(@RequestBody UserInfo user) {
        return unifiedService.saveUser(user);
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
