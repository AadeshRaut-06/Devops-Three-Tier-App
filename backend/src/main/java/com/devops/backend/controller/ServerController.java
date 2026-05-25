package com.devops.backend.controller;

import com.devops.backend.entity.Server;
import com.devops.backend.service.ServerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/servers")
@CrossOrigin("*")
public class ServerController {

    @Autowired
    private ServerService serverService;

    @GetMapping
    public List<Server> getServers() {
        return serverService.getAllServers();
    }

    @PostMapping
    public Server addServer(@RequestBody Server server) {
        return serverService.saveServer(server);
    }
}