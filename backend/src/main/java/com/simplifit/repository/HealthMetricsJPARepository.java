
package com.simplifit.repository;

import com.simplifit.model.HealthMetrics;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HealthMetricsJPARepository extends JpaRepository<HealthMetrics, Long> {
    
}
