package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import service.CartService;

@RestController
@RequestMapping("/app/cart")
public class cartController {

    @Autowired
    CartService cartservice;

    @PutMapping("/additem/{productId}")
    public ResponseEntity<?>additem(@PathVariable int id, @PathVariable int quantity){
        return cartservice.additem(id,quantity);
    }
}
