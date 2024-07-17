package com.Academicaisle.project.service;

import java.util.List;
import java.util.Optional;

import com.Academicaisle.project.entities.Seller;
import com.Academicaisle.project.models.SellerDto;

public interface SellerService {

	Seller registerSeller(SellerDto sellerDto);

	Seller validate(String email, String password);

	List<Seller> findAllSellers();

	Optional<Seller> findSellerById(int id);

	void updateProfile(Seller seller, int id);

	Seller findByEmail(String email);

	void resetPassword(Seller seller, String password);

	void deleteById(int id);
	
	Seller getSellerById(int id);

	void deleteSeller(int id);

}
