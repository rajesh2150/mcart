package com.mcart.product.service;

import com.mcart.product.model.Product;
import com.mcart.product.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    ProductRepo productRepo;

    public ResponseEntity<?> getAllProducts() {
        List<Product> productList = productRepo.findAll();
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }
}
