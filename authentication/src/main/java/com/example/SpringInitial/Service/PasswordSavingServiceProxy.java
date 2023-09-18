package com.example.SpringInitial.Service;

import com.example.SpringInitial.Model.FeignRequests.GetAllTitles;
import com.example.SpringInitial.Model.FeignRequests.GetPasswordByEmailAndTitleRequest;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.retry.annotation.Retry;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Component
@FeignClient(name = "PasswordSavingService", url = "localhost:8081",configuration = com.example.SpringInitial.Configs.PasswordSavingServiceConfiguration.class)
public interface PasswordSavingServiceProxy
{
    @PostMapping("/PasswordSavingService/getPasswordByEmailAndTitle")
    @Retry(name = "/PasswordSavingService/getPasswordByEmailAndTitle")
    @CircuitBreaker(name = "PasswordSavingService/getPasswordByEmailAndTitle")
    public ResponseEntity<String> getPasswordByEmailAndTitle(@RequestBody GetPasswordByEmailAndTitleRequest getPasswordByEmailAndTitleRequest);

    @PostMapping("/PasswordSavingService/getAllTitles")
    public ResponseEntity<List<String>> getAllTitles(@RequestBody GetAllTitles getAllTitles);
}
