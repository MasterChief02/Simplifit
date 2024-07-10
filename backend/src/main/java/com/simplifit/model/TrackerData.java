package com.simplifit.model;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "tracker_data")
public class TrackerData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "date", nullable = false)
    private Date date;

    @Column(name = "steps")
    private Integer steps;

    @Column(name = "calories")
    private Integer calories;

    @Column(name = "water_intake", precision = 5, scale = 2)
    private BigDecimal waterIntake;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Integer getSteps() {
        return steps;
    }

    public void setSteps(Integer steps) {
        this.steps = steps;
    }

    public Integer getCalories() {
        return calories;
    }

    public void setCalories(Integer calories) {
        this.calories = calories;
    }

    public BigDecimal getWaterIntake() {
        return waterIntake;
    }

    public void setWaterIntake(BigDecimal waterIntake) {
        this.waterIntake = waterIntake;
    }

    
    
}
