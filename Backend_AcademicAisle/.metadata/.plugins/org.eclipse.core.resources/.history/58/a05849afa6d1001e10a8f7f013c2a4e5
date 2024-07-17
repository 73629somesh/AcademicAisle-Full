package com.woodworks.project.entities;



import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="Wishlist")
public class OrderDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="productId")
	private Product product;
	
	private int qty;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="customerId")
	private Customer customer;
//	
//	@ManyToOne
//	@JoinColumn(name="orderId")
//	private Orders orders;
}
