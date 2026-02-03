package com.mcart.product.model;

import jakarta.persistence.*;


@Entity
//@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    String productName;
    String description;
    double price;
    String category;
    int quantity;



}
