package com.mcart.product.controller;

import com.mcart.product.model.Product;
import com.mcart.product.service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/product")
public class ProductController {


    ProductService productService;

    ProductController(ProductService productService){
        this.productService = productService;
    }

    @GetMapping("/getAllProducts")
    public ResponseEntity<?> getAllProducts(){
        return productService.getAllProducts();
    }

    @PostMapping("/addProduct")
    public ResponseEntity<?> addProduct(@RequestBody Product product){
        return productService.addProduct(product);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable int id){
        return productService.deleteProduct(id);
    }

    @GetMapping("/getProductById/{id}")
    public ResponseEntity<?>getProductById(@PathVariable int id){
        return productService.getProductById(id);

    }
    @PutMapping("/updateProductById/{id}")
    public ResponseEntity<?>updateProduct(@PathVariable int id,@RequestBody Product product){
        return productService.updateProduct(id,product);

    }
}
