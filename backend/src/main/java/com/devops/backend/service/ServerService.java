package com.devops.backend.service;

import com.devops.backend.entity.Server;
import com.devops.backend.repository.ServerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServerService {

    @Autowired
    private ServerRepository serverRepository;

    public List<Server> getAllServers() {
        return serverRepository.findAll();
    }

    public Server saveServer(Server server) {
        return serverRepository.save(server);
    }
}