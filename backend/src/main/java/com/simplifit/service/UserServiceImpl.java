package com.simplifit.service;

import com.simplifit.model.UserInfo;
import com.simplifit.repository.UserJPARepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserJPARepository userRepository;

    @Autowired
    public UserServiceImpl(@Qualifier("userJPARepository") UserJPARepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<UserInfo> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public UserInfo getUserById(int userId) {
        Optional<UserInfo> optionalUser = userRepository.findById(userId);
        return optionalUser.orElse(null);
    }

    @Override
    public UserInfo saveUser(UserInfo user) {
        return userRepository.save(user);
    }

    @Override
    public void deleteUser(int userId) {
        userRepository.deleteById(userId);
    }
}
