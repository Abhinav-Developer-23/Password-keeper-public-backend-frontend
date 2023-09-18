package com.example.SpringInitial;

import com.example.SpringInitial.Config.Encryption;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.redis.repository.configuration.EnableRedisRepositories;

@SpringBootApplication
@EnableRedisRepositories
public class PasswordSaverApplication {

	public static void main(String[] args) throws Exception
	{

		SpringApplication.run(PasswordSaverApplication.class, Encryption.getDecryptedSecretsArray(args[0]));
	}

}
