package com.mcart.gateway;


import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class TestRouteConfig {

    @Bean
    public RouteLocator testRoute(RouteLocatorBuilder builder) {
        return builder.routes()
                // merge test route
                .route("hardcoded-test", r -> r.path("/hard/**")
                        .uri("https://httpbin.org"))
                // merge product-service route
                .route("product-service", r -> r.path("/api/product/**")
                        .uri("lb://product-service"))
                // merge cart-service route
                .route("cart-service", r -> r.path("/app/cart/**")
                        .uri("lb://cart-service"))
                .build();
    }
}
