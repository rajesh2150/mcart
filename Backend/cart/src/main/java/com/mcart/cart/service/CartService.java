package com.mcart.cart.service;

import com.mcart.cart.feignclient.ProductFeignClient;
import com.mcart.cart.model.CartItem;
import com.mcart.cart.model.ProductDto;
import com.mcart.cart.repo.CartRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    private final CartRepository cartRepository;
    private CartRepository cartrepository;

    private final ProductFeignClient productFeignClient;

    public CartService(CartRepository cartRepository, ProductFeignClient productFeignClient) {
        this.cartRepository = cartRepository;
        this.productFeignClient = productFeignClient;
    }


    public ResponseEntity<CartItem> additem(int id, int quantity) {
        ProductDto product= productFeignClient.getProductById(id);
        CartItem item=new CartItem( 0,product.getProductName(),
                product.getCategory(),
                product.getPrice(),
                quantity);
        return new ResponseEntity<>(cartRepository.save(item), HttpStatus.OK);
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
}
