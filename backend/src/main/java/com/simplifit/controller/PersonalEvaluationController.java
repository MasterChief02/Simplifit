package com.simplifit.controller;

import com.simplifit.model.HealthMetrics;
import com.simplifit.model.PersonalEvaluation;
import com.simplifit.service.UnifiedService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/personalevaluation")
public class PersonalEvaluationController {
    private final UnifiedService unifiedService;

    public PersonalEvaluationController(UnifiedService unifiedService) {
        this.unifiedService = unifiedService;
    }


    @GetMapping()
    public ResponseEntity<List<PersonalEvaluation>> getAllPersonalEvaluation() {
        List<PersonalEvaluation> evaluations = unifiedService.getAllPersonalEvaluations();
        return ResponseEntity.ok(evaluations);
    }


    @GetMapping("/{evaluationId}")
    public ResponseEntity<?> getEvaluationById(@PathVariable Long evaluationId) {
        try {
            PersonalEvaluation personalEvaluation = unifiedService.getPersonalEvaluationById(evaluationId);
            return ResponseEntity.ok(personalEvaluation);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Personal Evaluation with id " + evaluationId + " not found");
        }
    }

    @PostMapping()
    public ResponseEntity<PersonalEvaluation> createPersonalEvaluation(@RequestBody PersonalEvaluation newPersonalEvaluation) {
        System.out.println("Recv");
        PersonalEvaluation personalEvaluation = unifiedService.savePersonalEvaluation(newPersonalEvaluation);
        return ResponseEntity.ok(personalEvaluation);
    }

    @DeleteMapping("/{evaluationId}")
    public ResponseEntity<String> deletePersonalEvaluation(@PathVariable Long evaluationId) {
        try {
            unifiedService.deletePersonalEvaluation(evaluationId);
            return ResponseEntity.noContent().build();
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Personal Evaluation with id " + evaluationId + " not found");
        }
    }
}
