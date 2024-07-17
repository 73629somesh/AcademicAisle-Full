package com.Academicaisle.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.Academicaisle.project.entities.Customer;
import com.Academicaisle.project.entities.Seller;
import com.Academicaisle.project.models.SellerDto;
import com.Academicaisle.project.repository.ProductRepository;
import com.Academicaisle.project.repository.SellerRepository;

@Service
public class SellerServiceImpl implements SellerService{
	
	@Autowired
	SellerRepository sellerRepo;
	
	@Autowired
	ProductRepository prodRepo;
	
	PasswordEncoder passwordEncoder=new BCryptPasswordEncoder();

	@Override
	public Seller registerSeller(SellerDto sellerDto) {
		Seller seller=sellerRepo.findByEmail(sellerDto.getEmail());
		
		if(seller!=null) {
			return null;
		}else {
			Seller seller1 = new Seller();
			String encodedPassword = passwordEncoder.encode(sellerDto.getPassword());
			sellerDto.setPassword(encodedPassword);
			BeanUtils.copyProperties(sellerDto, seller1);
			System.out.println(seller1);
			return sellerRepo.save(seller1);
		}
	}

	@Override
	public Seller validate(String email, String password) {
		Seller seller=sellerRepo.findByEmail(email);
		if(seller!=null && passwordEncoder.matches(password, seller.getPassword())) {
			return seller;
		}
		return null;
	}

	@Override
	public List<Seller> findAllSellers() {
		// TODO Auto-generated method stub
		return sellerRepo.findAll();
	}

	@Override
	public Optional<Seller> findSellerById(int id) {
		// TODO Auto-generated method stub
		return sellerRepo.findById(id);
	}

	@Override
	public void updateProfile(Seller seller, int id) {
		// TODO Auto-generated method stub
		System.out.println("Updating profile..."+id);
		Optional<Seller> seller1=sellerRepo.findById(id);
		if(seller1!=null) {
			if(seller.getPassword().equals("") || seller.getPassword()==null) {
				
				seller.setPassword(seller1.get().getPassword());
			}else if(seller.getPassword().equals(seller1.get().getPassword())) {
				seller.setPassword(seller1.get().getPassword());
			}else {
				String encodedPassword = passwordEncoder.encode(seller.getPassword());
				seller.setPassword(encodedPassword);
			}
			sellerRepo.save(seller);
		}
	}

	@Override
	public Seller findByEmail(String email) {
		Seller seller=sellerRepo.findByEmail(email);
		return seller;
	}

	@Override
	public void resetPassword(Seller seller, String password) {
		String encodedPassword = passwordEncoder.encode(password);
		seller.setPassword(encodedPassword);
		sellerRepo.save(seller);
	}

	@Override
	public void deleteById(int id) {
		prodRepo.deleteById(id);
	}
	
	@Override
	public Seller getSellerById(int id) {
		Seller s = sellerRepo.findSellerById(id);
		return s;
	}

	@Override
	public void deleteSeller(int id) {
		sellerRepo.deleteById(id);
		
	}

}
