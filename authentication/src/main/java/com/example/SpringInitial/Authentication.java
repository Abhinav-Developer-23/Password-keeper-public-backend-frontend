package com.example.SpringInitial;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cloud.openfeign.EnableFeignClients;

import java.util.TimeZone;
import com.example.SpringInitial.Configs.Encryption;

@SpringBootApplication
@EnableCaching
@EnableFeignClients
public class Authentication
{


    public static void main(String[] args) throws Exception
    {

        SpringApplication.run(Authentication.class, Encryption.getDecryptedSecretsArray(args[0]));
        TimeZone.setDefault(TimeZone.getTimeZone("IST"));
    }
}
