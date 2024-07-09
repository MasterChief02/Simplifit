package com.simplifit.model;

import javax.persistence.*;

@Entity
@Table(name = "personal_evaluation")
public class PersonalEvaluation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UserInfo user;

    @Column(name = "favorite_snacks")
    private String favoriteSnacks;

    @Column(name = "breakfast")
    private String breakfast;

    @Column(name = "daily_water")
    private String dailyWater;

    @Column(name = "veg_non_veg")
    private String vegNonVeg;

    @Column(name = "lunch")
    private String lunch;

    @Column(name = "eating_out")
    private String eatingOut;

    @Column(name = "walk_exercise")
    private String walkExercise;

    @Column(name = "dinner")
    private String dinner;

    @Column(name = "surgery")
    private String surgery;

    @Column(name = "stress")
    private String stress;

    @Column(name = "cravings")
    private String cravings;

    @Column(name = "coffee_tea_soda")
    private String coffeeTeaSoda;

    @Column(name = "bleeding_gums")
    private Boolean bleedingGums;

    @Column(name = "day_time_sleeping_lazy")
    private Boolean dayTimeSleepingLazy;

    @Column(name = "night_sleep_frequent_urination")
    private Boolean nightSleepFrequentUrination;

    @Column(name = "dandruff_hair_fall")
    private Boolean dandruffHairFall;

    @Column(name = "motion_problem")
    private Boolean motionProblem;

    @Column(name = "acidity_gastric")
    private Boolean acidityGastric;

    @Column(name = "body_pain")
    private Boolean bodyPain;

    @Column(name = "asthma_wheezing_breathlessness")
    private Boolean asthmaWheezingBreathlessness;

    @Column(name = "sneezing_dust_allergy")
    private Boolean sneezingDustAllergy;

    @Column(name = "skin_problem")
    private Boolean skinProblem;

    @Column(name = "regular_medication")
    private Boolean regularMedication;

    @Column(name = "medication_for_what")
    private String medicationForWhat;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public UserInfo getUser() {
        return user;
    }

    public void setUser(UserInfo user) {
        this.user = user;
    }

    public String getFavoriteSnacks() {
        return favoriteSnacks;
    }

    public void setFavoriteSnacks(String favoriteSnacks) {
        this.favoriteSnacks = favoriteSnacks;
    }

    public String getBreakfast() {
        return breakfast;
    }

    public void setBreakfast(String breakfast) {
        this.breakfast = breakfast;
    }

    public String getDailyWater() {
        return dailyWater;
    }

    public void setDailyWater(String dailyWater) {
        this.dailyWater = dailyWater;
    }

    public String getVegNonVeg() {
        return vegNonVeg;
    }

    public void setVegNonVeg(String vegNonVeg) {
        this.vegNonVeg = vegNonVeg;
    }

    public String getLunch() {
        return lunch;
    }

    public void setLunch(String lunch) {
        this.lunch = lunch;
    }

    public String getEatingOut() {
        return eatingOut;
    }

    public void setEatingOut(String eatingOut) {
        this.eatingOut = eatingOut;
    }

    public String getWalkExercise() {
        return walkExercise;
    }

    public void setWalkExercise(String walkExercise) {
        this.walkExercise = walkExercise;
    }

    public String getDinner() {
        return dinner;
    }

    public void setDinner(String dinner) {
        this.dinner = dinner;
    }

    public String getSurgery() {
        return surgery;
    }

    public void setSurgery(String surgery) {
        this.surgery = surgery;
    }

    public String getStress() {
        return stress;
    }

    public void setStress(String stress) {
        this.stress = stress;
    }

    public String getCravings() {
        return cravings;
    }

    public void setCravings(String cravings) {
        this.cravings = cravings;
    }

    public String getCoffeeTeaSoda() {
        return coffeeTeaSoda;
    }

    public void setCoffeeTeaSoda(String coffeeTeaSoda) {
        this.coffeeTeaSoda = coffeeTeaSoda;
    }

    public Boolean getBleedingGums() {
        return bleedingGums;
    }

    public void setBleedingGums(Boolean bleedingGums) {
        this.bleedingGums = bleedingGums;
    }

    public Boolean getDayTimeSleepingLazy() {
        return dayTimeSleepingLazy;
    }

    public void setDayTimeSleepingLazy(Boolean dayTimeSleepingLazy) {
        this.dayTimeSleepingLazy = dayTimeSleepingLazy;
    }

    public Boolean getNightSleepFrequentUrination() {
        return nightSleepFrequentUrination;
    }

    public void setNightSleepFrequentUrination(Boolean nightSleepFrequentUrination) {
        this.nightSleepFrequentUrination = nightSleepFrequentUrination;
    }

    public Boolean getDandruffHairFall() {
        return dandruffHairFall;
    }

    public void setDandruffHairFall(Boolean dandruffHairFall) {
        this.dandruffHairFall = dandruffHairFall;
    }

    public Boolean getMotionProblem() {
        return motionProblem;
    }

    public void setMotionProblem(Boolean motionProblem) {
        this.motionProblem = motionProblem;
    }

    public Boolean getAcidityGastric() {
        return acidityGastric;
    }

    public void setAcidityGastric(Boolean acidityGastric) {
        this.acidityGastric = acidityGastric;
    }

    public Boolean getBodyPain() {
        return bodyPain;
    }

    public void setBodyPain(Boolean bodyPain) {
        this.bodyPain = bodyPain;
    }

    public Boolean getAsthmaWheezingBreathlessness() {
        return asthmaWheezingBreathlessness;
    }

    public void setAsthmaWheezingBreathlessness(Boolean asthmaWheezingBreathlessness) {
        this.asthmaWheezingBreathlessness = asthmaWheezingBreathlessness;
    }

    public Boolean getSneezingDustAllergy() {
        return sneezingDustAllergy;
    }

    public void setSneezingDustAllergy(Boolean sneezingDustAllergy) {
        this.sneezingDustAllergy = sneezingDustAllergy;
    }

    public Boolean getSkinProblem() {
        return skinProblem;
    }

    public void setSkinProblem(Boolean skinProblem) {
        this.skinProblem = skinProblem;
    }

    public Boolean getRegularMedication() {
        return regularMedication;
    }

    public void setRegularMedication(Boolean regularMedication) {
        this.regularMedication = regularMedication;
    }

    public String getMedicationForWhat() {
        return medicationForWhat;
    }

    public void setMedicationForWhat(String medicationForWhat) {
        this.medicationForWhat = medicationForWhat;
    }
}
