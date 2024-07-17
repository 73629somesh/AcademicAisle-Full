package com.Academicaisle.project.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Academicaisle.project.entities.Category;


@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer>{

	Category findByCategoryName(String categoryName);

}
