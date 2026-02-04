package com.mcart.cart.feignclient;

import com.mcart.cart.model.ProductDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "product-service", url = "http://localhost:9090/api/product")
public interface ProductFeignClient {

    @GetMapping("/getProductById/{id}")
    ProductDto getProductById(@PathVariable("id") int id);
}
