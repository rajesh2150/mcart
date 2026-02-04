package com.mcart.cart.repo;

import com.mcart.cart.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<CartItem,Integer> {
}
