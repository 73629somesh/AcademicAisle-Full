package com.Academicaisle.project.service;

import java.util.List;

import com.Academicaisle.project.entities.Wishlist;

public interface WishlistService {

	

	Wishlist addWishList(int customerId, int productId);

	void deleteById(int id);

	List<Wishlist> getAllWishlist(int id);
	
}
