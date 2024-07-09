package com.simplifit.controller;

import com.simplifit.model.BodyMeasurements;
import com.simplifit.service.UnifiedService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/bodymeasurements")
public class BodyMeasurementsController {
    private final UnifiedService unifiedService;

    public BodyMeasurementsController(UnifiedService unifiedService) {
        this.unifiedService = unifiedService;
    }

    @GetMapping()
    public ResponseEntity<List<BodyMeasurements>> getAllBodyMeasurements() {
        List<BodyMeasurements> measurements = unifiedService.getAllBodyMeasurements();
        return ResponseEntity.ok(measurements);
    }

    @GetMapping("/{measurementsID}")
    public ResponseEntity<?> getBodymeasurementsById(@PathVariable Long measurementsID) {
        try {
            BodyMeasurements bodyMeasurements = unifiedService.getBodyMeasurementsById(measurementsID);
            return ResponseEntity.ok(bodyMeasurements);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("HealthMetrics with id " + measurementsID + " not found");
        }
    }
    @PostMapping()
    public ResponseEntity<BodyMeasurements> createBodyMeasurements(@RequestBody BodyMeasurements newMeasurements) {
        BodyMeasurements bodyMeasurements = unifiedService.saveBodyMeasurements(newMeasurements);
        return ResponseEntity.ok(bodyMeasurements);
    }

    @DeleteMapping("/{measurementsId}")
    public ResponseEntity<String> deleteMeasurementsById(@PathVariable Long measurementsId) {
        try {
            unifiedService.deleteBodyMeasurements(measurementsId);
            return ResponseEntity.noContent().build();
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("BodyMeasurements with id " + measurementsId + " not found");
        }
    }
}
