package com.tinhdau.backend.controller;

import com.tinhdau.backend.dto.HomeResponse;
import com.tinhdau.backend.dto.ProductResponse;
import com.tinhdau.backend.service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }
    @GetMapping("/home")
    public HomeResponse home() {
        return productService.getHome();
    }
    @GetMapping("/products")
    public List<ProductResponse> products(@RequestParam(name = "type", required = false) String type) {
        return productService.getProducts(type);
    }
    @GetMapping("/products/{id}")
    public ResponseEntity<ProductResponse> detail(@PathVariable("id") Long id) {
        return productService.getProduct(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}