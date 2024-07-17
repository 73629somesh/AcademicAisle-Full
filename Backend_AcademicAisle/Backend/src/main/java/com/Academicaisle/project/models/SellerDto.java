package com.Academicaisle.project.models;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SellerDto {

	private String name;
	
	private String city;
	
	private String email;
	
	private String password;
	
	private long phone;
	
	private Date createdTimestamp=new Date();
	
	//used for forget password
	private String otp;
}
