package com.ironhack.projectmanagementserver.service.interfaces;

import com.ironhack.projectmanagementserver.model.User;

import java.util.List;

public interface UserServiceInterface {
    User saveUser(User userSignupDTO);

    List<User> getUsers();
}
