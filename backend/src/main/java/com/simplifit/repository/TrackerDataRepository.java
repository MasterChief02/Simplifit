package com.simplifit.repository;


import com.simplifit.model.TrackerData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrackerDataRepository extends JpaRepository<TrackerData, Long> {
    
}
