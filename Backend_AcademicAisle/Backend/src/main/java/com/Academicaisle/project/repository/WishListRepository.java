package com.Academicaisle.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.Academicaisle.project.entities.Wishlist;
import com.Academicaisle.project.entities.Product;

public interface WishListRepository extends JpaRepository<Wishlist, Integer>{

	
	@Query(value = "SELECT * FROM Wishlist WHERE customerId = :id", nativeQuery = true)
	List<Wishlist> getAllwishList(int id);

	
	
	
	
}
