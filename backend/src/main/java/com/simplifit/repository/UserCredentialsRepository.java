package com.simplifit.repository;

import com.simplifit.model.UserCredentials;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserCredentialsRepository extends JpaRepository<UserCredentials, Long>{

    @Query("SELECT u FROM UserCredentials u WHERE u.username = ?1 AND u.password = ?2")
    List<UserCredentials> findByUsernameAndPassword(String username, String password);
    
}
