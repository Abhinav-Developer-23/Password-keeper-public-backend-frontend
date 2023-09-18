package com.example.SpringInitial.Repository;

import com.example.SpringInitial.Model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;


@Repository
public interface UserRepository extends MongoRepository<User,String>
{
    User findByEmail(String email);
    @Query(value = "{ 'email' : ?0 }", fields = "{ 'passwords.title' : 1, '_id' : 0 }")
    List <User> findPasswordTitleByEmail(String email);
}
