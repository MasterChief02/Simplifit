package com.simplifit.service;

import com.simplifit.model.UserInfo;
import com.simplifit.model.HealthMetrics;
import com.simplifit.model.PersonalEvaluation;
import com.simplifit.model.TrackerData;
import com.simplifit.model.UserCredentials;
import com.simplifit.model.BodyMeasurements;
import com.simplifit.repository.UserJPARepository;
import com.simplifit.repository.HealthMetricsJPARepository;
import com.simplifit.repository.PersonalEvaluationJPARepository;
import com.simplifit.repository.TrackerDataRepository;
import com.simplifit.repository.BodyMeasurementsJPARepository;
import com.simplifit.repository.UserCredentialsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
public class UnifiedService {

    private final UserJPARepository userInfoRepository;
    private final HealthMetricsJPARepository healthMetricsRepository;
    private final PersonalEvaluationJPARepository personalEvaluationRepository;
    private final BodyMeasurementsJPARepository bodyMeasurementsRepository;
    private final UserCredentialsRepository userCredentialsRepository;
    private final TrackerDataRepository trackerDataRepository;

    private UserCredentials userCredentials;
    


    @Autowired
    public UnifiedService(UserJPARepository userInfoRepository,
                          HealthMetricsJPARepository healthMetricsRepository,
                          PersonalEvaluationJPARepository personalEvaluationRepository,
                          BodyMeasurementsJPARepository bodyMeasurementsRepository,
                          UserCredentialsRepository userCredentialsRepository,
                          TrackerDataRepository trackerDataRepository
                          ) {
        this.userInfoRepository = userInfoRepository;
        this.healthMetricsRepository = healthMetricsRepository;
        this.personalEvaluationRepository = personalEvaluationRepository;
        this.bodyMeasurementsRepository = bodyMeasurementsRepository;
        this.userCredentialsRepository = userCredentialsRepository;
        this.trackerDataRepository = trackerDataRepository;
        this.userCredentials = null;
    }

    public void setUser(UserCredentials userCredentials){
        this.userCredentials = userCredentials;
    }

    // Methods for UserInfo
    public List<UserInfo> getAllUsers() {
        return userInfoRepository.findAll();
    }

    

    public UserInfo getUserById(Integer id) {
        return userInfoRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User with id " + id + " not found"));
    }

    public boolean verifyUser(String username, String password) {
   
        // System.out.println(userCredentialsRepository.findByUsernameAndPassword(username, password));
        List<UserCredentials> users = userCredentialsRepository.findByUsernameAndPassword(username, password);
        if (users.size() > 0) {
            setUser(users.get(0));
        }
        
        return (users.size() > 0);
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


     public TrackerData saveTrackerData(TrackerData trackerData) {
        return trackerDataRepository.save(trackerData);
    }

    public List<TrackerData> getAllTrackerData() {
        return trackerDataRepository.findAll();
    }

    public Optional<TrackerData> getTrackerDataById(Long id) {
        return trackerDataRepository.findById(id);
    }

    public void deleteTrackerData(Long id) {
        trackerDataRepository.deleteById(id);
    }

    public TrackerData updateTrackerData(Long id, TrackerData newData) {
        Optional<TrackerData> existingDataOptional = trackerDataRepository.findById(id);
        if (existingDataOptional.isPresent()) {
            TrackerData existingData = existingDataOptional.get();
            existingData.setSteps(newData.getSteps());
            existingData.setCalories(newData.getCalories());
            existingData.setWaterIntake(newData.getWaterIntake());
            return trackerDataRepository.save(existingData);
        } else {
            throw new RuntimeException("TrackerData not found with id " + id);
        }
    }

    
}
