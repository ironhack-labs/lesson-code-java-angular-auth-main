package com.ironhack.projectmanagementserver.service.impl;

import com.ironhack.projectmanagementserver.DTO.TaskDTO;
import com.ironhack.projectmanagementserver.model.Task;
import com.ironhack.projectmanagementserver.repository.ProjectRepository;
import com.ironhack.projectmanagementserver.repository.TaskRepository;
import com.ironhack.projectmanagementserver.service.interfaces.TaskServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskService implements TaskServiceInterface {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private TaskRepository taskRepository;

    public void saveTask(TaskDTO task) {
        Task newTask = new Task();
        newTask.setTitle(task.getTitle());
        newTask.setDescription(task.getDescription());
        newTask.setProject(projectRepository.findById(task.getProjectId()).get());
        taskRepository.save(newTask);
    }
}
