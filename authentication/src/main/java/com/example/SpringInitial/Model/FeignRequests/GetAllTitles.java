package com.example.SpringInitial.Model.FeignRequests;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetAllTitles
{

    @NotNull
    private String email;

}
