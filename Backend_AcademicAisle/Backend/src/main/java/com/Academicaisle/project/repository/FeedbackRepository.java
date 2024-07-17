package com.Academicaisle.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Academicaisle.project.entities.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Integer>{

}
