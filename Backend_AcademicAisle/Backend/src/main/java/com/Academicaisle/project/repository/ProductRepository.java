package com.Academicaisle.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.Academicaisle.project.entities.Category;
import com.Academicaisle.project.entities.Customer;
import com.Academicaisle.project.entities.Product;
import com.Academicaisle.project.entities.Seller;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

	List<Product> findBySeller(Seller seller);

	List<Product> findByCategory(Category category);

	
	@Query(value = "SELECT * FROM PRODUCT WHERE productid = :productId", nativeQuery = true)
	Product findProductById(int productId);

//	@Query(value = "SELECT * FROM Product WHERE productId = :productId", nativeQuery = true)
//	Product getProductById(int productId);

	
}
