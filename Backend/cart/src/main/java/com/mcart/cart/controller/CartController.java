package com.mcart.cart.controller;

import com.mcart.cart.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/app/cart")
public class CartController {

    @Autowired
    CartService cartservice;

    @PostMapping("/additem/{productId}")
    public ResponseEntity<?>additem(@PathVariable int productId, @RequestParam int quantity){
        return cartservice.additem(productId,quantity);
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
