package com.Academicaisle.project.service;


import java.util.List;

import com.Academicaisle.project.entities.Category;


public interface CategoryService {


	
	Category findByName(String categoryName);

	Category addCategory(Category category);

	List<Category> findAllCategory();

}
