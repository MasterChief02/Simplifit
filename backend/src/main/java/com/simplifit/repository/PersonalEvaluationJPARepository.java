package com.simplifit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simplifit.model.PersonalEvaluation;

@Repository
public interface PersonalEvaluationJPARepository extends JpaRepository<PersonalEvaluation, Long> {
    // Custom query methods specific to PersonalEvaluation if needed
}