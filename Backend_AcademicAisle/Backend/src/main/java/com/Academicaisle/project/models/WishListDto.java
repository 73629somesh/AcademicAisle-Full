package com.Academicaisle.project.models;


import org.springframework.beans.BeanUtils;

import com.Academicaisle.project.entities.Customer;
import com.Academicaisle.project.entities.Wishlist;
import com.Academicaisle.project.entities.Product;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class WishListDto {
	
	private int id;

	private Product product;
	
	private int qty;
	
	private Customer customer;
	
	public static Wishlist toEntity(WishListDto dto) {
		Wishlist order=new Wishlist();
		// source to destination copied excluding pic parameter
		BeanUtils.copyProperties(dto, order);		
		return order;	
	}
}
