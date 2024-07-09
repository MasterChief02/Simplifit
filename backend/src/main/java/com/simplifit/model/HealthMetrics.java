package com.simplifit.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "health_metrics")
public class HealthMetrics {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", nullable = false)
    private UserInfo user;

    @Temporal(TemporalType.DATE)
    @Column(nullable = false)
    private Date date;

    @Column(nullable = false)
    private Double weight;

    @Column(name = "body_fat_percentage", nullable = false)
    private Double bodyFatPercentage;

    @Column(name = "visceral_fat_percentage", nullable = false)
    private Double visceralFatPercentage;

    @Column(name = "rm_kcal", nullable = false)
    private Double rmKcal;

    @Column(nullable = false)
    private Double bmi;

    @Column(name = "body_age", nullable = false)
    private Integer bodyAge;

    @Column(name = "whole_body_sf", nullable = false)
    private Double wholeBodySf;

    @Column(name = "whole_body_skm", nullable = false)
    private Double wholeBodySkm;

    @Column(name = "trunk_sf", nullable = false)
    private Double trunkSf;

    @Column(name = "trunk_skm", nullable = false)
    private Double trunkSkm;

    @Column(name = "arms_sf", nullable = false)
    private Double armsSf;

    @Column(name = "arms_skm", nullable = false)
    private Double armsSkm;

    @Column(name = "legs_sf", nullable = false)
    private Double legsSf;

    @Column(name = "legs_skm", nullable = false)
    private Double legsSkm;


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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public Double getBodyFatPercentage() {
        return bodyFatPercentage;
    }

    public void setBodyFatPercentage(Double bodyFatPercentage) {
        this.bodyFatPercentage = bodyFatPercentage;
    }

    public Double getVisceralFatPercentage() {
        return visceralFatPercentage;
    }

    public void setVisceralFatPercentage(Double visceralFatPercentage) {
        this.visceralFatPercentage = visceralFatPercentage;
    }

    public Double getRmKcal() {
        return rmKcal;
    }

    public void setRmKcal(Double rmKcal) {
        this.rmKcal = rmKcal;
    }

    public Double getBmi() {
        return bmi;
    }

    public void setBmi(Double bmi) {
        this.bmi = bmi;
    }

    public Integer getBodyAge() {
        return bodyAge;
    }

    public void setBodyAge(Integer bodyAge) {
        this.bodyAge = bodyAge;
    }

    public Double getWholeBodySf() {
        return wholeBodySf;
    }

    public void setWholeBodySf(Double wholeBodySf) {
        this.wholeBodySf = wholeBodySf;
    }

    public Double getWholeBodySkm() {
        return wholeBodySkm;
    }

    public void setWholeBodySkm(Double wholeBodySkm) {
        this.wholeBodySkm = wholeBodySkm;
    }

    public Double getTrunkSf() {
        return trunkSf;
    }

    public void setTrunkSf(Double trunkSf) {
        this.trunkSf = trunkSf;
    }

    public Double getTrunkSkm() {
        return trunkSkm;
    }

    public void setTrunkSkm(Double trunkSkm) {
        this.trunkSkm = trunkSkm;
    }

    public Double getArmsSf() {
        return armsSf;
    }

    public void setArmsSf(Double armsSf) {
        this.armsSf = armsSf;
    }

    public Double getArmsSkm() {
        return armsSkm;
    }

    public void setArmsSkm(Double armsSkm) {
        this.armsSkm = armsSkm;
    }

    public Double getLegsSf() {
        return legsSf;
    }

    public void setLegsSf(Double legsSf) {
        this.legsSf = legsSf;
    }

    public Double getLegsSkm() {
        return legsSkm;
    }

    public void setLegsSkm(Double legsSkm) {
        this.legsSkm = legsSkm;
    }
}
