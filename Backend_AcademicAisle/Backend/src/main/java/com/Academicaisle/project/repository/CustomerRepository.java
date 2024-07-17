package com.Academicaisle.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.Academicaisle.project.entities.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	
	Customer findByEmail(String email);

	@Query(value = "SELECT * FROM CUSTOMER WHERE id = :customerId", nativeQuery = true)
    Customer findCustomerById( int customerId);
	
	
}
