package com.simplifit.service;

import com.simplifit.model.UserInfo;

import java.util.List;

public interface UserService {
    List<UserInfo> getAllUsers();
    UserInfo getUserById(int userId);
    UserInfo saveUser(UserInfo user);
    void deleteUser(int userId);
}
