package com.simplifit.repository;

import com.simplifit.model.BodyMeasurements;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BodyMeasurementsJPARepository extends JpaRepository<BodyMeasurements, Long> {
    
}
