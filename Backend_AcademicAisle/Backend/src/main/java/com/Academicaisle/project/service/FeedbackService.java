package com.Academicaisle.project.service;

import java.util.List;

import com.Academicaisle.project.entities.Feedback;

public interface FeedbackService {

	void saveFeedback(Feedback feedback);

	List<Feedback> findAllFeedbacks();

}
