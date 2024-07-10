package com.simplifit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.simplifit.model.TrackerData;
import com.simplifit.service.UnifiedService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/trackerdata")
public class TrackerDataController {

    private UnifiedService unifiedService;

    public TrackerDataController(UnifiedService unifiedService) {
        this.unifiedService = unifiedService;
    }
    
    @PostMapping()
    public ResponseEntity<TrackerData> createTrackerData(@RequestBody TrackerData trackerData) {
        TrackerData savedTrackerData = unifiedService.saveTrackerData(trackerData);
        return new ResponseEntity<>(savedTrackerData, HttpStatus.CREATED);
    }

    @GetMapping()
    public ResponseEntity<List<TrackerData>> getAllTrackerData() {
        List<TrackerData> trackerDataList = unifiedService.getAllTrackerData();
        return new ResponseEntity<>(trackerDataList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TrackerData> getTrackerDataById(@PathVariable Long id) {
        Optional<TrackerData> trackerData = unifiedService.getTrackerDataById(id);
        return trackerData.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTrackerData(@PathVariable Long id) {
        unifiedService.deleteTrackerData(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<TrackerData> updateTrackerData(@PathVariable Long id, @RequestBody TrackerData trackerData) {
        try {
            TrackerData updatedTrackerData = unifiedService.updateTrackerData(id, trackerData);
            return ResponseEntity.ok(updatedTrackerData);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
