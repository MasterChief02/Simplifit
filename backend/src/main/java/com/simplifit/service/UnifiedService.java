package com.simplifit.service;

import com.simplifit.model.UserInfo;
import com.simplifit.model.HealthMetrics;
import com.simplifit.model.PersonalEvaluation;
import com.simplifit.model.BodyMeasurements;
import com.simplifit.repository.UserJPARepository;
import com.simplifit.repository.HealthMetricsJPARepository;
import com.simplifit.repository.PersonalEvaluationJPARepository;
import com.simplifit.repository.BodyMeasurementsJPARepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class UnifiedService {

    private final UserJPARepository userInfoRepository;
    private final HealthMetricsJPARepository healthMetricsRepository;
    private final PersonalEvaluationJPARepository personalEvaluationRepository;
    private final BodyMeasurementsJPARepository bodyMeasurementsRepository;

    @Autowired
    public UnifiedService(UserJPARepository userInfoRepository,
                          HealthMetricsJPARepository healthMetricsRepository,
                          PersonalEvaluationJPARepository personalEvaluationRepository,
                          BodyMeasurementsJPARepository bodyMeasurementsRepository) {
        this.userInfoRepository = userInfoRepository;
        this.healthMetricsRepository = healthMetricsRepository;
        this.personalEvaluationRepository = personalEvaluationRepository;
        this.bodyMeasurementsRepository = bodyMeasurementsRepository;
    }

    // Methods for UserInfo
    public List<UserInfo> getAllUsers() {
        return userInfoRepository.findAll();
    }

    public UserInfo getUserById(Integer id) {
        return userInfoRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User with id " + id + " not found"));
    }

    public UserInfo saveUser(UserInfo user) {
        return userInfoRepository.save(user);
    }

    public void deleteUser(Integer id) {
        if (!userInfoRepository.existsById(id)) {
            throw new EntityNotFoundException("User with id " + id + " not found");
        }
        userInfoRepository.deleteById(id);
    }

    // Methods for HealthMetrics
    public List<HealthMetrics> getAllHealthMetrics() {
        return healthMetricsRepository.findAll();
    }

    public HealthMetrics getHealthMetricsById(Long id) {
        return healthMetricsRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("HealthMetrics with id " + id + " not found"));
    }

    public HealthMetrics saveHealthMetrics(HealthMetrics healthMetrics) {
        return healthMetricsRepository.save(healthMetrics);
    }

    public void deleteHealthMetrics(Long id) {
        if (!healthMetricsRepository.existsById(id)) {
            throw new EntityNotFoundException("HealthMetrics with id " + id + " not found");
        }
        healthMetricsRepository.deleteById(id);
    }

    // Methods for PersonalEvaluation
    public List<PersonalEvaluation> getAllPersonalEvaluations() {
        return personalEvaluationRepository.findAll();
    }

    public PersonalEvaluation getPersonalEvaluationById(Long id) {
        return personalEvaluationRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Personal Evaluation with id " + id + " not found"));
    }

    public PersonalEvaluation savePersonalEvaluation(PersonalEvaluation personalEvaluation) {
        return personalEvaluationRepository.save(personalEvaluation);
    }

    public void deletePersonalEvaluation(Long id) {
        if (!personalEvaluationRepository.existsById(id)) {
            throw new EntityNotFoundException("Personal Evaluation with id " + id + " not found");
        }
        personalEvaluationRepository.deleteById(id);
    }

    // Methods for BodyMeasurements
    public List<BodyMeasurements> getAllBodyMeasurements() {
        return bodyMeasurementsRepository.findAll();
    }

    public BodyMeasurements getBodyMeasurementsById(Long id) {
        return bodyMeasurementsRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("BodyMeasurements with id " + id + " not found"));
    }

    public BodyMeasurements saveBodyMeasurements(BodyMeasurements bodyMeasurements) {
        return bodyMeasurementsRepository.save(bodyMeasurements);
    }

    public void deleteBodyMeasurements(Long id) {
        if (!bodyMeasurementsRepository.existsById(id)) {
            throw new EntityNotFoundException("BodyMeasurements with id " + id + " not found");
        }
        bodyMeasurementsRepository.deleteById(id);
    }

    
}
