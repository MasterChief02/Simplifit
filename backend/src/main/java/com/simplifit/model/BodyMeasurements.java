package com.simplifit.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "body_measurements")
public class BodyMeasurements {

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
    private Double neck;

    @Column(nullable = false)
    private Double chest;

    @Column(nullable = false)
    private Double trunk;

    @Column(nullable = false)
    private Double waist;

    @Column(nullable = false)
    private Double hips;

    @Column(name = "arms_upper", nullable = false)
    private Double armsUpper;

    @Column(name = "arms_lower", nullable = false)
    private Double armsLower;

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

    public Double getNeck() {
        return neck;
    }

    public void setNeck(Double neck) {
        this.neck = neck;
    }

    public Double getChest() {
        return chest;
    }

    public void setChest(Double chest) {
        this.chest = chest;
    }

    public Double getTrunk() {
        return trunk;
    }

    public void setTrunk(Double trunk) {
        this.trunk = trunk;
    }

    public Double getWaist() {
        return waist;
    }

    public void setWaist(Double waist) {
        this.waist = waist;
    }

    public Double getHips() {
        return hips;
    }

    public void setHips(Double hips) {
        this.hips = hips;
    }

    public Double getArmsUpper() {
        return armsUpper;
    }

    public void setArmsUpper(Double armsUpper) {
        this.armsUpper = armsUpper;
    }

    public Double getArmsLower() {
        return armsLower;
    }

    public void setArmsLower(Double armsLower) {
        this.armsLower = armsLower;
    }
}
