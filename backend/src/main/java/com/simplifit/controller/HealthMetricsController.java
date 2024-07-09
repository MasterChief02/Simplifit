package com.simplifit.controller;

import com.simplifit.model.HealthMetrics;
import com.simplifit.service.UnifiedService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/healthmetrics")
public class HealthMetricsController {

    private final UnifiedService unifiedService;

    public HealthMetricsController(UnifiedService unifiedService) {
        this.unifiedService = unifiedService;
    }


    @GetMapping()
    public ResponseEntity<List<HealthMetrics>> getAllHealthMetrics() {
        List<HealthMetrics> metrics = unifiedService.getAllHealthMetrics();
        return ResponseEntity.ok(metrics);
    }

    @GetMapping("/{metricId}")
    public ResponseEntity<?> getHealthMetricsById(@PathVariable Long metricId) {
        try {
            HealthMetrics healthMetrics = unifiedService.getHealthMetricsById(metricId);
            return ResponseEntity.ok(healthMetrics);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("HealthMetrics with id " + metricId + " not found");
        }
    }
    @PostMapping()
    public ResponseEntity<HealthMetrics> createHealthMetrics(@RequestBody HealthMetrics healthMetrics) {
        HealthMetrics savedHealthMetrics = unifiedService.saveHealthMetrics(healthMetrics);
        return ResponseEntity.ok(savedHealthMetrics);
    }

    @DeleteMapping("/{metricId}")
    public ResponseEntity<String> deleteHealthMetric(@PathVariable Long metricId) {
        try {
            unifiedService.deleteHealthMetrics(metricId);
            return ResponseEntity.noContent().build();
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("HealthMetrics with id " + metricId + " not found");
        }
    }
}
