package com.Academicaisle.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.Academicaisle.project.entities.Seller;

@Repository
public interface SellerRepository extends JpaRepository<Seller, Integer>{

	Seller findByEmail(String email);
	
	@Query(value = "SELECT * FROM sellers WHERE id = :id", nativeQuery = true)
	Seller findSellerById(int id);
}
