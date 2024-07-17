package com.Academicaisle.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Academicaisle.project.entities.Customer;
import com.Academicaisle.project.entities.Wishlist;
import com.Academicaisle.project.entities.Product;
import com.Academicaisle.project.repository.CustomerRepository;
import com.Academicaisle.project.repository.ProductRepository;
import com.Academicaisle.project.repository.WishListRepository;

@Service
public class WishListServiceImpl implements WishlistService{
	
	@Autowired
	WishListRepository wishRepo;
	
	@Autowired
	CustomerRepository customerRepo;
	
	@Autowired 
	ProductRepository productRepo;

	@Override
	public Wishlist addWishList(int customerId, int productId) {
        // Assuming you have Customer and Product entities with proper mappings
        Customer customer = customerRepo.findCustomerById(customerId);
        Product product = productRepo.findProductById(productId);

        if (customer != null && product != null) {
        	Wishlist wishlist = new Wishlist();
            wishlist.setCustomer(customer);
            wishlist.setProduct(product);

            wishRepo.save(wishlist);

            // You can return OrderDetails if necessary, or any other response
            return wishlist;
        }
		return null;

}

	@Override
	public void deleteById(int id) {
	wishRepo.deleteById(id);
		
	}

	@Override
	public List<Wishlist> getAllWishlist(int id) {
		return wishRepo.getAllwishList(id);
	}

	

}

