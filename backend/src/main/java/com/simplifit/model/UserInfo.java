package com.simplifit.model;

import javax.persistence.*;


import java.util.Date;

@Entity
@Table(name = "user_info")
public class UserInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long i;

    @Column(name = "referred_by")
    private String referredBy;

    private String coach;

    @Temporal(TemporalType.DATE)
    private Date date;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(unique = true)
    private String mobile;

    @Column(name = "age", nullable = false)
    private Integer age;

    @Column(name = "height", nullable = false)
    private Double height;

    @Column(name = "initial_weight", nullable = false)
    private Double initialWeight;

    @Column(name = "initial_bmi", nullable = false)
    private Double initialBmi;

    @Column(name = "initial_body_age", nullable = false)
    private Integer initialBodyAge;

    @Column(name = "initial_body_fat", nullable = false)
    private Double initialBodyFat;

    @Column(name = "initial_trunk_fat", nullable = false)
    private Double initialTrunkFat;

    @Column(name = "initial_whole_body_muscle", nullable = false)
    private Double initialWholeBodyMuscle;

    @Column(name = "initial_visceral_fat", nullable = false)
    private Double initialVisceralFat;

    public Long getI() {
        return i;
    }

    public void setI(Long id) {
        this.i = id;
    }

    public String getReferredBy() {
        return referredBy;
    }

    public void setReferredBy(String referredBy) {
        this.referredBy = referredBy;
    }

    public String getCoach() {
        return coach;
    }

    public void setCoach(String coach) {
        this.coach = coach;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Double getHeight() {
        return height;
    }

    public void setHeight(Double height) {
        this.height = height;
    }

    public Double getInitialWeight() {
        return initialWeight;
    }

    public void setInitialWeight(Double initialWeight) {
        this.initialWeight = initialWeight;
    }

    public Double getInitialBmi() {
        return initialBmi;
    }

    public void setInitialBmi(Double initialBmi) {
        this.initialBmi = initialBmi;
    }

    public Integer getInitialBodyAge() {
        return initialBodyAge;
    }

    public void setInitialBodyAge(Integer initialBodyAge) {
        this.initialBodyAge = initialBodyAge;
    }

    public Double getInitialBodyFat() {
        return initialBodyFat;
    }

    public void setInitialBodyFat(Double initialBodyFat) {
        this.initialBodyFat = initialBodyFat;
    }

    public Double getInitialTrunkFat() {
        return initialTrunkFat;
    }

    public void setInitialTrunkFat(Double initialTrunkFat) {
        this.initialTrunkFat = initialTrunkFat;
    }

    public Double getInitialWholeBodyMuscle() {
        return initialWholeBodyMuscle;
    }

    public void setInitialWholeBodyMuscle(Double initialWholeBodyMuscle) {
        this.initialWholeBodyMuscle = initialWholeBodyMuscle;
    }

    public Double getInitialVisceralFat() {
        return initialVisceralFat;
    }

    public void setInitialVisceralFat(Double initialVisceralFat) {
        this.initialVisceralFat = initialVisceralFat;
    }

    public enum Gender {
        M, F, Others
    }
}
