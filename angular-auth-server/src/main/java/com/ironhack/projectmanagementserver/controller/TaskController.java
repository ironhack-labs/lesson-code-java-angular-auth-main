package com.ironhack.projectmanagementserver.controller;

import com.ironhack.projectmanagementserver.DTO.TaskDTO;
import com.ironhack.projectmanagementserver.service.impl.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping("/tasks")
    @ResponseStatus(HttpStatus.CREATED)
    public void saveTask(@RequestBody TaskDTO task){
         taskService.saveTask(task);
    }
}
