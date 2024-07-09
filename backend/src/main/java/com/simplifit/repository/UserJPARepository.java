package com.simplifit.repository;

import com.simplifit.model.UserInfo;

import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Primary
@Repository
public interface UserJPARepository extends JpaRepository<UserInfo, Integer> {
    
}
