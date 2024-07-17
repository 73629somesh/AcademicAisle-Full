package com.Academicaisle.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Academicaisle.project.entities.Wishlist;
import com.Academicaisle.project.models.Response;
import com.Academicaisle.project.models.WishListDto;
import com.Academicaisle.project.service.WishlistService;



//@CrossOrigin
@RestController
@RequestMapping("/api/wish")
public class WishListController {
	
	@Autowired
	WishlistService wishlistService;
	
	@GetMapping("/addwish/{customerId}/{productId}")
	public ResponseEntity<?> addToWishList(@PathVariable int customerId, @PathVariable int productId){

		Wishlist wish1=wishlistService.addWishList(customerId,productId);
		if(wish1!=null) {
			return Response.success(wish1);
		}else
			return Response.status(HttpStatus.NOT_FOUND);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deletewishListById(@PathVariable("id") int id){
		wishlistService.deleteById(id);
		return ResponseEntity.status(HttpStatus.OK).body("wishlist deleted successfully");
	}
	
	//send customer i
	@GetMapping("/{id}")
	public List<Wishlist> addToWishList(@PathVariable int id){

		return wishlistService.getAllWishlist(id); 
	}
	
}
