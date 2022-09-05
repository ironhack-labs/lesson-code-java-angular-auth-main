package com.ironhack.projectmanagementserver.service.interfaces;

import com.ironhack.projectmanagementserver.model.Role;

public interface RoleServiceInterface {
    Role saveRole(Role role);

    void addRoleToUser(String email, String roleName);
}
