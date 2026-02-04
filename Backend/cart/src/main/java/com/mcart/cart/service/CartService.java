package com.mcart.cart.service;

import com.mcart.cart.model.CartItem;
import com.mcart.cart.repo.CartRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    CartRepository cartRepository;

    public CartService(CartRepository cartRepository){
        this.cartRepository = cartRepository;
    }

    public ResponseEntity<?> getAllItems() {
       List<CartItem> cartItems = cartRepository.findAll();
       return new ResponseEntity<>(cartItems, HttpStatus.OK);
    }

    public ResponseEntity<?> deleteById(int id) {
        CartItem item = cartRepository.findById(id).get();

        if(item.getId() !=-1){
            throw new RuntimeException("Invalid Id "+id);
        }
        else{
            cartRepository.deleteById(id);
            return new ResponseEntity<>("Deleted "+id, HttpStatus.OK);
        }
    }

//    public ResponseEntity<?> additem(int id, int quantity) {
//
//
//    }
}
