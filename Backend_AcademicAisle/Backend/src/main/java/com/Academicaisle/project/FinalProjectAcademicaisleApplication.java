package com.Academicaisle.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;


@SpringBootApplication
@EnableConfigurationProperties({
    com.Academicaisle.project.utils.FileUploadProperties.class
})
public class FinalProjectAcademicaisleApplication {

	public static void main(String[] args) {
		SpringApplication.run(FinalProjectAcademicaisleApplication.class, args);
	}

}
