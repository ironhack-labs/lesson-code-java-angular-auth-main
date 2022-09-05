package com.ironhack.projectmanagementserver.repository;

import com.ironhack.projectmanagementserver.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task,Long> {
}
