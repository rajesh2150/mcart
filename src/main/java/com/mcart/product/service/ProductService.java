package com.mcart.product.service;

import com.mcart.product.model.Product;
import com.mcart.product.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class ProductService {
    @Autowired
    ProductRepo productRepo;

    public ResponseEntity<?> getAllProducts() {
        List<Product> productList = productRepo.findAll();
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }

    public ResponseEntity<?> addProduct(Product product) {
        if(Objects.equals(product.getProductName(), "") || Objects.equals(product.getDescription(),"")){
           return new ResponseEntity<>("Invalid details",HttpStatus.NOT_ACCEPTABLE);
        }
        else{
            productRepo.save(product);
            return new ResponseEntity<>(product,HttpStatus.OK);
        }

    }

    public ResponseEntity<?> deleteProduct(int id) {
        Product product = productRepo.findById(id).get();

        if(product.getId() !=-1){
            productRepo.deleteById(id);
            return new ResponseEntity<>("Deleted "+product.getId(), HttpStatus.OK);
        }
        else{
        return new ResponseEntity<>("Invalid Id "+product.getId(),HttpStatus.NOT_FOUND);
        }
    }
}
