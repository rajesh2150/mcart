package com.mcart.cart.controller;

import com.mcart.cart.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/app/cart")
public class cartController {

    @Autowired
    CartService cartservice;

    @PutMapping("/additem/{productId}")
    public ResponseEntity<?>additem(@PathVariable int id, @PathVariable int quantity){
        return cartservice.additem(id,quantity);
    }

    @GetMapping("/getAll")
    public ResponseEntity<?> getAllItems(){
        return cartservice.getAllItems();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteById(@PathVariable int id){
        return cartservice.deleteById(id);
    }
}
