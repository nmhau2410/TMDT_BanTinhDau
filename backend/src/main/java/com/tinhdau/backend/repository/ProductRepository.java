package com.tinhdau.backend.repository;

import com.tinhdau.backend.entity.Product;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findTop4ByStatusAndSalePriceIsNotNullOrderBySoldCountDesc(String status);
    List<Product> findTop4ByStatusOrderByCreatedAtDescIdDesc(String status);
    List<Product> findTop8ByStatusOrderBySoldCountDesc(String status);
    List<Product> findTop8ByStatusAndProductTypeOrderBySoldCountDesc(String status, String productType);
    List<Product> findByStatus(String status, Sort sort);
    List<Product> findByStatusAndProductType(String status, String productType, Sort sort);
    @Query("select p from Product p left join fetch p.images where p.id = :id")
    Optional<Product> findDetailById(@Param("id") Long id);
}